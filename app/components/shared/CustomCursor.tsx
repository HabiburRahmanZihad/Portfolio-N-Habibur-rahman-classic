"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            if (isHidden) setIsHidden(false);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("button") !== null ||
                target.closest("a") !== null
            );
        };

        const handleMouseLeave = () => setIsHidden(true);
        const handleMouseEnter = () => setIsHidden(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isHidden]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
            <motion.div
                aria-hidden="true"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    left: -8,
                    top: -8,
                }}
                animate={{
                    scale: isPointer ? 2.5 : 1,
                    opacity: isHidden ? 0 : 1,
                }}
                className="w-4 h-4 rounded-full border border-blue-500 bg-blue-500/20 mix-blend-difference"
            />
            <motion.div
                aria-hidden="true"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    left: -2,
                    top: -2,
                }}
                animate={{
                    scale: isPointer ? 0 : 1,
                    opacity: isHidden ? 0 : 1,
                }}
                className="w-1 h-1 bg-blue-500 rounded-full"
            />
        </div>
    );
};

export default CustomCursor;
