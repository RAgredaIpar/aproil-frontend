import {getIndustriesGrid} from "@lib/api/industries";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function IndustriesPage({
                                                 params,
                                             }: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const industries = await getIndustriesGrid(locale);

    return (
        <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Industries: {industries.length}</h1>

            <ul className="list-disc pl-5 space-y-2">
                {industries.map(ind => (
                    <li key={ind.slug}>
                        <Link href={`/industries/${ind.slug}`}>{ind.name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
