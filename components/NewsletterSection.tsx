"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 border-t border-white/[0.02]">
      <div className="max-w-xl mx-auto text-center">
        <div className="badge mb-4 inline-flex">
          <span className="badge-dot" aria-hidden="true" />
          Boletín
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f5f5f0] mb-3">
          Recursos para{" "}
          <span className="font-serif italic font-normal text-zinc-400">tiendas WooCommerce.</span>
        </h2>
        <p className="text-zinc-400 text-sm mb-7 font-light">
          Sin spam. Solo artículos y actualizaciones del plugin cuando haya algo relevante.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 text-emerald-400 font-medium text-sm">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-emerald-500">
              <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-light">¡Apuntado! Te avisaremos cuando haya novedades.</span>
          </div>
        ) : (
          <form onSubmit={submit} className="flex gap-2.5 max-w-md mx-auto" noValidate>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              aria-label="Tu email"
              className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-2.5 text-sm text-[#f5f5f0] placeholder-zinc-600 focus:outline-none focus:border-white/[0.2] focus:ring-1 focus:ring-white/[0.1] transition-all duration-300"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary px-6 py-2.5 text-sm font-semibold rounded-full disabled:opacity-60 shrink-0"
            >
              {status === "loading" ? "..." : "Suscribirme"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-xs mt-3 font-light">
            Error al suscribirse. Inténtalo de nuevo.
          </p>
        )}

        <p className="text-zinc-400 text-xs mt-5 font-light tracking-wide">
          Sin spam · Cancela cuando quieras
        </p>
      </div>
    </section>
  );
}

