export const LIST_TAGS = {
    applications: "list:applications",
    technologies: "list:technologies",
    industries: "list:industries",
} as const;

export const technologyTag = (slug: string) => `technology:${slug}`;
export const applicationTag = (slug: string) => `application:${slug}`;
export const industryTag    = (slug: string) => `industry:${slug}`;
