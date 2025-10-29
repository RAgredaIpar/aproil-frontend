import { notFound } from "next/navigation";
import { getIndustryPage } from "@lib/content/client";
import CategoriesSidebar from "@pages/sidebar/CategoriesSidebar";
import FaqSection from "@pages/sidebar/FAQ";

export const revalidate = 600;

type Props = {
    params: Promise<{ locale: "es" | "en"; slug: string }>;
};

export default async function IndustryDetailPage({ params }: Props) {
    const { locale, slug } = await params;

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
                    <img
                        src={bannerSrc}
                        alt={data.banner?.alt?.[locale] ?? data.banner?.alt?.es ?? data.name}
                        className="w-full object-cover"
                    />
                )}

                <div className="grid grid-cols-[18rem_minmax(0,1fr)] gap-6 py-6">
                    <CategoriesSidebar
                        locale={locale}
                        className="sticky top-4 min-h-[calc(100vh-1rem)]"
                    />

                    <article className="min-w-0 mx-auto">
                        <div className="mx-auto max-w-7xl px-4">
                            <h1 className="text-3xl font-semibold">{data.name}</h1>
                            <p className="text-sm text-gray-500 mt-1">slug: {slug}</p>

                            {data.contentMd && (
                                <pre className="mt-6 whitespace-pre-wrap text-gray-800">
                                    {data.contentMd}
                                </pre>
                            )}

                            <section className="mt-8">
                                <h2 className="text-xl font-semibold">
                                    Aplicaciones destacadas ({data.featuredApplications.length})
                                </h2>
                                <ul className="mt-3 space-y-2">
                                    {data.featuredApplications.map((a) => (
                                        <li key={a.slug} className="border rounded-lg p-4">
                                            #{a.rank} — {a.name} ({a.slug})
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="mt-8">
                                <h2 className="text-xl font-semibold">
                                    Productos destacados ({data.featuredProducts.length})
                                </h2>
                                <ul className="mt-3 space-y-2">
                                    {data.featuredProducts.map((p) => (
                                        <li key={p.slug} className="border rounded-lg p-4">
                                            #{p.rank} — {p.name} ({p.slug})
                                            {p.shortDescription ? (
                                                <div className="text-sm text-gray-600 mt-1">
                                                    {p.shortDescription}
                                                </div>
                                            ) : null}
                                            <div className="text-sm mt-1">
                                                PDF:{" "}
                                                <a className="underline" href={p.pdfUrl} target="_blank" rel="noreferrer">
                                                    {p.pdfUrl}
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </article>
                </div>
                <FaqSection/>
            </main>
        );
    } catch {
        notFound();
    }
}
