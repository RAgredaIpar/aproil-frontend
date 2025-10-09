import {getTechnologyPage} from "@lib/api/technologies";

export const dynamic = "force-dynamic";

export default async function TechnologyDetailPage({
                                                       params,
                                                   }: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const data = await getTechnologyPage(slug, locale);

    return (
        <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-semibold">{data.name}</h1>
            <p className="mt-2 text-gray-600">({slug})</p>

            <h2 className="text-xl font-semibold mt-6">Applications ({data.applications.length})</h2>
            <ul className="list-disc pl-5 space-y-2">
                {data.applications.map(app => (
                    <li key={app.applicationSlug}>
                        {app.applicationName} — {app.products.length} productos
                    </li>
                ))}
            </ul>
        </main>
    );
}
