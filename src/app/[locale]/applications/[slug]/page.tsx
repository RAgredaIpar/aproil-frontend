import {notFound} from "next/navigation";
import {getApplicationPage} from "@lib/content/client";
import CategoriesSidebar from "@pages/sidebar/CategoriesSidebar";
import FaqSection from "@pages/sidebar/FAQ";
import Image from "next/image";
import MarkdownContent from "@pages/markdown/MarkdownContent";
import TechAccordion from "@pages/product-pages/TechAccordion";
import {getTranslations} from "next-intl/server";

export const revalidate = 600;

type Props = { params: Promise<{ locale: "es" | "en"; slug: string }>; };

type ColorSpec = { bg: string; text: string; bgHex: string };

const COLORS: ColorSpec[] = [
    {bg: "bg-[#5F6065]", text: "text-white", bgHex: "#5F6065"}, // gris
    {bg: "bg-[#E30613]", text: "text-white", bgHex: "#E30613"}, // rojo
    {bg: "bg-[#0175BA]", text: "text-white", bgHex: "#0175BA"}, // azul
    {bg: "bg-[#42B02B]", text: "text-white", bgHex: "#42B02B"}, // verde
];

function colorIndexFromSlug(slug: string, fallbackIdx: number) {
    if (!slug) return fallbackIdx % COLORS.length;
    let h = 0;
    for (let i = 0; i < slug.length; i++) h = ((h << 5) - h + slug.charCodeAt(i)) | 0;
    return Math.abs(h) % COLORS.length;
}

function pickColorIndex(name?: string, slug?: string, idx: number = 0) {
    const key = (name ?? "")
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();
    const s = (slug ?? "").toUpperCase();

    if (/\bMEMBRAN/.test(key) || s.includes("MEMBRAN")) return 0;
    if (/\bADSOR/.test(key)   || s.includes("ADSOR"))   return 1;
    if (/\bOXID/.test(key)    || s.includes("OXID"))    return 2;
    if (/\bUV\b/.test(key)    || s.includes("UV"))      return 3;

    if (slug) return colorIndexFromSlug(slug, idx);
    return idx % COLORS.length;
}


function norm(s?: string) {
    return (s ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function orderIndex(name?: string, slug?: string) {
    const k = norm(name) || norm(slug);
    if (k.includes("membranas") || k.includes("membranes")) return 0;
    if (k.includes("adsorcion") || k.includes("adsorption")) return 1;
    if (k.includes("oxidacion avanzada") || k.includes("advanced oxidation")) return 2;
    if (k.includes("desinfeccion uv") || k.includes("uv disinfection") || k === "uv") return 3;
    return Number.MAX_SAFE_INTEGER;
}

export default async function ApplicationDetailPage({params}: Props) {
    const {locale, slug} = await params;
    const t = await getTranslations({ locale, namespace: "Slug" });

    try {
        const data = await getApplicationPage(slug, locale);

        const assetsBase = process.env.NEXT_PUBLIC_ASSETS_BASE ?? "";
        const bannerSrc =
            data.banner?.url &&
            (data.banner.url.startsWith("http")
                ? data.banner.url
                : `${assetsBase}${data.banner.url}`);

        const techs = data.technologies
            .map((t, i) => ({t, i}))
            .sort((a, b) => {
                const ai = orderIndex(a.t.technologyName, a.t.technologySlug);
                const bi = orderIndex(b.t.technologyName, b.t.technologySlug);
                return ai !== bi ? ai - bi : a.i - b.i;
            })
            .map(x => x.t)
            .slice(0, 4);

        const colorBySlug = Object.fromEntries(
            techs.map((g, idx) => [
                g.technologySlug,
                pickColorIndex(g.technologyName, g.technologySlug, idx),
            ])
        );

        return (
            <main>
                {bannerSrc && (
                    <div className="relative w-full
                        h-[130px]
                        sm:h-[320px]
                        md:h-[210px]
                        lg:h-[220px]
                        xl:h-[280px]
                        2xl:h-[420px]
                        overflow-hidden">
                        <Image
                            src={bannerSrc}
                            alt={data.banner?.alt?.[locale] ?? data.banner?.alt?.es ?? data.name}
                            fill
                            sizes="100vw"
                            priority
                            unoptimized
                            className="object-cover object-[50%_50%] lg:object-center"
                        />
                    </div>
                )}

                <div className="mx-auto">
                    <div className="grid grid-cols-1 lg:[grid-template-columns:18rem_minmax(0,1fr)] gap-6 sm:py-10">
                        <CategoriesSidebar
                            locale={locale}
                            className="sticky top-4 min-h-[calc(100vh-1rem)]"
                        />

                        <article className="mx-auto sm:w-[40rem] px-4 py-6">
                            <p className="text-3xl uppercase sm:text-5xl aproil-font text-[#E30613]">{t('applications.pt1')}</p>
                            <h1
                                className={`aproil-font uppercase ${
                                    (data.name?.trim().split(/\s+/).length ?? 0) === 1
                                        ? "text-[32px] sm:text-5xl"
                                        : "text-[20px] sm:text-5xl"
                                }`}
                            >
                                {data.name}
                            </h1>

                            <p className="mt-6 break-words text-gray-500">{data.metaDescription}</p>

                            {data.contentMd && (
                                <div className="mt-5 sm:max-w-[33rem]">
                                    <MarkdownContent content={data.contentMd}/>
                                </div>
                            )}

                            <section className="mt-6">
                                <h2 className="text-[25px] sm:text-4xl aproil-font uppercase text-[#E30613] border-b-2 border-black">
                                    {t('applications.pt2')}
                                </h2>
                                <TechAccordion techs={techs} colorBySlug={colorBySlug} COLORS={COLORS} />
                            </section>
                        </article>
                    </div>
                </div>
                <FaqSection/>
            </main>
        );
    } catch {
        notFound();
    }
}
