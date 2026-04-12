"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

type PixelCell = {
  x: number;
  y: number;
  lowOpacity: number;
  highOpacity: number;
  flickerSpeed: number;
  phase: number;
};

type HomeBackgroundProps = {
  quality?: "default" | "lite";
};

const QUALITY_CONFIG = {
  default: {
    pixelSize: 18,
    targetFrameMs: 1000 / 30,
    updateStride: 2,
  },
  lite: {
    pixelSize: 22,
    targetFrameMs: 1000 / 22,
    updateStride: 3,
  },
} as const;

function seededNoise(index: number): number {
  const x = Math.sin(index * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export default function HomeBackground({ quality = "default" }: HomeBackgroundProps) {
  const config = QUALITY_CONFIG[quality];
  const pixelSize = config.pixelSize;
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });
  const pixelRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const updateGrid = () => {
      const cols = Math.ceil(window.innerWidth / pixelSize) + 2;
      const rows = Math.ceil(window.innerHeight / pixelSize) + 2;
      setGrid({ cols, rows });
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, [pixelSize]);

  const cells = useMemo(() => {
    const total = grid.cols * grid.rows;
    return Array.from({ length: total }, (_, i): PixelCell => {
      const col = i % grid.cols;
      const row = Math.floor(i / grid.cols);
      const x = grid.cols > 1 ? col / (grid.cols - 1) : 0.5;
      const y = grid.rows > 1 ? row / (grid.rows - 1) : 0.5;

      const sideDensity = Math.pow(Math.abs(x - 0.5) * 2, 1.45);
      const centerLift = Math.exp(-Math.pow((x - 0.5) / 0.18, 2));
      const verticalDepth = y * 0.09;
      const random = seededNoise(i * 3 + 7) * 0.3 - 0.15;

      const base = Math.max(0.08, Math.min(0.28, 0.18 + sideDensity * 0.05 - centerLift * 0.03 + verticalDepth * 0.14 + random * 0.2));
      const peak = Math.min(0.48, base + (0.07 + seededNoise(i * 11 + 29) * 0.1));

      return {
        x: col * pixelSize + pixelSize / 2,
        y: row * pixelSize + pixelSize / 2,
        lowOpacity: base,
        highOpacity: peak,
        flickerSpeed: 0.0007 + seededNoise(i * 17 + 3) * 0.0012,
        phase: seededNoise(i * 23 + 19) * Math.PI * 2,
      };
    });
  }, [grid.cols, grid.rows, pixelSize]);

  useEffect(() => {
    if (!cells.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    let rafId = 0;
    let prevTime = performance.now();
    let lastPaintTime = 0;
    let framePartition = 0;

    const desktopVelocity = { vx: 0.23, vy: 0.18 };
    const mobileVelocity = { vx: 0.18, vy: 0.14 };

    const ball = {
      x: window.innerWidth * 0.28,
      y: window.innerHeight * 0.42,
      vx: window.innerWidth < 768 ? mobileVelocity.vx : desktopVelocity.vx,
      vy: window.innerWidth < 768 ? mobileVelocity.vy : desktopVelocity.vy,
    };

    const render = (now: number) => {
      if (document.visibilityState === "hidden") {
        rafId = requestAnimationFrame(render);
        return;
      }

      const dt = Math.min(33, now - prevTime);
      prevTime = now;

      if (now - lastPaintTime < config.targetFrameMs) {
        rafId = requestAnimationFrame(render);
        return;
      }

      lastPaintTime = now;

      const width = window.innerWidth;
      const height = window.innerHeight;

      const isMobile = width < 768;
      const ballSize = isMobile ? pixelSize * 8.8 : pixelSize * 10.2;
      const ballRadius = isMobile ? pixelSize * 10.4 : pixelSize * 12;

      const targetVx = isMobile ? mobileVelocity.vx : desktopVelocity.vx;
      const targetVy = isMobile ? mobileVelocity.vy : desktopVelocity.vy;
      ball.vx = ball.vx >= 0 ? Math.abs(targetVx) : -Math.abs(targetVx);
      ball.vy = ball.vy >= 0 ? Math.abs(targetVy) : -Math.abs(targetVy);

      ball.x += ball.vx * dt;
      ball.y += ball.vy * dt;

      const minX = ballSize / 2;
      const minY = ballSize / 2;
      const maxX = width - ballSize / 2;
      const maxY = height - ballSize / 2;

      if (ball.x <= minX) {
        ball.x = minX;
        ball.vx = Math.abs(ball.vx);
      } else if (ball.x >= maxX) {
        ball.x = maxX;
        ball.vx = -Math.abs(ball.vx);
      }

      if (ball.y <= minY) {
        ball.y = minY;
        ball.vy = Math.abs(ball.vy);
      } else if (ball.y >= maxY) {
        ball.y = maxY;
        ball.vy = -Math.abs(ball.vy);
      }

      for (let i = framePartition; i < cells.length; i += config.updateStride) {
        const el = pixelRefs.current[i];
        if (!el) {
          continue;
        }

        const cell = cells[i];
        const flicker = cell.lowOpacity + ((Math.sin(now * cell.flickerSpeed + cell.phase) + 1) / 2) * (cell.highOpacity - cell.lowOpacity);
        const dx = cell.x - ball.x;
        const dy = cell.y - ball.y;
        const dist = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - dist / ballRadius);
        const boosted = Math.min(0.95, flicker + influence * 0.72);

        el.style.opacity = `${boosted}`;
      }

      framePartition = (framePartition + 1) % config.updateStride;

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [cells, config, pixelSize]);

  return (
    <div className="home-pixel-field" aria-hidden="true">
      <div
        className="home-pixel-grid"
        style={
          {
            "--home-pixel-size": `${pixelSize}px`,
            "--home-pixel-cols": grid.cols,
          } as CSSProperties
        }
      >
        {cells.map((cell, index) => (
          <span
            key={index}
            className="home-pixel-cell"
            style={{ opacity: cell.lowOpacity }}
            ref={(el) => {
              pixelRefs.current[index] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
}
