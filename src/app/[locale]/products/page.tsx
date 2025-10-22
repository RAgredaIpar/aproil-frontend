import { getApplicationsList, getTechnologiesList } from "@lib/content/client";
import type { ApplicationCard, TechnologyCard } from "../../../types/domain";

type PageProps = { params: { locale: "es" | "en" } };

function pick<T>(obj: { es: T; en?: T } | undefined, locale: "es" | "en", fallback?: T): T | undefined {
    if (!obj) return fallback;
    return (obj[locale] ?? obj.es) as T;
}

function resolveAsset(url?: string) {
    if (!url) return undefined;
    return url.startsWith("http")
        ? url
        : `${process.env.NEXT_PUBLIC_ASSETS_BASE ?? ""}${url}`;
}

export default async function ProductsHubPage({ params }: PageProps) {
    const { locale } = await params;

    const [appsData, techsData] = await Promise.all([
        getApplicationsList(),
        getTechnologiesList(),
    ]);

    const apps = appsData.items as ApplicationCard[];
    const techs = techsData.items as TechnologyCard[];

    return (
        <main className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-semibold">Catálogo</h1>
            <p className="text-sm text-gray-500 mt-1">
                {techs.length} tecnologías · {apps.length} aplicaciones
            </p>

            {/* Sección: Tecnologías */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold">Tecnologías</h2>
                <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {techs.map((t) => {
                        const name = pick(t.name, locale, "");
                        const imgSrc = resolveAsset(t.image?.url ?? t.icon?.url);
                        const alt =
                            pick(t.image?.alt, locale) ??
                            pick(t.icon?.alt, locale) ??
                            name ??
                            t.slug;
                        return (
                            <li key={t.slug} className="border rounded-xl overflow-hidden">
                                <a href={`/${locale}/technologies/${t.slug}`} className="block">
                                    {imgSrc && (
                                        <img
                                            src={imgSrc}
                                            alt={alt}
                                            className="h-40 w-full object-cover"
                                        />
                                    )}
                                    <div className="p-4">
                                        <div className="font-medium">{name}</div>
                                        <div className="text-xs text-gray-500">{t.slug}</div>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </section>

            {/* Sección: Aplicaciones */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold">Aplicaciones</h2>
                <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {apps.map((a) => {
                        const name = pick(a.name, locale, "");
                        const imgSrc = resolveAsset(a.image?.url ?? a.icon?.url);
                        const alt =
                            pick(a.image?.alt, locale) ??
                            pick(a.icon?.alt, locale) ??
                            name ??
                            a.slug;
                        return (
                            <li key={a.slug} className="border rounded-xl overflow-hidden">
                                <a href={`/${locale}/applications/${a.slug}`} className="block">
                                    {imgSrc && (
                                        <img
                                            src={imgSrc}
                                            alt={alt}
                                            className="h-40 w-full object-cover"
                                        />
                                    )}
                                    <div className="p-4">
                                        <div className="font-medium">{name}</div>
                                        <div className="text-xs text-gray-500">{a.slug}</div>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}
