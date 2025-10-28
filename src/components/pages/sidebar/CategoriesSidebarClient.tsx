"use client";

import React, {useEffect, useRef, useState} from "react";
import { usePathname } from "next/navigation";
import { iconAplicaciones, iconIndustrias, iconTecnologias } from "@assets/sidebar";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Item = { slug: string; name: string; iconUrl?: string; iconAlt?: string; href: string };
type Props = { techs: Item[]; inds: Item[]; apps: Item[] };

const STORAGE_KEY = "sidebar-open";

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

function Row({ title, icon, open, onToggle, active = false }:{
    title: string; icon: React.ReactNode; open: boolean; onToggle: () => void; active?: boolean;
}) {
    return (
        <button
            type="button"
            onClick={onToggle}
            className="mt-4 flex w-full items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50"
            aria-expanded={open}
        >
      <span className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className={`text-sm ${active ? "font-bold" : "font-medium"}`}>{title}</span>
      </span>
            <Chevron open={open} />
        </button>
    );
}

function ItemRow({ item }: { item: Item }) {
    const pathname = usePathname();
    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

    return (
        <li>
            <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                    "flex items-center gap-2 rounded-md px-2 py-2 text-sm",
                    "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613]",
                    "[-webkit-tap-highlight-color:transparent]",
                    isActive
                        ? "pl-2 border-l-2 border-[#E30613] bg-[#EDEDED] text-[#E30613] font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                ].join(" ")}
            >
                {item.iconUrl ? (
                    <Image
                        src={item.iconUrl}
                        alt={item.iconAlt || item.name}
                        width={20}
                        height={20}
                        sizes="20px"
                        className="h-5 w-5 rounded-sm object-contain border border-black bg-white"
                        loading="lazy"
                    />
                ) : (
                    <span className="h-5 w-5 rounded-sm border border-black bg-white" />
                )}
                <span className="truncate">{item.name}</span>
            </Link>
        </li>
    );
}

export default function CategoriesSidebarClient({ techs, inds, apps }: Props) {
    const t = useTranslations("Sidebar");
    const pathname = usePathname();

    const isTechSection = pathname.includes("/technologies");
    const isIndSection  = pathname.includes("/industries");
    const isAppSection  = pathname.includes("/applications");

    const [openTechs, setOpenTechs] = useState<boolean>(() => isTechSection);
    const [openInds,  setOpenInds]  = useState<boolean>(() => isIndSection);
    const [openApps,  setOpenApps]  = useState<boolean>(() => isAppSection);

    useEffect(() => {
        setOpenTechs(isTechSection);
        setOpenInds(isIndSection);
        setOpenApps(isAppSection);
    }, [isTechSection, isIndSection, isAppSection]);

    useEffect(() => {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({ techs: openTechs, inds: openInds, apps: openApps })
            );
        } catch {}
    }, [openTechs, openInds, openApps]);

    const didRestore = useRef(false);

    useEffect(() => {
        if (didRestore.current) return;
        didRestore.current = true;

        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
            if (!isTechSection && typeof saved.techs === "boolean") setOpenTechs(saved.techs);
            if (!isIndSection  && typeof saved.inds  === "boolean") setOpenInds(saved.inds);
            if (!isAppSection  && typeof saved.apps  === "boolean") setOpenApps(saved.apps);
        } catch {}
    }, [isTechSection, isIndSection, isAppSection]);

    const collapseCls = (open: boolean) =>
        `mt-1 space-y-1 pl-7 overflow-hidden transition-[max-height,opacity] duration-300 ease-out
     ${open ? "max-h-[60vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`;

    return (
        <nav aria-label={t("Titulo")} className="mt-2 sm:mb-0 mb-20">
            <Row
                title={t("Tecnologias")}
                icon={<Image src={iconTecnologias} alt="" width={30} height={30} />}
                open={openTechs}
                onToggle={() => setOpenTechs(v => !v)}
                active={isTechSection}
            />
            <ul className={collapseCls(openTechs)} aria-hidden={!openTechs}>
                {techs.map(ti => <ItemRow key={ti.slug} item={ti} />)}
            </ul>

            <Row
                title={t("Industrias")}
                icon={<Image src={iconIndustrias} alt="" width={30} height={30} />}
                open={openInds}
                onToggle={() => setOpenInds(v => !v)}
                active={isIndSection}
            />
            <ul className={collapseCls(openInds)} aria-hidden={!openInds}>
                {inds.map(i => <ItemRow key={i.slug} item={i} />)}
            </ul>

            <Row
                title={t("Aplicaciones")}
                icon={<Image src={iconAplicaciones} alt="" width={30} height={30} />}
                open={openApps}
                onToggle={() => setOpenApps(v => !v)}
                active={isAppSection}
            />
            <ul className={collapseCls(openApps)} aria-hidden={!openApps}>
                {apps.map(a => <ItemRow key={a.slug} item={a} />)}
            </ul>
        </nav>
    );
}
