import { apiGet } from "./http";
import type { ProductSummaryDto } from "./types";

export type TechnologyPageDto = {
    name: string;
    contentMd: string;
    metaDescription?: string | null;
    applications: Array<{
        applicationSlug: string;
        applicationName: string;
        products: ProductSummaryDto[];
    }>;
};

// GET /api/v1/technologies/{slug}?lang=...
export async function getTechnologyPage(slug: string, locale: string) {
    return apiGet<TechnologyPageDto>(`technologies/${encodeURIComponent(slug)}`, { locale });
}
