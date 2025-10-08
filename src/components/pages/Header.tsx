"use client";

import {
    iconLogo,
    iconContacto,
    iconIndustrias,
    iconProductos,
    iconInicio,
    iconBuscar,
} from "@assets/header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@components/LocaleSwitcher/LocaleSwitcher";
import Image, { StaticImageData } from "next/image";

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
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`flex flex-col items-center gap-2 ${
                isActive ? "font-semibold text-gray-900" : "text-gray-600 hover:text-gray-900"
            }`}
        >
            <Image src={icon} alt={label} className="w-8 h-8" />
            {label}
        </Link>
    );
}

export default function Header() {
    const t = useTranslations('Header')
    return (
        <header className="relative z-1 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto max-w-7xl px-4 flex items-center justify-center">
                <Link
                    href="/"
                    className="flex items-center gap-3 shrink-0"
                    aria-label="APROIL - Inicio"
                >
                    <Image
                        src={iconLogo}
                        alt="APROIL Lubricants"
                        className="h-30 w-auto"
                        draggable={false}
                    />
                </Link>

                <nav className="hidden lg:flex items-center justify-center flex-1 ms-10 text-sm">
                    <ul className="flex items-center gap-8 xl:gap-10 2xl:gap-12">
                        <li>
                            <NavItem href="/" icon={iconInicio} label={t('Home')}/>
                        </li>
                        <li>
                            <NavItem href="/productos" icon={iconProductos} label={t('Products')}/>
                        </li>
                        <li>
                            <NavItem href="/industrias" icon={iconIndustrias} label={t('Industries')}/>
                        </li>
                        <li>
                            <NavItem href="/contacto" icon={iconContacto} label={t('Contact')} />
                        </li>
                        <li></li>
                        <li></li>
                        <li className="ml-8">
                            <button
                                type="button"
                                className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                                aria-label="Buscar"
                            >
                                <Image src={iconBuscar} alt="Inicio" className="w-8 h-8" />
                                <span>{t('Search')}</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="hidden 2xl:hidden lg:flex ">
                    <LocaleSwitcher />
                </div>
            </div>
            <div className="hidden 2xl:flex absolute right-6 top-1/2 -translate-y-1/2">
                <LocaleSwitcher />
            </div>
        </header>
    );
}
