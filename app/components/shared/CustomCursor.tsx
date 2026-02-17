"use client";

import React, { useEffect, useRef, useState, memo } from "react";

const CustomCursor = memo(() => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [hoverText, setHoverText] = useState("");

    const hoverStateRef = useRef(false);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const initializedRef = useRef(false);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0,
            mouseY = 0;
        let dotX = 0,
            dotY = 0;
        let ringX = 0,
            ringY = 0;
        let rafId: number;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!initializedRef.current) {
                dotX = ringX = mouseX;
                dotY = ringY = mouseY;
                initializedRef.current = true;
            }
        };

        // More efficient hover detection using event delegation
        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target) return;

            const interactiveElement = target.closest(
                "a, button, [data-cursor], input, textarea, [role='button']"
            ) as HTMLElement | null;

            if (interactiveElement) {
                if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current);
                    hoverTimeoutRef.current = null;
                }

                if (!hoverStateRef.current) {
                    hoverStateRef.current = true;
                    setIsHovering(true);
                    setHoverText(
                        (interactiveElement.dataset?.cursor as string) || ""
                    );
                }
            } else {
                if (hoverStateRef.current && !hoverTimeoutRef.current) {
                    hoverTimeoutRef.current = setTimeout(() => {
                        hoverStateRef.current = false;
                        setIsHovering(false);
                        setHoverText("");
                        hoverTimeoutRef.current = null;
                    }, 50);
                }
            }
        };

        const animate = () => {
            if (initializedRef.current) {
                // Precise movement with lerp
                dotX += (mouseX - dotX) * 0.35;
                dotY += (mouseY - dotY) * 0.35;
                ringX += (mouseX - ringX) * 0.15;
                ringY += (mouseY - ringY) * 0.15;

                // Use independent translate property to avoid transform conflicts
                // This ensures translate and scale never overwrite each other
                dot.style.setProperty("--x", `${dotX}px`);
                dot.style.setProperty("--y", `${dotY}px`);
                ring.style.setProperty("--x", `${ringX}px`);
                ring.style.setProperty("--y", `${ringY}px`);
            }

            rafId = requestAnimationFrame(animate);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsHidden(true);
        const handleMouseEnter = () => setIsHidden(false);

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mouseover", onMouseOver, { passive: true });
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);
        document.documentElement.addEventListener("mouseenter", handleMouseEnter);

        rafId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafId);
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.documentElement.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
            document.documentElement.removeEventListener(
                "mouseenter",
                handleMouseEnter
            );
        };
    }, []);

    return (
        <>
            <style jsx>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

            {/* Outer Ring */}
            <div
                ref={ringRef}
                className={`
          fixed top-0 left-0 pointer-events-none z-9999 hidden lg:flex items-center justify-center
          transition-[width,height,opacity] duration-300 ease-out
          ${isHidden ? "opacity-0" : "opacity-100"}
        `}
                style={
                    {
                        width: isHovering ? "65px" : "40px",
                        height: isHovering ? "65px" : "40px",
                        translate:
                            "calc(var(--x, 0px) - 50%) calc(var(--y, 0px) - 50%)",
                        willChange: "translate, width, height, opacity",
                    } as React.CSSProperties
                }
            >
                <div
                    className={`
            w-full h-full rounded-full border-[1.5px]
            transition-all duration-300 ease-out
            ${isHovering
                            ? "border-primary bg-primary/10 scale-100"
                            : "border-primary/60 scale-100"
                        }
            ${isClicking ? "scale-75 border-primary bg-primary/40" : ""}
          `}
                    style={{
                        transformOrigin: "center center",
                    }}
                />
                {hoverText && isHovering && (
                    <span className="absolute text-[10px] font-bold uppercase tracking-wider text-primary animate-in fade-in zoom-in duration-300">
                        {hoverText}
                    </span>
                )}
            </div>

            {/* Inner Dot */}
            <div
                ref={dotRef}
                className={`
          fixed top-0 left-0 pointer-events-none z-10000 hidden lg:block
          transition-[opacity,scale] duration-200 ease-out bg-primary
          ${isHidden ? "opacity-0" : "opacity-100"}
          ${isHovering ? "opacity-0 scale-0" : "opacity-100 scale-100"}
          ${isClicking ? "scale-[2]" : "scale-100"}
        `}
                style={
                    {
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        boxShadow: `0 0 15px var(--color-primary), 0 0 30px var(--color-primary)`,
                        translate:
                            "calc(var(--x, 0px) - 50%) calc(var(--y, 0px) - 50%)",
                        willChange: "translate, opacity, scale",
                    } as React.CSSProperties
                }
            />
        </>
    );
});

CustomCursor.displayName = "CustomCursor";

export default CustomCursor;
