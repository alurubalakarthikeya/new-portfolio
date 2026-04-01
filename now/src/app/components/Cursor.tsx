"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springX = useSpring(0, { stiffness: 500, damping: 28 });
    const springY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        // Determine initially hidden to avoid jumping from top-left
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            springX.set(e.clientX - 16);
            springY.set(e.clientY - 16);

            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.closest('.group') !== null
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, [springX, springY]);

    // Don't render until we have mounted to avoid hydration errors
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#10b981] pointer-events-none z-[9999] hidden md:block"
                style={{ x: springX, y: springY }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 0.7
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#059669] pointer-events-none z-[9999] hidden md:block mix-blend-multiply"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 6 : 1,
                    backgroundColor: isHovering ? "rgba(16, 185, 129, 0.2)" : "rgba(5, 150, 105, 1)",
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            />
        </>
    );
}
