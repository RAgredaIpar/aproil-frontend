import { notFound } from "next/navigation";
import { getApplicationPage } from "@lib/content/client";
import CategoriesSidebar from "@pages/sidebar/CategoriesSidebar";
import FaqSection from "@pages/sidebar/FAQ";

export const revalidate = 600;

type Props = {
    params: Promise<{ locale: "es" | "en"; slug: string }>;
};

export default async function ApplicationDetailPage({ params }: Props) {
    const { locale, slug } = await params;

    try {
        const data = await getApplicationPage(slug, locale);

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
                        className="mt-4 w-full h-56 object-cover rounded-xl"
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
