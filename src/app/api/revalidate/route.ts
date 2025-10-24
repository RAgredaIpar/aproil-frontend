import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import crypto from "crypto";

export const runtime = "nodejs";

const ALLOWED_PREFIXES = ["list:", "application:", "technology:", "industry:"];

function safeEqual(a: string, b: string) {
    const aBuf = Buffer.from(a);
    const bBuf = Buffer.from(b);
    return aBuf.length === bBuf.length && crypto.timingSafeEqual(aBuf, bBuf);
}

type BodyUnknown = unknown;

function toStringArray(maybe: unknown): string[] {
    if (!Array.isArray(maybe)) return [];
    return maybe.filter((t): t is string => typeof t === "string");
}

export async function POST(req: NextRequest) {
    const auth = req.headers.get("authorization") || "";
    const secret = process.env.REVALIDATE_SECRET || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";

    if (!secret || !safeEqual(token, secret)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let body: BodyUnknown;
    try {
        body = await req.json();
    } catch {
        body = undefined;
    }

    // === Misma extracción de tags que tu versión original ===
    let tags: string[] = [];
    if (typeof body === "object" && body !== null) {
        const o = body as Record<string, unknown>;
        if (Array.isArray(o.tags)) {
            tags = toStringArray(o.tags);
        } else if (typeof o.tag === "string") {
            tags = [o.tag];
        }
    }

    tags = [
        ...new Set(
            tags.filter(
                (t) =>
                    typeof t === "string" &&
                    ALLOWED_PREFIXES.some((p) => t.startsWith(p))
            )
        ),
    ];

    if (tags.length === 0) {
        return NextResponse.json({
            status: "ok",
            tagsRevalidated: [],
            ignored: "no-valid-tags",
        });
    }

    for (const tag of tags) revalidateTag(tag);

    return NextResponse.json({ status: "ok", tagsRevalidated: tags });
}

export async function GET() {
    return NextResponse.json({ status: "ready" });
}
