"use client";

import { useOutsideClick } from "@components/aceternity/AppleCardsCarousel/use-outside-click.ts";
import { cn } from "@lib/utils";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
    type JSX,
} from "react";

import type { ImgHTMLAttributes } from "react";

/* ----------------- Types ----------------- */
type CarouselProps = {
    items: JSX.Element[];
    initialScroll?: number;
};

type Card = {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
};

/* ----------------- Context ----------------- */
export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => {},
    currentIndex: 0,
});

/* ----------------- Carousel ----------------- */
export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384; // md:w-96
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);

            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => window && window.innerWidth < 768;

    return (
        <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
            <div className="relative w-full">
                {/* Carrusel */}
                <div
                    ref={carouselRef}
                    onScroll={checkScrollability}
                    className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:pt-15 md:pb-5"
                >
                    <div className="absolute right-0 z-[1000] h-auto w-[5%] bg-gradient-to-l"></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4",
                            "mx-auto max-w-7xl"
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={"card" + index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut" },
                                }}
                                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Botones */}
                <div className="mr-10 flex justify-end gap-2">
                    <button
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
                    >
                        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                    </button>
                    <button
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
                    >
                        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

/* ----------------- Card ----------------- */
export const Card = ({
                         card,
                         index,
                         layout = false,
                     }: {
    card: Card;
    index: number;
    layout?: boolean;
}) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { onCardClose } = useContext(CarouselContext);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") handleClose();
        }
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    useOutsideClick(containerRef, () => handleClose());

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        onCardClose(index);
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 z-50 h-screen overflow-auto">
                        {/* Fondo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
                        />
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            ref={containerRef}
                            layoutId={layout ? `card-${card.title}` : undefined}
                            className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
                        >
                            <button
                                onClick={handleClose}
                                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                            >
                                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                            </button>

                            <motion.p
                                layoutId={layout ? `category-${card.title}` : undefined}
                                className="text-base font-medium text-black dark:text-white"
                            >
                                {card.category}
                            </motion.p>

                            <motion.p
                                layoutId={layout ? `title-${card.title}` : undefined}
                                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
                            >
                                {card.title}
                            </motion.p>

                            <div className="py-10">{card.content}</div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Tarjeta */}
            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                onClick={handleOpen}
                className="
                relative z-10 flex flex-col items-start justify-start
                overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900
                h-64 w-44 sm:h-72 sm:w-56 md:h-[30rem] md:w-80 lg:h-[36rem] lg:w-96"
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />

                <div className="relative z-40 p-8">
                    <motion.p
                        layoutId={layout ? `category-${card.category}` : undefined}
                        className="text-left font-sans text-sm font-medium text-white md:text-base"
                    >
                        {card.category}
                    </motion.p>

                    <motion.p
                        layoutId={layout ? `title-${card.title}` : undefined}
                        className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
                    >
                        {card.title}
                    </motion.p>
                </div>

                <BlurImage
                    src={card.src}
                    alt={card.title}
                    fill
                    className="absolute inset-0 z-10 object-cover"
                />
            </motion.button>
        </>
    );
};

/* ----------------- BlurImage ----------------- */
type BlurImageProps = { fill?: boolean } & ImgHTMLAttributes<HTMLImageElement>;

export const BlurImage = ({
                              height,
                              width,
                              src,
                              className,
                              alt,
                              fill,
                              ...rest
                          }: BlurImageProps) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <img
            className={cn(
                "transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                fill ? "absolute inset-0 h-full w-full object-cover" : "",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src as string}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};