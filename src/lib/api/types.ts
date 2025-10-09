export type Locale = 'es' | 'en';

export type ProductSummaryDto = {
    id: number;
    slug: string;
    name: string;
    shortDescription?: string | null;
    pdfUrl?: string | null;
};
