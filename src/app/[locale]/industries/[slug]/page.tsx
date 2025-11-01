import {notFound} from "next/navigation";
import {getIndustryPage} from "@lib/content/client";
import CategoriesSidebar from "@pages/sidebar/CategoriesSidebar";
import FaqSection from "@pages/sidebar/FAQ";
import {InteractiveHoverButton} from "@components/magic-ui";
import {pdfIcon} from "@assets/product";
import Image from "next/image";
import MarkdownContent from "@pages/markdown/MarkdownContent";
import {getTranslations} from "next-intl/server";

export const revalidate = 600;

type Props = {
    params: Promise<{ locale: "es" | "en"; slug: string }>;
};

export default async function IndustryDetailPage({params}: Props) {
    const {locale, slug} = await params;
    const t = await getTranslations({ locale, namespace: "Slug" });

    try {
        const data = await getIndustryPage(slug, locale);

        const assetsBase = process.env.NEXT_PUBLIC_ASSETS_BASE ?? "";
        const bannerSrc =
            data.banner?.url &&
            (data.banner.url.startsWith("http")
                ? data.banner.url
                : `${assetsBase}${data.banner.url}`);

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
                            <p className="text-3xl uppercase sm:text-5xl aproil-font text-[#E30613]">{t('industries.pt1')}</p>
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
                                <h2 className="text-[25px] sm:text-3xl aproil-font uppercase text-[#E30613] border-b-2 border-black">
                                    {t('industries.pt2')}
                                </h2>
                                <ul className="mt-8 space-y-2">
                                    {data.featuredApplications.map((a) => (
                                        <li key={a.slug} className="aproil-font text-[15px] sm:text-xl">
                                            <InteractiveHoverButton
                                                href={`/${locale}/applications/${a.slug}`}
                                                color="white"
                                                textColor="black"
                                                hoverColor="black"
                                                hoverTextColor="white"
                                                lineColor="black"
                                                className="w-full max-w-lg py-2 sm:py-3
                                                [&>div:first-child]:p-0
                                                [&>div:first-child]:gap-1.5
                                                [&>div:first-child>div]:h-3
                                                [&>div:first-child>div]:w-3
                                                [&>div:last-child_svg]:w-5">
                                                {a.name}
                                            </InteractiveHoverButton>
                                        </li>

                                    ))}
                                </ul>
                            </section>

                            <section className="mt-6">
                                <h2 className="text-[23px] sm:text-3xl aproil-font uppercase text-[#E30613] border-b-2 border-black">
                                    {t('industries.pt3')}
                                </h2>
                                <ul className="mt-8 space-y-4">
                                    {data.featuredProducts.map((p) => (
                                        <li key={p.slug}>
                                            <div className="flex items-end gap-3">
                                                <a
                                                    href={p.pdfUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group inline-flex w-fit items-end gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613] rounded-sm"
                                                    aria-label={`Abrir PDF de ${p.name}`}
                                                >
                                                    <Image
                                                        src={pdfIcon}
                                                        alt="PDF"
                                                        className="h-12 w-12 shrink-0 block"
                                                        aria-hidden="true"
                                                    />
                                                    <h3 className="uppercase font-semibold text-black leading-tight transition-colors group-hover:text-[#E30613]">
                                                        {p.name}
                                                    </h3>
                                                </a>
                                            </div>
                                            {p.shortDescription && (
                                                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                                                    {p.shortDescription}
                                                </p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
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
