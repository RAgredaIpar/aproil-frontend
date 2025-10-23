"use client"

import { ElementType, memo } from "react"
import { AnimatePresence, motion, MotionProps, Variants } from "motion/react"

import { cn } from "@lib/utils"

type AnimationType = "text" | "word" | "character" | "line"
type AnimationVariant =
    | "fadeIn"
    | "slideUp"

interface TextAnimateProps extends MotionProps {
    /**
     * The text content to animate
     */
    children: React.ReactNode
    /**
     * The class name to be applied to the component
     */
    className?: string
    /**
     * The class name to be applied to each segment
     */
    segmentClassName?: string
    /**
     * The delay before the animation starts
     */
    delay?: number
    /**
     * The duration of the animation
     */
    duration?: number
    /**
     * Custom motion variants for the animation
     */
    variants?: Variants
    /**
     * The element type to render
     */
    as?: ElementType
    /**
     * How to split the text ("text", "word", "character")
     */
    by?: AnimationType
    /**
     * Whether to start animation when component enters viewport
     */
    startOnView?: boolean
    /**
     * Whether to animate only once
     */
    once?: boolean
    /**
     * The animation preset to use
     */
    animation?: AnimationVariant
    /**
     * Whether to enable accessibility features (default: true)
     */
    accessible?: boolean
}

const staggerTimings: Record<AnimationType, number> = {
    text: 0.06,
    word: 0.05,
    character: 0.03,
    line: 0.06,
}

const defaultContainerVariants = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
}

const defaultItemVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

const defaultItemAnimationVariants: Record<
    AnimationVariant,
    { container: Variants; item: Variants }
> = {
    fadeIn: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, y: 20 },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.3,
                },
            },
            exit: {
                opacity: 0,
                y: 20,
                transition: { duration: 0.3 },
            },
        },
    },
    slideUp: {
        container: defaultContainerVariants,
        item: {
            hidden: { y: 20, opacity: 0 },
            show: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.3,
                },
            },
            exit: {
                y: -20,
                opacity: 0,
                transition: {
                    duration: 0.3,
                },
            },
        },
    }
}

const TextAnimateBase = ({
                             children,
                             delay = 0,
                             duration = 0.3,
                             variants,
                             className,
                             segmentClassName,
                             as: Component = "p",
                             startOnView = true,
                             once = false,
                             by = "word",
                             animation = "fadeIn",
                             accessible = true,
                             ...props
                         }: TextAnimateProps) => {
    const MotionComponent = motion.create(Component)

    let segments: string[] = []
    if (typeof children === "string") {
        switch (by) {
            case "word":
                segments = children.split(/(\s+)/)
                break
            case "character":
                segments = children.split("")
                break
            case "line":
                segments = children.split("\n")
                break
            case "text":
            default:
                segments = [children]
                break
        }
    } else {
        segments = [""]
    }

    const finalVariants = variants
        ? {
            container: {
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        opacity: { duration: 0.01, delay },
                        delayChildren: delay,
                        staggerChildren: duration / segments.length,
                    },
                },
                exit: {
                    opacity: 0,
                    transition: {
                        staggerChildren: duration / segments.length,
                        staggerDirection: -1,
                    },
                },
            },
            item: variants,
        }
        : animation
            ? {
                container: {
                    ...defaultItemAnimationVariants[animation].container,
                    show: {
                        ...defaultItemAnimationVariants[animation].container.show,
                        transition: {
                            delayChildren: delay,
                            staggerChildren: duration / segments.length,
                        },
                    },
                    exit: {
                        ...defaultItemAnimationVariants[animation].container.exit,
                        transition: {
                            staggerChildren: duration / segments.length,
                            staggerDirection: -1,
                        },
                    },
                },
                item: defaultItemAnimationVariants[animation].item,
            }
            : { container: defaultContainerVariants, item: defaultItemVariants }

    return (
        <AnimatePresence mode="popLayout">
            <MotionComponent
                variants={finalVariants.container as Variants}
                initial="hidden"
                whileInView={startOnView ? "show" : undefined}
                animate={startOnView ? undefined : "show"}
                exit="exit"
                className={cn("whitespace-pre-wrap", className)}
                viewport={{ once }}
                aria-label={accessible ? children : undefined}
                {...props}
            >
                {accessible && <span className="sr-only">{children}</span>}
                {typeof children === "string" ? (
                    segments.map((segment, i) => (
                        <motion.span
                            key={`${by}-${segment}-${i}`}
                            variants={finalVariants.item}
                            custom={i * staggerTimings[by]}
                            className={cn(
                                by === "line" ? "block" : "inline-block whitespace-pre",
                                segmentClassName
                            )}
                            aria-hidden={accessible ? true : undefined}
                        >
                            {segment}
                        </motion.span>
                    ))
                ) : (
                    // 👇 si children no es string, muéstralo directamente
                    <motion.span
                        variants={finalVariants.item}
                        className={cn("inline-block lg:whitespace-pre", segmentClassName)}
                    >
                        {children}
                    </motion.span>
                )}
            </MotionComponent>
        </AnimatePresence>
    )
}

// Export the memoized version
export const TextAnimate = memo(TextAnimateBase)
