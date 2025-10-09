import { apiGet } from "./http";
import type { ProductSummaryDto } from "./types";

export type IndustryCardDto = {
    slug: string;
    name: string;
    imageUrl?: string | null;
    imageAlt?: string | null;
};

export type IndustryPageDto = {
    name: string;
    contentMd: string;
    metaDescription?: string | null;
    featuredApplications: Array<{
        featuredRank: number;
        id: number;
        slug: string;
        name: string;
    }>;
    featuredProducts: ProductSummaryDto[];
};

// GET /api/v1/industries?lang=...
export async function getIndustriesGrid(locale: string) {
    return apiGet<IndustryCardDto[]>("industries", { locale });
}

// GET /api/v1/industries/{slug}?lang=...
export async function getIndustryPage(slug: string, locale: string) {
    return apiGet<IndustryPageDto>(`industries/${encodeURIComponent(slug)}`, { locale });
}
