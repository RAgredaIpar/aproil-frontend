"use client";
import { cn } from "@lib/utils";
import { motion } from "motion/react";
import React from "react";
import {useTranslations} from "next-intl";

export function Lamp() {
    const t = useTranslations('HomePage')
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="pb-10 bg-gradient-to-br from-slate-400 to-black bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >

                <p className="uppercase text-[26px] sm:text-4xl">{t('lamp.header1')}</p>
                <p className="uppercase aproil-font text-[55px] sm:text-8xl px-4">{t('lamp.header2')}</p>
            </motion.h1>
        </LampContainer>
    );
}

export const LampContainer = ({
                                  children,
                                  className,
                              }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative flex pt-40 flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
                className
            )}
        >
            <div className="relative flex w-full items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#E30613]"
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#F9F9F9] "></div>
            </div>

            <div className="relative -translate-y-[2rem] z-50 flex flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
};
