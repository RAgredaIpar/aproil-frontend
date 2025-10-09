import { apiGet } from "./http";
import type { ProductSummaryDto } from "./types";

export type ApplicationCardDto = {
    slug: string;
    name: string;
    imageUrl?: string | null;
    imageAlt?: string | null;
};

export type ApplicationPageDto = {
    name: string;
    contentMd: string;
    metaDescription?: string | null;
    technologies: Array<{
        technologySlug: string;
        technologyName: string;
        products: ProductSummaryDto[];
    }>;
};

// GET /api/v1/applications?lang=...
export async function getApplicationsGrid(locale: string) {
    return apiGet<ApplicationCardDto[]>("applications", { locale });
}

// GET /api/v1/applications/{slug}?lang=...
export async function getApplicationPage(slug: string, locale: string) {
    return apiGet<ApplicationPageDto>(`applications/${encodeURIComponent(slug)}`, { locale });
}
