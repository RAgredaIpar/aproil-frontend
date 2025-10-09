import {getIndustryPage} from "@lib/api/industries";

export const dynamic = "force-dynamic";

export default async function IndustryDetailPage({
                                                     params,
                                                 }: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const data = await getIndustryPage(slug, locale);

    return (
        <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-semibold">{data.name}</h1>
            <p className="mt-2 text-gray-600">({slug})</p>

            <h2 className="text-xl font-semibold mt-6">Featured applications ({data.featuredApplications.length})</h2>
            <ul className="list-disc pl-5 space-y-2">
                {data.featuredApplications.map(a => (
                    <li key={a.id}>{a.name} (rank {a.featuredRank})</li>
                ))}
            </ul>

            <h2 className="text-xl font-semibold mt-6">Featured products ({data.featuredProducts.length})</h2>
            <ul className="list-disc pl-5 space-y-2">
                {data.featuredProducts.map(p => (
                    <li key={p.id}>{p.name}</li>
                ))}
            </ul>
        </main>
    );
}
