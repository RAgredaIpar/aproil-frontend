"use client";

import { useState } from "react";
import { iconAplicaciones, iconIndustrias, iconTecnologias} from "@assets/sidebar";
import Image from "next/image";
import {useTranslations} from "next-intl";

type Item = { slug: string; name: string; iconUrl?: string; iconAlt?: string; href: string };

type Props = {
    techs: Item[];
    inds: Item[];
    apps: Item[];
};

function Chevron({ open }: { open: boolean }) {
    return (
        <svg
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" />
        </svg>
    );
}

function Row({ title, icon, open, onToggle }: { title: string; icon: React.ReactNode; open: boolean; onToggle: () => void }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            className="mt-4 flex w-full items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50"
            aria-expanded={open}
        >
      <span className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-medium">{title}</span>
      </span>
            <Chevron open={open} />
        </button>
    );
}

function ItemRow({ item }: { item: Item }) {
    return (
        <li>
            <a
                href={item.href}
                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-gray-50"
            >
                {item.iconUrl ? (
                    <img
                        src={item.iconUrl}
                        alt={item.iconAlt || item.name}
                        className="h-5 w-5 rounded-sm object-contain border"
                        loading="lazy"
                    />
                ) : (
                    <span className="h-5 w-5 rounded-sm border bg-white" />
                )}
                <span className="truncate">{item.name}</span>
            </a>
        </li>
    );
}

export default function CategoriesSidebarClient({ techs, inds, apps }: Props) {
    const t = useTranslations('Sidebar')
    const [openTechs, setOpenTechs] = useState(false);
    const [openInds, setOpenInds] = useState(false);
    const [openApps, setOpenApps] = useState(false);

    const collapseCls = (open: boolean) =>
        `mt-1 space-y-1 pl-7 overflow-hidden transition-[max-height,opacity] duration-300 ease-out
        ${open ? "max-h-[60vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`;

    return (
        <nav aria-label="Categorías" className="mt-2">
            {/* Tecnologías */}
            <Row
                title={t('Tecnologias')}
                icon={<Image src={iconTecnologias} alt="" width={30} height={30} />}
                open={openTechs}
                onToggle={() => setOpenTechs((v) => !v)}
            />
            <ul className={collapseCls(openTechs)} aria-hidden={!openTechs}>
                {techs.map((t) => (
                    <ItemRow key={t.slug} item={t} />
                ))}
            </ul>

            {/* Industrias */}
            <Row
                title={t('Industrias')}
                icon={<Image src={iconIndustrias} alt="" width={30} height={30} />}
                open={openInds}
                onToggle={() => setOpenInds((v) => !v)}
            />
            <ul className={collapseCls(openInds)} aria-hidden={!openInds}>
                {inds.map((i) => (
                    <ItemRow key={i.slug} item={i} />
                ))}
            </ul>

            {/* Aplicaciones */}
            <Row
                title={t('Aplicaciones')}
                icon={<Image src={iconAplicaciones} alt="" width={30} height={30} />}
                open={openApps}
                onToggle={() => setOpenApps((v) => !v)}
            />
            <ul className={collapseCls(openApps)} aria-hidden={!openApps}>
                {apps.map((a) => (
                    <ItemRow key={a.slug} item={a} />
                ))}
            </ul>
        </nav>
    );
}
