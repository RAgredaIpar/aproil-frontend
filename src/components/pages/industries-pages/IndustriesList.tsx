import { getIndustriesList } from "@lib/content/client";
import type { IndustryCard } from "../../../types/domain";
import Image from "next/image";
import {BannerIndustriesES, BannerIndustriesEN} from "@assets/industries";
import {getTranslations} from "next-intl/server";

export const revalidate = 600;

type Props = {
    locale: "es" | "en";
};

function pick<T>(
    obj: { es: T; en?: T } | undefined,
    locale: "es" | "en",
    fallback?: T
): T | undefined {
    if (!obj) return fallback;
    return (obj[locale] ?? obj.es) as T;
}

function resolveIconUrl(url?: string) {
    if (!url) return undefined;
    return url.startsWith("http")
        ? url
        : `${process.env.NEXT_PUBLIC_ASSETS_BASE ?? ""}${url}`;
}

export default async function IndustriesList({locale}: Props) {
    const data = await getIndustriesList();
    const t = await getTranslations('IndustriesPage')
    const items = data.items as IndustryCard[]
    const isEnglish = locale === "en";

    return (
        <section className="max-w-screen">
            <div className="relative w-full
                        h-[380px]
                        sm:h-[250px]
                        lg:h-[350px]
                        xl:h-[400px]
                        2xl:h-[800px]
                        overflow-hidden">
                <Image
                    src={isEnglish ? BannerIndustriesEN : BannerIndustriesES}
                    alt={"Baner Industrias"}
                    fill
                    sizes="100vw"
                    priority
                    unoptimized
                    className="object-cover object-[10%_50%] lg:object-center"
                />
            </div>
            <div className="text-center mt-20">
                <h1
                    className="font-bold
                    md:text-3xl
                    sm:text-2xl
                    text-xl
                    ">
                    {t.rich('list.title', {
                        br: () => <br/>
                    })}
                </h1>
            </div>
            <div className="my-8">
                <span
                    className="aproil-font
                    block mx-auto
                    2xl:px-40 2xl:py-2 2xl:text-2xl 2xl:max-w-6xl
                    xl:px-30 xl:py-2 xl:text-xl xl:max-w-5xl
                    lg:px-20 lg:py-2 lg:text-lg lg:max-w-3xl
                    sm:px-10 sm:py-2 sm:text-lg sm:text-center sm:max-w-2xl
                    px-1 py-1 text-xs text-center
                    bg-[#e30613] text-white font-extrabold uppercase tracking-[.3px]
                    leading-snug
                    2xl:[clip-path:polygon(42px_0,100%_0,calc(100%-42px)_100%,0_100%)]
                    xl:[clip-path:polygon(22px_0,100%_0,calc(100%-22px)_100%,0_100%)]
                    lg:[clip-path:polygon(20px_0,100%_0,calc(100%-20px)_100%,0_100%)]
                    md:[clip-path:polygon(20px_0,100%_0,calc(100%-20px)_100%,0_100%)]
                    sm:[clip-path:polygon(14px_0,100%_0,calc(100%-14px)_100%,0_100%)]
                    [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)]"
                >
                    {t('list.ribbon')}
                </span>
            </div>
            <div className="max-w-6xl mx-auto">
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {items.map((it) => {
                        const name = pick(it.name, locale, "");
                        const iconSrc = resolveIconUrl(it.icon?.url);
                        const meta = pick(it.metaDescription, locale, "");
                        const preview = meta && meta.length > 160 ? meta.slice(0, 160) + "…" : meta;

                        return (
                            <li key={it.slug} className="border rounded-xl m-5 p-4 gap-3">
                                {iconSrc && (
                                    <Image
                                        src={iconSrc}
                                        width={96}
                                        height={96}
                                        alt={name || it.slug}
                                        className="w-12 h-12 object-contain border bg-red-600 rounded-l-2xl rounded-r-sm min-w-[80px] -mx-7"
                                    />
                                )}
                                <div className="flex-1 text-left">
                                    <a
                                        className="font-medium text-lg"
                                    >
                                        {name}
                                    </a>
                                    {preview && <p className="text-sm text-gray-600 mt-1">{preview}</p>}
                                    <a
                                        href={`/${locale}/industries/${it.slug}`}
                                        className="font-bold hover:underline"
                                    >Conoce más
                                    </a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
}