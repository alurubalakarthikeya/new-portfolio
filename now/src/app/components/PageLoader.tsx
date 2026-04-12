"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const CHAR_SEQUENCE = ["C", "A", "R", "T", "Y"] as const;

const CHAR_PIXELS: Record<(typeof CHAR_SEQUENCE)[number], number[]> = {
  // Pixel index map (4x4):
  //  0  1  2  3
  //  4  5  6  7
  //  8  9 10 11
  // 12 13 14 15
  C: [0, 1, 2, 3, 4, 8, 12, 13, 14, 15],
  A: [0, 1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 15],
  R: [0, 1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 14],
  T: [0, 1, 2, 3, 6, 10, 14],
  Y: [0, 3, 5, 6, 10, 14],
};

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const firstRunRef = useRef(true);
  const activeChar = CHAR_SEQUENCE[charIndex];

  const activePixels = useMemo(() => {
    return new Set<number>(CHAR_PIXELS[activeChar]);
  }, [activeChar]);

  useEffect(() => {
    if (!visible) {
      return;
    }

    setCharIndex(0);
    const intervalId = window.setInterval(() => {
      setCharIndex((previous) => (previous + 1) % CHAR_SEQUENCE.length);
    }, 420);

    return () => window.clearInterval(intervalId);
  }, [visible]);

  useEffect(() => {
    const onClickCapture = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const link = target?.closest("a") as HTMLAnchorElement | null;

      if (!link || !link.href) {
        return;
      }

      if (link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) {
        return;
      }

      if (url.pathname === window.location.pathname && url.search === window.location.search) {
        return;
      }

      setVisible(true);
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, []);

  useEffect(() => {
    let timeoutId: number | undefined;

    const hideSoon = (delay: number) => {
      timeoutId = window.setTimeout(() => {
        setVisible(false);
      }, delay);
    };

    if (firstRunRef.current) {
      firstRunRef.current = false;

      if (document.readyState === "complete") {
        hideSoon(560);
      } else {
        const onLoad = () => hideSoon(560);
        window.addEventListener("load", onLoad, { once: true });
        return () => {
          window.removeEventListener("load", onLoad);
          if (timeoutId) {
            window.clearTimeout(timeoutId);
          }
        };
      }
    } else {
      hideSoon(320);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-[#d1fae5]/45 backdrop-blur-xl"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.24),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(16,185,129,0.22),transparent_44%)]" />

          <motion.div
            initial={{ y: 10, opacity: 0.25, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="relative z-10 rounded-[0.72rem] border border-[#34d399]/75 bg-transparent p-1.5 shadow-[0_10px_18px_rgba(6,95,70,0.16)]"
          >
            <div className="grid grid-cols-4 gap-[2px]">
              {Array.from({ length: 16 }, (_, pixelIndex) => {
                const isActive = activePixels.has(pixelIndex);
                return (
                <motion.span
                  key={pixelIndex}
                  className="block h-[6px] w-[6px] rounded-[1px]"
                  animate={{
                    backgroundColor: isActive ? "#10b981" : "rgba(16,185,129,0.14)",
                    opacity: isActive ? 1 : 0.22,
                    boxShadow: isActive ? "0 0 0 1px rgba(6,95,70,0.18), 0 0 6px rgba(16,185,129,0.42)" : "0 0 0 1px rgba(6,95,70,0.08)",
                    scale: isActive ? 1 : 0.92,
                  }}
                  transition={{ duration: 0.14, ease: "easeOut", delay: pixelIndex * 0.006 }}
                />
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
