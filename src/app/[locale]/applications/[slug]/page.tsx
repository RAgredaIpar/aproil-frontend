import { notFound } from "next/navigation";
import { getApplicationPage } from "@lib/content/client";

type PageProps = {
    params: { locale: "es" | "en"; slug: string };
};

export default async function ApplicationDetailPage({ params }: PageProps) {
    const { locale, slug } = await params;
``
    try {
        const data = await getApplicationPage(slug, locale);

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
                        alt={
                            data.banner?.alt?.[locale] ??
                            data.banner?.alt?.es ??
                            data.name
                        }
                        className="mt-4 w-full h-56 object-cover rounded-xl"
                    />
                )}

                {data.contentMd && (
                    <pre className="mt-6 whitespace-pre-wrap text-gray-800">
            {data.contentMd}
          </pre>
                )}

                <h2 className="mt-8 text-xl font-semibold">
                    Technologies ({data.technologies.length})
                </h2>

                <ul className="mt-3 space-y-2">
                    {data.technologies.map((grp) => (
                        <li key={grp.technologySlug} className="border rounded-lg p-4">
                            <div className="font-medium">
                                {grp.technologyName} — {grp.products.length} productos
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
