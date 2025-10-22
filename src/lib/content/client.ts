import { LIST_TAGS, technologyTag, applicationTag, industryTag } from "@lib/cache/tags";
import {
    ApplicationGroup,
    ApplicationGroupRaw,
    Locale,
    ProductItem,
    ProductItemRaw,
    TechnologyPage,
    TechnologyPageRaw,
    TechnologiesListJson,
    ApplicationsListJson,
    ApplicationPage,
    ApplicationPageRaw,
    TechnologyGroup,
    TechnologyGroupRaw,
    IndustryPage,
    IndustryPageRaw,
    FeaturedApp,
    FeaturedAppRaw,
    FeaturedProduct,
    FeaturedProductRaw,
    IndustriesListJson
} from "../../types/domain";
import { fetchJson, pickLocalized, pickProductLocale } from "./reader";

// LISTAS PARA VISTA PRODUCTS Y SIDEBAR DE TAKO SMALL
export async function getTechnologiesList() {
    const data = await fetchJson<TechnologiesListJson>(
        "technologies.json",
        LIST_TAGS.technologies
    );
    return data;
}

export async function getApplicationsList() {
    const data = await fetchJson<ApplicationsListJson>(
        "applications.json",
        LIST_TAGS.applications
    );
    return data;
}

export async function getIndustriesList() {
    const data = await fetchJson<IndustriesListJson>(
        "industries.json",
        LIST_TAGS.industries
    );
    return data;
}

// TECNOLOGIAS (VISTA SLUG)
export async function getTechnologyPage(
    slug: string,
    locale: Locale
): Promise<TechnologyPage> {
    const raw = await fetchJson<TechnologyPageRaw>(
        `technologies/${slug}.json`,
        technologyTag(slug)
    );

    const loc = pickProductLocale(raw.locales, locale);
    const applications: ApplicationGroup[] = raw.applications.map(
        (g: ApplicationGroupRaw) => {
            const products: ProductItem[] = g.products.map((p: ProductItemRaw) => {
                const ploc = pickProductLocale(p.locales, locale);
                const pdf =
                    typeof p.pdfUrl === "string"
                        ? p.pdfUrl
                        : pickLocalized(p.pdfUrl, locale);
                return {
                    id: p.id,
                    slug: p.slug,
                    name: ploc.name,
                    shortDescription: ploc.shortDescription,
                    pdfUrl: pdf,
                };
            });

            return {
                applicationSlug: g.applicationSlug,
                applicationName: pickLocalized(g.name, locale),
                icon: g.icon,
                products,
            };
        }
    );

    return {
        slug,
        name: loc.name,
        contentMd: loc.contentMd,
        metaDescription: loc.metaDescription,
        banner: raw.media?.banner,
        applications,
    };
}

// APLICACIONES (VISTA SLUG)

export async function getApplicationPage(
    slug: string,
    locale: Locale
): Promise<ApplicationPage> {
    const raw = await fetchJson<ApplicationPageRaw>(
        `applications/${slug}.json`,
        applicationTag(slug)
    );

    const loc = pickProductLocale(raw.locales, locale);

    const technologies: TechnologyGroup[] = raw.technologies.map(
        (g: TechnologyGroupRaw) => {
            const products: ProductItem[] = g.products.map((p: ProductItemRaw) => {
                const ploc = pickProductLocale(p.locales, locale);
                const pdf =
                    typeof p.pdfUrl === "string"
                        ? p.pdfUrl
                        : pickLocalized(p.pdfUrl, locale);
                return {
                    id: p.id,
                    slug: p.slug,
                    name: ploc.name,
                    shortDescription: ploc.shortDescription,
                    pdfUrl: pdf,
                };
            });

            return {
                technologySlug: g.technologySlug,
                technologyName: pickLocalized(g.name, locale),
                icon: g.icon,
                products,
            };
        }
    );

    return {
        slug,
        name: loc.name,
        contentMd: loc.contentMd,
        metaDescription: loc.metaDescription,
        banner: raw.media?.banner,
        technologies,
    };
}

// --- INDUSTRIAS (VISTA SLUG)

export async function getIndustryPage(
    slug: string,
    locale: Locale
): Promise<IndustryPage> {
    const raw = await fetchJson<IndustryPageRaw>(
        `industries/${slug}.json`,
        industryTag(slug)
    );

    const loc = pickProductLocale(raw.locales, locale);

    const featuredApplications: FeaturedApp[] = [...raw.featuredApplications]
        .sort((a: FeaturedAppRaw, b: FeaturedAppRaw) => a.rank - b.rank)
        .map((a: FeaturedAppRaw) => ({
            rank: a.rank,
            slug: a.slug,
            name: pickLocalized(a.name, locale),
        }));

    const featuredProducts: FeaturedProduct[] = [...raw.featuredProducts]
        .sort((a: FeaturedProductRaw, b: FeaturedProductRaw) => a.rank - b.rank)
        .map((p: FeaturedProductRaw) => {
            const ploc = pickProductLocale(p.locales, locale);
            const pdf =
                typeof p.pdfUrl === "string"
                    ? p.pdfUrl
                    : pickLocalized(p.pdfUrl, locale);

            const base: ProductItem = {
                id: p.id,
                slug: p.slug,
                name: ploc.name,
                shortDescription: ploc.shortDescription,
                pdfUrl: pdf,
            };

            return { rank: p.rank, ...base };
        });

    return {
        slug,
        name: loc.name,
        contentMd: loc.contentMd,
        metaDescription: loc.metaDescription,
        banner: raw.media?.banner,
        featuredApplications,
        featuredProducts,
    };
}