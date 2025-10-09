const BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;

type GetOpts = { locale: string; revalidate?: number | false };

export async function apiGet<T>(path: string, { locale}: GetOpts): Promise<T> {
    const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
    const joined = path.startsWith("/") ? path.slice(1) : path;
    const url = new URL(`${base}/${joined}`);

    if (!url.searchParams.has("lang")) url.searchParams.set("lang", locale);

    const resp = await fetch(url.toString(), {
        method: "GET",
        cache: "no-store",
    });

    if (!resp.ok) {
        let detail: any = undefined;
        try { detail = await resp.json(); } catch {}
        throw new Error(`API ${resp.status} ${resp.statusText}: ${detail?.message ?? "Error"}`);
    }
    return await resp.json() as Promise<T>;
}
