import { getApplicationsList, getTechnologiesList } from "@lib/content/client";
import type { ApplicationCard, TechnologyCard } from "../../../types/domain";
import Tech from "@pages/product-pages/Tecnologia";
import ContactoProductos from "@pages/product-pages/ContactoProductos";
import {TextAnimate} from "@components/magic-ui/MagicText/magix-text";
import {useTranslations} from "next-intl";
import Image from "next/image";

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
        <main className="bg-[#F9F9F9]">
            <Tech/>
            <section className="container mx-auto mt-12">
                <ul className=" mt-4 grid sm:grid-cols-2 xl:grid-cols-4 justify-items-center-safe">
                    {techs.map((t) => {
                        const name = pick(t.name, locale, "");
                        const imgSrc = resolveAsset(t.image?.url ?? t.icon?.url);
                        const alt =
                            pick(t.image?.alt, locale) ??
                            pick(t.icon?.alt, locale) ??
                            name ??
                            t.slug;
                        return (
                            <li key={t.slug}
                                className="border overflow-hidden rounded-tl-4xl rounded-br-4xl max-w-max h-auto my-5">
                                <a href={`/${locale}/technologies/${t.slug}`} className="block">
                                    {imgSrc && (
                                        <Image
                                            src={imgSrc}
                                            alt={alt}
                                            width={300}
                                            height={800}
                                        />
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section className="container mx-auto mt-12">
                <h2 className="text-2xl font-semibold">Aplicaciones</h2>
                <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {apps.map((a) => {
                        const name = pick(a.name, locale, "");
                        const imgSrc = resolveAsset(a.image?.url ?? a.icon?.url);
                        const alt =
                            pick(a.image?.alt, locale) ??
                            pick(a.icon?.alt, locale) ??
                            name ??
                            a.slug;
                        return (
                            <li key={a.slug}
                                className="border overflow-hidden rounded-tl-4xl rounded-br-4xl flex">
                                <a href={`/${locale}/applications/${a.slug}`} className="block">
                                    {imgSrc && (
                                        <Image
                                            src={imgSrc}
                                            alt={alt}
                                            width="1000"
                                            height="300"
                                            className="object-cover"
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
            <ContactoProductos/>
        </main>
    );
}
