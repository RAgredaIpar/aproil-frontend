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
import Image from "next/image";
import { usePathname } from "next/navigation";

function NavItem({ href, icon, label }: { href: string; icon: any; label: string }) {
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
    return (
        <header className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto max-w-7xl px-4 flex items-center">
                {/* Logo */}
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

                {/* Navegación */}
                <nav className="hidden lg:flex items-center justify-center flex-1 ms-10 text-sm">
                    <ul className="flex items-center gap-8 xl:gap-10 2xl:gap-12 w-full">
                        <li>
                            <NavItem href="/" icon={iconInicio} label="Inicio" />
                        </li>
                        <li>
                            <NavItem href="/productos" icon={iconProductos} label="Productos" />
                        </li>
                        <li>
                            <NavItem href="/industrias" icon={iconIndustrias} label="Industrias" />
                        </li>
                        <li>
                            <NavItem href="/contacto" icon={iconContacto} label="Contacto" />
                        </li>

                        {/* Separador para iconBuscar */}
                        <li className="ml-auto">
                            <button
                                type="button"
                                className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                                aria-label="Buscar"
                            >
                                <Image src={iconBuscar} alt="Buscar" className="w-8 h-8" />
                                <span>Buscar</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
