import {getApplicationsGrid} from "@lib/api/applications";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProductsPage({
                                               params,
                                           }: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const apps = await getApplicationsGrid(locale);

    return (
        <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Products (Applications): {apps.length}</h1>

            <ul className="list-disc pl-5 space-y-2">
                {apps.map(a => (
                    <li key={a.slug}>
                        {/* Link con prefijo de locale automático */}
                        <Link href={`/applications/${a.slug}`}>{a.name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
