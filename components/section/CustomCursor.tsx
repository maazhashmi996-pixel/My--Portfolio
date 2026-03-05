"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);

    // Raw mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring for smooth lag effect
    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        const handleHover = () => setIsHovered(true);
        const handleUnhover = () => setIsHovered(false);

        window.addEventListener("mousemove", moveMouse);

        const targets = document.querySelectorAll(
            "a, button, .hover-target"
        );

        targets.forEach((el) => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", handleUnhover);
        });

        return () => {
            window.removeEventListener("mousemove", moveMouse);

            targets.forEach((el) => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", handleUnhover);
            });
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
            style={{
                x: cursorX,
                y: cursorY,
                border: "2px solid #4f46e5",
            }}
            animate={{
                scale: isHovered ? 2.5 : 1,
                backgroundColor: isHovered
                    ? "rgba(79, 70, 229, 0.2)"
                    : "rgba(79, 70, 229, 0)", // ❗ transparent ki jagah
                borderColor: isHovered ? "#818cf8" : "#4f46e5",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        />
    );
}
