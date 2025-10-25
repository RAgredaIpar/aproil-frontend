"use client";

import {iconContacto, iconIndustrias, iconInicio, iconLogo, iconProductos,} from "@assets/header";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";
import LocaleSwitcher from "@components/LocaleSwitcher/LocaleSwitcher";
import Image, {StaticImageData} from "next/image";
import {createPortal} from "react-dom";
import {ReactNode, useEffect, useState} from "react";

function Portal({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {setMounted(true);}, []);
    if (!mounted) return null;
    return createPortal(children, document.body)
}

function NavRow({
                    href,
                    icon,
                    label,
                    onClick
                }: {
    href: string;
    icon: StaticImageData | string;
    label: string;
    onClick?: () => void;
}) {
    const pathname = usePathname();
    const locale = useLocale();
    const normalized = pathname === `/${locale}` ? "/" : pathname.replace(`/${locale}`, "");
    const active = normalized === href || normalized.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            onClick={onClick}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-3 px-3 py-2 rounded-md
            ${active ? "bg-gray-100 font-semibold text-gray-900" : "text-gray-700 hover:bg-gray-50"}`}
        >
            <Image src={icon} alt="" className="w-6 h-6"/>
            <span className="text-base">{label}</span>
        </Link>
    );
}

function NavItem({
                     href,
                     icon,
                     label,
                 }: {
    href: string;
    icon: StaticImageData | string;
    label: string;
}) {
    const pathname = usePathname();
    const locale = useLocale();
    const normalized = pathname === `/${locale}` ? "/" : pathname.replace(`/${locale}`, "");
    const isActive = normalized === href || normalized.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`flex flex-col items-center gap-2 ${
                isActive ? "font-semibold text-gray-900" : "text-gray-600 hover:text-gray-900"
            }`}
        >
            <Image src={icon} alt={label} className="w-8 h-8"/>
            {label}
        </Link>
    );
}

export default function Header() {
    const t = useTranslations('Header')
    const [open, setOpen] = useState(false);
    return (
        <header className="relative z-[1] w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto max-w-7xl px-4 flex items-center justify-between md:justify-center w-full">
            <Link
                    href="/"
                    className="flex items-center gap-3 shrink-0"
                    aria-label="APROIL - Inicio"
                >
                    <Image
                        src={iconLogo}
                        alt="APROIL Lubricants"
                        className="h-23 md:h-30 w-auto"
                        draggable={false}
                    />
                </Link>

                <nav className="hidden md:flex items-center justify-center flex-1 text-sm">
                    <ul className="flex items-center gap-10 lg:gap-18 xl:gap-25">
                        <li>
                            <NavItem href="/" icon={iconInicio} label={t('Home')}/>
                        </li>
                        <li>
                            <NavItem href="/products" icon={iconProductos} label={t('Products')}/>
                        </li>
                        <li>
                            <NavItem href="/industries" icon={iconIndustrias} label={t('Industries')}/>
                        </li>
                        <li>
                            <NavItem href="/contact" icon={iconContacto} label={t('Contact')}/>
                        </li>
                    </ul>
                </nav>
                <div className="hidden 2xl:hidden md:flex ">
                    <LocaleSwitcher/>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen(v => !v)}
                    aria-expanded={open}
                    aria-label={open ? "cerrar" : "abrir"}
                    className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-900"
                >
                    <svg className={`h-6 w-6 transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] ${open ? "rotate-90" : "rotate-0"}`}
                         viewBox="0 0 24 24"
                         fill="none">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>

            <Portal>
                <div
                    onClick={() => setOpen(false)}
                    className={`fixed inset-0 z-[50] bg-black/40 transition-opacity duration-300 md:hidden
                ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                />

                <aside
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="mobile-menu-title"
                    className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[85%] bg-white shadow-xl md:hidden
                    transform transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)]
                ${open ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex items-center justify-between p-4 bg-gray-50">
                        <h2 id="mobile-menu-title" className="text-3xl font-medium text-gray-700 aproil-font">{t("Menu")}</h2>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="cerrar"
                            className="rounded-md p-2 text-gray-600 hover:text-gray-900"
                        >
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className="flex h-full flex-col">
                        <div className="overflow-y-auto px-3 py-3">
                            <ul className="space-y-1">
                                <li><NavRow href="/" icon={iconInicio} label={t("Home")}
                                            onClick={() => setOpen(false)}/></li>
                                <li><NavRow href="/products" icon={iconProductos} label={t("Products")}
                                            onClick={() => setOpen(false)}/></li>
                                <li><NavRow href="/industries" icon={iconIndustrias} label={t("Industries")}
                                            onClick={() => setOpen(false)}/></li>
                                <li><NavRow href="/contact" icon={iconContacto} label={t("Contact")}
                                            onClick={() => setOpen(false)}/></li>
                            </ul>
                        </div>

                        <div className="p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                            <div className="flex justify-center">
                                <LocaleSwitcher />
                            </div>
                        </div>


                    </div>
                </aside>
            </Portal>

            <div className="hidden 2xl:flex absolute right-6 top-1/2 -translate-y-1/2">
                <LocaleSwitcher/>
            </div>
        </header>
    );
}
