"use client";

import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import { pdfIcon } from "@assets/product";
type ColorSpec = { bg: string; text: string; bgHex: string };
type ProductItem = { slug: string; name: string; shortDescription?: string; pdfUrl: string };
type TechnologyGroup = { technologySlug: string; technologyName: string; products: ProductItem[] };

function Collapsible({ open, children, duration = 380 }: { open: boolean; children: React.ReactNode; duration?: number }) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const endRef = useRef<((e: TransitionEvent) => void) | null>(null);

    useEffect(() => {
        const el = wrapRef.current;
        return () => {
            if (el && endRef.current) el.removeEventListener("transitionend", endRef.current);
        };
    }, []);

    useEffect(() => {
        const wrap = wrapRef.current, inner = innerRef.current;
        if (!wrap || !inner) return;

        const now = wrap.getBoundingClientRect().height;
        const target = inner.scrollHeight;

        wrap.style.overflow = "hidden";
        wrap.style.transitionProperty = "height";
        wrap.style.transitionDuration = `${duration}ms`;
        wrap.style.transitionTimingFunction = "cubic-bezier(.22,.61,.36,1)";
        wrap.style.willChange = "height";

        const onEnd = (e: TransitionEvent) => {
            if (e.propertyName !== "height") return;
            if (open) wrap.style.height = "auto";
        };
        if (endRef.current) wrap.removeEventListener("transitionend", endRef.current);
        endRef.current = onEnd;
        wrap.addEventListener("transitionend", onEnd);

        if (open) {
            wrap.style.height = `${now}px`;
            // forzar reflow antes de cambiar:
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            wrap.offsetHeight;
            requestAnimationFrame(() => { wrap.style.height = `${target}px`; });
        } else {
            const from = now || target;
            wrap.style.height = `${from}px`;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            wrap.offsetHeight;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => { wrap.style.height = "0px"; });
            });
        }
    }, [open, duration]);

    return (
        <div ref={wrapRef} style={{ height: 0 }}>
            <div ref={innerRef}>{children}</div>
        </div>
    );
}

export default function TechAccordion({
                                          techs,
                                          colorBySlug,
                                          COLORS,
                                      }: {
    techs: TechnologyGroup[];
    colorBySlug: Record<string, number>;   // 👈 aquí
    COLORS: ColorSpec[];
}) {
    const [open, setOpen] = useState<Set<string>>(new Set());

    const toggle = (key: string) => {
        setOpen(prev => {
            const next = new Set(prev);
            next.has(key) ? next.delete(key) : next.add(key);
            return next;
        });
    };

    return (
        <ul className="mt-4 space-y-3">
            {techs.map((grp, idx) => {
                // 👇 tomar índice pre-calculado, con fallback simple
                const i = colorBySlug[grp.technologySlug] ?? (idx % COLORS.length);
                const { bg, text, bgHex } = COLORS[i];
                const isOpen = open.has(grp.technologySlug);

                return (
                    <li key={grp.technologySlug}>
                        <button
                            type="button"
                            onClick={() => toggle(grp.technologySlug)}
                            className={[
                                "w-full relative flex items-center justify-between",
                                "rounded-xl px-5 py-3 transition-colors",
                                bg, text,
                            ].join(" ")}
                        >
              <span className="aproil-font uppercase text-base sm:text-2xl">
                {grp.technologyName}
              </span>

                            <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <svg
                    className={`h-8 w-8 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" style={{ color: bgHex }} aria-hidden="true"
                >
                  <path d="M6 11l6 6 6-6" />
                </svg>
              </span>
                        </button>

                        <Collapsible open={isOpen} duration={380}>
                            <div className="bg-neutral-100 px-5 py-4 rounded-xl">
                                {grp.products.length === 0 ? (
                                    <p className="text-sm text-neutral-600">Sin productos.</p>
                                ) : (
                                    <ul className="space-y-4">
                                        {grp.products.map((p) => (
                                            <li key={p.slug}>
                                                <div className="flex items-end gap-3">
                                                    <a
                                                        href={p.pdfUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group/item inline-flex w-fit items-end gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613] rounded-sm"
                                                        aria-label={`Abrir PDF de ${p.name}`}
                                                    >
                                                        <Image src={pdfIcon} alt="PDF" className="h-12 w-12 shrink-0 block" aria-hidden="true" />
                                                        <h3 className="uppercase font-semibold text-black leading-tight transition-colors group-hover/item:text-[#E30613]">
                                                            {p.name}
                                                        </h3>
                                                    </a>
                                                </div>
                                                {p.shortDescription && (
                                                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">{p.shortDescription}</p>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </Collapsible>
                    </li>
                );
            })}
        </ul>
    );
}
