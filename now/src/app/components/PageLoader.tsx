"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const firstRunRef = useRef(true);

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
            className="relative z-10 h-7 w-24 overflow-hidden rounded-full border border-white/70 bg-white/35 backdrop-blur-2xl"
          >
            <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between">
              {[0, 1, 2, 3, 4, 5, 6].map((bar) => (
                <motion.span
                  key={bar}
                  className="block w-[3px] rounded-full bg-[#059669]"
                  animate={{ height: [4, 7, 10, 14, 10, 7, 4], opacity: [0.35, 0.55, 0.85, 1, 0.85, 0.55, 0.35] }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.05, ease: "easeInOut", delay: bar * 0.04 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
