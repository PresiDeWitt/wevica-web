import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// RFC 5322 simplified email regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

const ALLOWED_ORIGINS = [
  "https://stocksync.es",
  "https://www.stocksync.es",
  // Only allow Vercel preview URLs with validated format
  ...(process.env.VERCEL_URL && /^[\w-]+\.vercel\.app$/.test(process.env.VERCEL_URL)
    ? [`https://${process.env.VERCEL_URL}`]
    : []),
];

// Rate limiter: max 5 requests per IP per hour
let ratelimit: Ratelimit | null = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "1 h"),
    analytics: true,
    prefix: "subscribe",
  });
}

export async function POST(req: NextRequest) {
  // Rate limiting
  if (ratelimit) {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "anonymous";

    const { success, limit, remaining, reset } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: "Demasiadas peticiones. Inténtalo más tarde." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": String(limit),
            "X-RateLimit-Remaining": String(remaining),
            "X-RateLimit-Reset": String(reset),
            "Retry-After": String(Math.ceil((reset - Date.now()) / 1000)),
          },
        }
      );
    }
  }

  // Enforce Content-Type
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Content-Type inválido" }, { status: 415 });
  }

  // CSRF: validate Origin header always
  const origin = req.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  // Parse body safely
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { email } = (body ?? {}) as Record<string, unknown>;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email requerido" }, { status: 400 });
  }

  // RFC 5321: max 254 characters
  if (email.length > 254) {
    return NextResponse.json({ error: "Email demasiado largo" }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  // Sanitize: strip CR/LF to prevent email header injection
  const safeEmail = email.replace(/[\r\n\t]/g, "").trim();

  const RESEND_KEY = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL ?? "hola@wevica.com";

  if (RESEND_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_KEY}`,
        },
        body: JSON.stringify({
          from: "Stock Sync Pro <noreply@stocksync.es>",
          to: notifyEmail,
          subject: "Nuevo suscriptor — stocksync.es",
          text: `Nuevo suscriptor en stocksync.es\n\nEmail: ${safeEmail}\nFecha: ${new Date().toISOString()}`,
        }),
      });

      if (!res.ok) {
        console.error("[subscribe] Resend API error:", res.status, await res.text());
      }
    } catch (err) {
      console.error("[subscribe] Error enviando notificación:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
