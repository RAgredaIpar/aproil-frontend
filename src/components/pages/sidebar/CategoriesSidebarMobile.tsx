"use client";

import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {usePathname} from "next/navigation";
import CategoriesSidebarClient from "./CategoriesSidebarClient";

type Item = { slug: string; name: string; iconUrl?: string; iconAlt?: string; href: string };

function Portal({children}: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return createPortal(children, document.body);
}

export default function CategoriesSidebarMobile({
                                                    title,
                                                    techs,
                                                    inds,
                                                    apps,
                                                }: {
    title: string;
    techs: Item[];
    inds: Item[];
    apps: Item[];
}) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        const prev = document.body.style.overflow;
        if (open) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <>
            <button
                type="button"
                aria-label="Abrir categorías"
                onClick={() => setOpen(true)}
                className={`md:hidden fixed left-0 top-1/2 -translate-y-1/2 z-[50]
          w-8 h-16 rounded-r-full bg-white text-[#E30613] border border-gray-200 shadow
          flex items-center justify-center transition-transform duration-300
          hover:translate-x-0.5
          ${open ? "opacity-0 -translate-x-full pointer-events-none" : ""}`}
            >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </button>

            <Portal>
                <div
                    onClick={() => setOpen(false)}
                    className={`fixed inset-0 z-[50] bg-black/40 transition-opacity duration-300 md:hidden
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                />

                <aside
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="mobile-sidebar-title"
                    className={`fixed inset-y-0 left-0 z-[50] w-80 max-w-[85%] bg-white shadow-xl md:hidden 
                    transform transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)]
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex items-center justify-between p-4 bg-gray-50">
                        <h2 id="mobile-sidebar-title"
                            className="aproil-font text-3xl font-semibold bg-gray-50 text-gray-700">{title}</h2>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Cerrar"
                            className="rounded-md p-2 text-gray-600 hover:text-gray-900"
                        >
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className="h-full overflow-y-auto">
                        <div className="p-3">
                            <CategoriesSidebarClient techs={techs} inds={inds} apps={apps}/>
                        </div>
                        <div className="pb-[max(1rem,env(safe-area-inset-bottom))]"/>
                    </div>
                </aside>
            </Portal>
        </>
    );
}
