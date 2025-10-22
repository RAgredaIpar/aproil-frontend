import { getIndustriesList } from "@lib/content/client";
import type { IndustryCard } from "../../../types/domain";

type PageProps = {
    params: { locale: "es" | "en" };
};

function pick<T>(obj: { es: T; en?: T } | undefined, locale: "es" | "en", fallback?: T): T | undefined {
    if (!obj) return fallback;
    return (obj[locale] ?? obj.es) as T;
}

function resolveIconUrl(url?: string) {
    if (!url) return undefined;
    return url.startsWith("http")
        ? url
        : `${process.env.NEXT_PUBLIC_ASSETS_BASE ?? ""}${url}`;
}

export default async function IndustriesListPage({ params }: PageProps) {
    const { locale } = await params;
    const data = await getIndustriesList();

    const items = data.items as IndustryCard[];

    return (
        <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-semibold">Industrias</h1>
            <p className="text-sm text-gray-500 mt-1">
                {items.length} resultados
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                {items.map((it) => {
                    const name = pick(it.name, locale, "");
                    const iconSrc = resolveIconUrl(it.icon?.url);
                    const meta = pick(it.metaDescription, locale, "");
                    const preview =
                        meta && meta.length > 160 ? meta.slice(0, 160) + "…" : meta;

                    return (
                        <li key={it.slug} className="border rounded-xl p-4 flex gap-3">
                            {iconSrc && (
                                <img
                                    src={iconSrc}
                                    alt={name || it.slug}
                                    className="w-12 h-12 rounded-lg object-contain border"
                                />
                            )}
                            <div className="flex-1">
                                <a
                                    href={`/${locale}/industries/${it.slug}`}
                                    className="font-medium text-lg hover:underline"
                                >
                                    {name}
                                </a>
                                {preview && (
                                    <p className="text-sm text-gray-600 mt-1">{preview}</p>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
