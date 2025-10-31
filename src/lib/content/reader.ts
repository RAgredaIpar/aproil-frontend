import type { Locale, Localized } from "../../types/domain";

const CONTENT_BASE = process.env.NEXT_PUBLIC_CONTENT_BASE!;
if (!CONTENT_BASE) {
    throw new Error("Missing NEXT_PUBLIC_CONTENT_BASE env");
}

export async function fetchJson<T>(path: string, tag: string): Promise<T> {
    const url = `${CONTENT_BASE}/${path}`;
    const res = await fetch(url, { next: { tags: [tag] } });
    if (!res.ok) {
        // Para que la página pueda decidir 404, devolvemos un error claro
        throw new Error(`Fetch failed ${res.status} for ${url}`);
    }
    return await res.json() as Promise<T>;
}

// Fallback genérico: devuelve pair[locale] o pair.es
export function pickLocalized<T>(pair: Localized<T>, locale: Locale): T {
    return (pair?.[locale] ?? pair?.es)!;
}

// Para estructuras locales dentro de Product (name/shortDescription)
export function pickProductLocale<T>(
    obj: { es: T } & Partial<Record<Locale, T>>,
    locale: Locale
): T {
    return (obj?.[locale] ?? obj.es)!;
}
