"use client";

import React, { useEffect, useRef, useState } from "react";
import {useTranslations} from "next-intl";

function Collapsible({
                         open,
                         children,
                         duration = 450,
                     }: {
    open: boolean;
    children: React.ReactNode;
    duration?: number;
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const endHandlerRef = useRef<((e: TransitionEvent) => void) | null>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        return () => {
            if (el && endHandlerRef.current) {
                el.removeEventListener("transitionend", endHandlerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const inner = innerRef.current;
        if (!wrapper || !inner) return;

        const currentHeight = wrapper.getBoundingClientRect().height;
        const contentHeight = inner.scrollHeight;

        wrapper.style.overflow = "hidden";
        wrapper.style.transitionProperty = "height";
        wrapper.style.transitionDuration = `${duration}ms`;
        wrapper.style.transitionTimingFunction = "cubic-bezier(.22,.61,.36,1)";
        wrapper.style.willChange = "height";

        const onEnd = (e: TransitionEvent) => {
            if (e.propertyName !== "height") return;
            if (open) {
                wrapper.style.height = "auto";
            }
        };

        if (endHandlerRef.current) {
            wrapper.removeEventListener("transitionend", endHandlerRef.current);
        }
        endHandlerRef.current = onEnd;
        wrapper.addEventListener("transitionend", onEnd);

        if (open) {
            wrapper.style.height = `${currentHeight}px`;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            wrapper.offsetHeight;
            requestAnimationFrame(() => {
                wrapper.style.height = `${contentHeight}px`;
            });
        } else {
            const from = currentHeight || contentHeight;
            wrapper.style.height = `${from}px`;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            wrapper.offsetHeight;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    wrapper.style.height = "0px";
                });
            });
        }
    }, [open, duration]);

    return (
        <div ref={wrapperRef} style={{ height: 0 }}>
            <div ref={innerRef}>{children}</div>
        </div>
    );
}

export default function FaqLines() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const t = useTranslations('FAQ')

    const item = (
        q: string,
        a: React.ReactNode,
        idx: number
    ) => (
        <div className="rounded-3xl bg-white">
            <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-${idx}`}
                className="w-full flex items-center justify-between px-5 py-2 text-left"
            >
                <span className="text-neutral-900 font-bold">{q}</span>
                <span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-500 text-white">
          <svg
              viewBox="0 0 20 20"
              className={`h-4 w-4 transition-transform duration-300 ${openIndex === idx ? "rotate-45" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
          >
            <path d="M10 4v12M4 10h12" />
          </svg>
        </span>
            </button>

            <Collapsible open={openIndex === idx} duration={450}>
                <div id={`faq-${idx}`} className="px-5 pb-3 pt-0 text-neutral-700 text-sm leading-relaxed">
                    {a}
                </div>
            </Collapsible>
        </div>
    );

    return (
        <section className="bg-neutral-900 py-15 sm:py-25">
            <div className="mx-auto max-w-3xl px-4">
                <h2 className="text-center text-3xl font-bold text-white">FAQ&apos;S</h2>

                <div className="mt-8 space-y-3">

                    {item(
                        t('item0-q'),
                        <>
                            {t('item0-a')}
                        </>,
                        0
                    )}

                    {item(
                        t('item1-q'),
                        <>
                            {t('item1-a')}
                        </>,
                        2
                    )}

                    {item(
                        t('item2-q'),
                        <>
                            {t('item2-a')}
                        </>,
                        3
                    )}
                </div>
            </div>
        </section>
    );
}
