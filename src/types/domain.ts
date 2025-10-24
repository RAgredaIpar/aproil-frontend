export type Locale = "es" | "en";
export type Localized<T = string> = { es: T; en?: T };

export type ImageRef = {
    url: string;
    alt?: Localized<string>;
};

// --- TECNOLOGIAS (SLUG)
export type TechnologyCard = {
    slug: string;
    name: Localized<string>;
    image?: ImageRef;
    banner?: ImageRef;
    icon?: ImageRef;
};

export type TechnologiesListJson = {
    items: TechnologyCard[];
};

export type ProductLocales = {
    name: string;
    shortDescription?: string;
};

export type ProductItemRaw = {
    id: number;
    slug: string;
    pdfUrl: string | Localized<string>;
    locales: { es: ProductLocales; en?: ProductLocales };
};

export type ApplicationGroupRaw = {
    applicationSlug: string;
    name: Localized<string>;
    icon?: ImageRef;
    products: ProductItemRaw[];
};

export type TechnologyPageRaw = {
    media?: { banner?: ImageRef };
    locales: {
        es: { name: string; contentMd?: string; metaDescription?: string };
        en?: { name: string; contentMd?: string; metaDescription?: string };
    };
    applications: ApplicationGroupRaw[];
};

export type ProductItem = {
    id: number;
    slug: string;
    name: string;
    shortDescription?: string;
    pdfUrl: string;
};

export type ApplicationGroup = {
    applicationSlug: string;
    applicationName: string;
    icon?: ImageRef;
    products: ProductItem[];
};

export type TechnologyPage = {
    slug: string;
    name: string;
    contentMd?: string;
    metaDescription?: string;
    banner?: ImageRef;
    applications: ApplicationGroup[];
};

// --- APLICACIONES (SLUG)

export type ApplicationCard = {
    slug: string;
    name: Localized<string>;
    image?: ImageRef;
    icon?: ImageRef;
};

export type ApplicationsListJson = {
    items: ApplicationCard[];
};

export type TechnologyGroupRaw = {
    technologySlug: string;
    name: Localized<string>;
    icon?: ImageRef;
    products: ProductItemRaw[];
};

export type ApplicationPageRaw = {
    media?: { banner?: ImageRef };
    locales: {
        es: { name: string; contentMd?: string; metaDescription?: string };
        en?: { name: string; contentMd?: string; metaDescription?: string };
    };
    technologies: TechnologyGroupRaw[];
};

export type TechnologyGroup = {
    technologySlug: string;
    technologyName: string;
    icon?: ImageRef;
    products: ProductItem[];
};

export type ApplicationPage = {
    slug: string;
    name: string;
    contentMd?: string;
    metaDescription?: string;
    banner?: ImageRef;
    technologies: TechnologyGroup[];
};

// -- - INDUSTRIAS (SLUG)

export type FeaturedAppRaw = {
    rank: number;
    slug: string;
    name: Localized<string>;
};

export type FeaturedProductRaw = ProductItemRaw & {
    rank: number;
};

export type IndustryPageRaw = {
    media?: { banner?: ImageRef };
    locales: {
        es: { name: string; contentMd?: string; metaDescription?: string };
        en?: { name: string; contentMd?: string; metaDescription?: string };
    };
    featuredApplications: FeaturedAppRaw[];
    featuredProducts: FeaturedProductRaw[];
};

export type FeaturedApp = {
    rank: number;
    slug: string;
    name: string;
};

export type FeaturedProduct = ProductItem & {
    rank: number;
};

export type IndustryPage = {
    slug: string;
    name: string;
    contentMd?: string;
    metaDescription?: string;
    banner?: ImageRef;
    featuredApplications: FeaturedApp[];
    featuredProducts: FeaturedProduct[];
};

// INDUSTRIAS (GENERAL)

export type IndustryCard = {
    slug: string;
    name: Localized<string>;
    icon?: ImageRef;
    metaDescription?: Localized<string>;
};

export type IndustriesListJson = {
    items: IndustryCard[];
};
