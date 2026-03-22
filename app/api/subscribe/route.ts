import { NextRequest, NextResponse } from "next/server";

// RFC 5322 simplified — stricter than just checking for "@"
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

const ALLOWED_ORIGINS = [
  "https://stocksync.es",
  "https://www.stocksync.es",
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
].filter(Boolean) as string[];

export async function POST(req: NextRequest) {
  // Enforce Content-Type
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Content-Type inválido" }, { status: 415 });
  }

  // CSRF: validate Origin in production
  if (process.env.NODE_ENV === "production") {
    const origin = req.headers.get("origin");
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 });
    }
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
        const errText = await res.text();
        console.error("[subscribe] Resend API error:", res.status, errText);
      }
    } catch (err) {
      console.error("[subscribe] Error enviando notificación:", err);
      // Don't expose internal errors — silently continue
    }
  }

  return NextResponse.json({ ok: true });
}
