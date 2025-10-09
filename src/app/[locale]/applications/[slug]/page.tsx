import {getApplicationPage} from "@lib/api/applications";

export const dynamic = "force-dynamic";

export default async function ApplicationDetailPage({
                                                        params,
                                                    }: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const data = await getApplicationPage(slug, locale);

    return (
        <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-semibold">{data.name}</h1>
            <p className="mt-2 text-gray-600">({slug})</p>

            <h2 className="text-xl font-semibold mt-6">Technologies ({data.technologies.length})</h2>
            <ul className="list-disc pl-5 space-y-2">
                {data.technologies.map(tech => (
                    <li key={tech.technologySlug}>
                        {tech.technologyName} — {tech.products.length} productos
                    </li>
                ))}
            </ul>
        </main>
    );
}
