import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const RESEND_KEY = process.env.RESEND_API_KEY;

    if (RESEND_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_KEY}`,
        },
        body: JSON.stringify({
          from: "Stock Sync Pro <noreply@stocksync.es>",
          to: "hola@wevica.com",
          subject: `Nuevo suscriptor: ${email}`,
          text: `Nuevo suscriptor en stocksync.es\n\nEmail: ${email}\nFecha: ${new Date().toISOString()}`,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
