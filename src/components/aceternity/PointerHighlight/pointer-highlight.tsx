"use client";
import { cn } from "@lib/utils";
import { motion } from "motion/react";
import React, { useRef, useEffect, useState } from "react";

export function PointerHighlight({
                                     children,
                                     rectangleClassName,
                                     pointerClassName,
                                     containerClassName,
                                 }: {
    children: React.ReactNode;
    rectangleClassName?: string;
    pointerClassName?: string;
    containerClassName?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkSize = () => setIsMobile(window.innerWidth < 640);
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    const EXTRA_X = isMobile ? 4 : 10;
    const EXTRA_Y = isMobile ? 4 : 10;
    useEffect(() => {
        const el = containerRef.current;

        if (el) {
            const { width, height } = el.getBoundingClientRect();
            setDimensions({ width, height });
        }

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                setDimensions({ width, height });
            }
        });

        if (el) {
            resizeObserver.observe(el);
        }

        return () => {
            if (el) {
                resizeObserver.unobserve(el);
            }
        };
    }, []);

    return (
        <div
            className={cn("relative inline-block", containerClassName)}
            ref={containerRef}
        >
            {children}
            {dimensions.width > 0 && dimensions.height > 0 && (
                <motion.div
                    className="pointer-events-none absolute inset-0 z-0"
                    initial={{ opacity: 0, scale: 0.95, originX: 0, originY: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.div
                        className={cn(
                            "absolute md:border-[5px] border-neutral-800 dark:border-neutral-200",
                            rectangleClassName,
                        )}
                        initial={{
                            left: -EXTRA_X / 2,
                            top: -EXTRA_Y / 2,
                            width: 0,
                            height: 0,
                        }}
                        whileInView={{
                            width: dimensions.width + EXTRA_X,
                            height: dimensions.height + EXTRA_Y - 5,
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="pointer-events-none absolute"
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            x: dimensions.width + EXTRA_X / 2 + 2,
                            y: dimensions.height + 2,
                        }}
                        style={{
                            rotate: -90,
                        }}
                        transition={{
                            opacity: { duration: 0.1, ease: "easeInOut" },
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    >
                        <Pointer
                            className={cn("h-5 w-5 text-gray-900", pointerClassName)}
                        />
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}

const Pointer = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
    );
};
