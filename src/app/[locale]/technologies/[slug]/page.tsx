import { notFound } from "next/navigation";
import { getTechnologyPage } from "@lib/content/client";

export const revalidate = 600;

type Props = {
    params: Promise<{ locale: "es" | "en"; slug: string }>;
};

export default async function TechnologyDetailPage({ params }: Props) {
    const { locale, slug } = await params;

    try {
        const data = await getTechnologyPage(slug, locale);

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

                <h2 className="mt-8 text-xl font-semibold">
                    Applications ({data.applications.length})
                </h2>

                <ul className="mt-3 space-y-2">
                    {data.applications.map((grp) => (
                        <li key={grp.applicationSlug} className="border rounded-lg p-4">
                            <div className="font-medium">
                                {grp.applicationName} — {grp.products.length} productos
                            </div>
                            <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                                {grp.products.slice(0, 3).map((p) => (
                                    <li key={p.slug}>
                                        {p.name} ({p.slug})
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </main>
        );
    } catch {
        notFound();
    }
}
