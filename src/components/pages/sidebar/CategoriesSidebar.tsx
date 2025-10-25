import { getApplicationsList, getIndustriesList, getTechnologiesList } from "@lib/content/client";
import type { ApplicationCard, IndustryCard, TechnologyCard } from "../../../types/domain";
import CategoriesSidebarClient from "./CategoriesSidebarClient";
import {getTranslations} from "next-intl/server";

type Props = {
    locale: "es" | "en";
    className?: string;
};

function pick<T>(obj: { es: T; en?: T } | undefined, locale: "es" | "en", fallback?: T): T | undefined {
    if (!obj) return fallback;
    return (obj[locale] ?? obj.es) as T;
}
function resolveAsset(url?: string) {
    if (!url) return undefined;
    return url.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_ASSETS_BASE ?? ""}${url}`;
}

export default async function CategoriesSidebar({ locale, className }: Props) {
    const t = await getTranslations({ locale, namespace: "Sidebar" });

    const [techsData, indsData, appsData] = await Promise.all([
        getTechnologiesList(),
        getIndustriesList(),
        getApplicationsList(),
    ]);

    const techs = (techsData.items as TechnologyCard[]).map((t) => ({
        slug: t.slug,
        name: pick(t.name, locale, t.slug) || t.slug,
        iconUrl: resolveAsset(t.icon?.url ?? t.image?.url),
        iconAlt: pick(t.icon?.alt, locale) ?? pick(t.image?.alt, locale) ?? t.slug,
        href: `/${locale}/technologies/${t.slug}`,
    }));

    const inds = (indsData.items as IndustryCard[]).map((i) => ({
        slug: i.slug,
        name: pick(i.name, locale, i.slug) || i.slug,
        iconUrl: resolveAsset(i.icon?.url),
        iconAlt: pick(i.icon?.alt, locale) ?? i.slug,
        href: `/${locale}/industries/${i.slug}`,
    }));

    const apps = (appsData.items as ApplicationCard[]).map((a) => ({
        slug: a.slug,
        name: pick(a.name, locale, a.slug) || a.slug,
        iconUrl: resolveAsset(a.icon?.url ?? a.image?.url),
        iconAlt: pick(a.icon?.alt, locale) ?? pick(a.image?.alt, locale) ?? a.slug,
        href: `/${locale}/applications/${a.slug}`,
    }));

    return (

        <aside
            className={[
                "sticky top-4 w-72 shrink-0 bg-gray-100 p-4 shadow-sm rounded-none rounded-r-xl",
                className || "",
            ].join(" ")}
        >
            <h2 className="text-xl font-semibold tracking-tight">{t('Titulo')}</h2>
            <CategoriesSidebarClient techs={techs} inds={inds} apps={apps} />
        </aside>
    );
}
