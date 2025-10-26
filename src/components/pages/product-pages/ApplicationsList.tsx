import { getApplicationsList } from "@lib/content/client";
import Image from "next/image";
import { ApplicationCard } from "../../../types/domain";
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

function resolveAsset(url?: string) {
    if (!url) return undefined;
    return url.startsWith("http")
        ? url
        : `${process.env.NEXT_PUBLIC_ASSETS_BASE ?? ""}${url}`;
}
export default async function ApplicationList({locale}: Props){
    const t = await getTranslations('ProductPage')
    const appData = await getApplicationsList();
    const apps = appData.items as ApplicationCard[];
    return(
        <main>
            <section className="container mx-auto mt-12">
                <div className="max-w-screen justify-items-center-safe pb-15">
                    <p className="rounded-4xl text-xl shadow-[0_0_25px_rgba(0,0,0,0.2)] px-10 py-2 text-[#E30613]">
                        {t('applications')}
                    </p>
                </div>
                <ul className="grid grid-cols-2 lg:grid-cols-4">
                    {apps.map((a) => {
                        const name = pick(a.name, locale, "");
                        const imgSrc = resolveAsset(a.image?.url ?? a.icon?.url);
                        const alt =
                            pick(a.image?.alt, locale) ??
                            pick(a.icon?.alt, locale) ??
                            name ??
                            a.slug;
                        return (
                            <li
                                key={a.slug}
                                className="border overflow-hidden rounded-tl-4xl rounded-br-4xl max-w-80 sm:max-w-max h-auto my-5 mx-5"
                            >
                                <a href={`/${locale}/applications/${a.slug}`} className="block">
                                    {imgSrc && (
                                        <Image
                                            src={imgSrc} alt={alt} width={1000} height={300}
                                        />
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </main>
    )
}