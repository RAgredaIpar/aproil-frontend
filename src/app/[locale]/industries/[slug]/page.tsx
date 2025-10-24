import { notFound } from "next/navigation";
import { getIndustryPage } from "@lib/content/client";

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
            <main className="max-w-5xl mx-auto p-6">
                <h1 className="text-3xl font-semibold">{data.name}</h1>
                <p className="text-sm text-gray-500 mt-1">slug: {slug}</p>

                {bannerSrc && (
                    <img
                        src={bannerSrc}
                        alt={data.banner?.alt?.[locale] ?? data.banner?.alt?.es ?? data.name}
                        className="mt-4 w-full h-56 object-cover rounded-xl"
                    />
                )}

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
            </main>
        );
    } catch {
        notFound();
    }
}
