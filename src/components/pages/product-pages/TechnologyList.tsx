import {getTechnologiesList} from "@lib/content/client";
import {TechnologyCard} from "../../../types/domain";
import Image from "next/image";

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

export default async function TechnologyList({locale}: Props){
    const techData = await getTechnologiesList();

    const techs = techData.items as TechnologyCard[];
    return(
        <main>
            <section className="hidden xl:block container mx-auto mt-12">
                <ul className=" mt-4 grid xl:grid-cols-4 justify-items-center-safe">
                    {techs.map((t) => {
                        const name = pick(t.name, locale, "");
                        const imgSrc = resolveAsset(t.image?.url ?? t.icon?.url);
                        const alt =
                            pick(t.image?.alt, locale) ??
                            pick(t.icon?.alt, locale) ??
                            name ??
                            t.slug;
                        return (
                            <li
                                key={t.slug}
                                className="border overflow-hidden rounded-tl-4xl rounded-br-4xl max-w-max h-auto my-5"
                            >
                                <a href={`/${locale}/technologies/${t.slug}`} className="block">
                                    {imgSrc && (
                                        <Image src={imgSrc} alt={alt} width={300} height={800} />
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section className="block xl:hidden container px-2 sm:px-0 sm:mx-auto">
                <ul className="grid grid-cols-1 lg:grid-cols-2">
                    {techs.map((t) => {
                        const name = pick(t.name, locale, "");
                        const bannerSrc = resolveAsset(t.banner?.url ?? t.icon?.url);
                        const alt =
                            pick(t.image?.alt, locale) ??
                            pick(t.icon?.alt, locale) ??
                            name ??
                            t.slug;
                        return (
                            <li key={t.slug}
                                className="border overflow-hidden rounded-tl-4xl rounded-br-4xl sm:max-w-max h-auto my-5 mx-auto sm:mx-auto "
                            >
                                <a href={`/${locale}/technologies/${t.slug}`} className="block">
                                    {bannerSrc && (
                                        <Image
                                            src={bannerSrc}
                                            alt={alt}
                                            width={500}
                                            height={147}
                                        />
                                    )}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
)
}