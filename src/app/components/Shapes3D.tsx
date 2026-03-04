'use client';

import React from 'react';

type Pos = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

/* ─────────────────────────────────────────────────────────────
   WireCube — 6-face CSS 3D wireframe box
───────────────────────────────────────────────────────────── */
type WireCubeProps = Pos & {
  size: number;
  opacity?: number;
  duration?: number;
  animName?: string;
  color?: string;
};

export function WireCube({
  size,
  opacity = 0.25,
  duration = 24,
  animName = 'rotateCube3D',
  color = '59,130,246',
  ...pos
}: WireCubeProps) {
  const h = size / 2;
  const face: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    border: `1px solid rgba(${color},0.42)`,
    background: `rgba(${color},0.018)`,
    backfaceVisibility: 'visible',
  };
  const transforms = [
    `translateZ(${h}px)`,
    `rotateY(180deg) translateZ(${h}px)`,
    `rotateY(-90deg) translateZ(${h}px)`,
    `rotateY(90deg) translateZ(${h}px)`,
    `rotateX(90deg) translateZ(${h}px)`,
    `rotateX(-90deg) translateZ(${h}px)`,
  ];
  return (
    <div style={{
      position: 'absolute',
      width: size,
      height: size,
      ...pos,
      transformStyle: 'preserve-3d',
      animation: `${animName} ${duration}s linear infinite`,
      opacity,
      pointerEvents: 'none',
    }}>
      {transforms.map((t, i) => (
        <div key={i} style={{ ...face, transform: t }} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   WireRings — three orthogonal rings (gyroscope effect)
   Uses rotateRingX / rotateRingY / rotateSlow from globals.css
───────────────────────────────────────────────────────────── */
type WireRingsProps = Pos & {
  size: number;
  opacity?: number;
  speed?: number;
  color?: string;
};

export function WireRings({
  size,
  opacity = 0.26,
  speed = 12,
  color = '59,130,246',
  ...pos
}: WireRingsProps) {
  const base: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
  };
  return (
    <div style={{
      position: 'absolute',
      width: size,
      height: size,
      ...pos,
      opacity,
      pointerEvents: 'none',
    }}>
      {/* Flat ring — spins on Z */}
      <div style={{
        ...base,
        border: `1px solid rgba(${color},0.55)`,
        animation: `rotateSlow ${speed}s linear infinite`,
      }} />
      {/* X-tilted ring */}
      <div style={{
        ...base,
        border: `1px solid rgba(${color},0.38)`,
        animation: `rotateRingX ${Math.round(speed * 1.35)}s linear infinite reverse`,
      }} />
      {/* Y-tilted ring */}
      <div style={{
        ...base,
        border: `1px solid rgba(${color},0.28)`,
        animation: `rotateRingY ${Math.round(speed * 0.75)}s linear infinite`,
      }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   WirePlane — flat square spinning in 3D space
───────────────────────────────────────────────────────────── */
type WirePlaneProps = Pos & {
  size: number;
  opacity?: number;
  duration?: number;
  color?: string;
};

export function WirePlane({
  size,
  opacity = 0.18,
  duration = 16,
  color = '59,130,246',
  ...pos
}: WirePlaneProps) {
  const square: React.CSSProperties = {
    position: 'absolute',
    border: `1px solid rgba(${color},0.4)`,
    background: `rgba(${color},0.015)`,
  };
  return (
    <div style={{
      position: 'absolute',
      width: size,
      height: size,
      ...pos,
      transformStyle: 'preserve-3d',
      animation: `rotateCubeAlt ${duration}s linear infinite`,
      opacity,
      pointerEvents: 'none',
    }}>
      {/* Outer square */}
      <div style={{ ...square, inset: 0 }} />
      {/* Mid square — rotated 45° for diamond cross */}
      <div style={{ ...square, inset: '18%', transform: 'rotate(45deg)' }} />
      {/* Inner square */}
      <div style={{ ...square, inset: '34%' }} />
      {/* Corner accents */}
      {[
        { top: 0, left: 0 }, { top: 0, right: 0 },
        { bottom: 0, left: 0 }, { bottom: 0, right: 0 },
      ].map((corner, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: size * 0.12,
          height: size * 0.12,
          border: `1px solid rgba(${color},0.55)`,
          background: `rgba(${color},0.08)`,
          ...corner,
        }} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   WirePyramid — wireframe pyramid / tetrahedron feel
   Implemented as a tall thin cube rotated 45° + stretched
───────────────────────────────────────────────────────────── */
type WirePyramidProps = Pos & {
  size: number;
  opacity?: number;
  duration?: number;
  color?: string;
};

export function WirePyramid({
  size,
  opacity = 0.22,
  duration = 20,
  color = '59,130,246',
  ...pos
}: WirePyramidProps) {
  const h = size / 2;
  const face: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    border: `1px solid rgba(${color},0.4)`,
    background: `rgba(${color},0.015)`,
    backfaceVisibility: 'visible',
  };
  const transforms = [
    `translateZ(${h}px)`,
    `rotateY(180deg) translateZ(${h}px)`,
    `rotateY(-90deg) translateZ(${h}px)`,
    `rotateY(90deg) translateZ(${h}px)`,
    `rotateX(90deg) translateZ(${h}px)`,
    `rotateX(-90deg) translateZ(${h}px)`,
  ];
  return (
    <div style={{
      position: 'absolute',
      width: size,
      height: size,
      ...pos,
      transformStyle: 'preserve-3d',
      /* scaleY stretches it tall so it reads like a diamond/pyramid */
      animation: `rotateCubeReverse ${duration}s linear infinite`,
      transform: 'scaleY(1.6) rotateZ(45deg)',
      opacity,
      pointerEvents: 'none',
    }}>
      {transforms.map((t, i) => (
        <div key={i} style={{ ...face, transform: t }} />
      ))}
    </div>
  );
}
