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
    <section className="py-16 px-4 sm:px-6 border-t border-white/[0.05]">
      <div className="max-w-xl mx-auto text-center">
        <div className="badge mb-4 inline-flex">
          <span className="badge-dot" aria-hidden="true" />
          Newsletter
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
          Recursos para{" "}
          <span className="gradient-text">tiendas WooCommerce</span>
        </h2>
        <p className="text-[#64748b] text-sm mb-7">
          Sin spam. Solo artículos y actualizaciones del plugin cuando haya algo relevante.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 text-green-400 font-medium text-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" fill="rgba(34,197,94,0.15)" />
              <path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            ¡Apuntado! Te avisaremos cuando haya novedades.
          </div>
        ) : (
          <form onSubmit={submit} className="flex gap-2 max-w-sm mx-auto" noValidate>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              aria-label="Tu email"
              className="flex-1 bg-white/[0.05] border border-white/[0.1] rounded-lg px-4 py-2.5 text-sm text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:ring-1 focus:ring-[#6366f1] transition"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary px-5 py-2.5 text-sm font-medium rounded-lg disabled:opacity-60"
            >
              {status === "loading" ? "..." : "Suscribirme"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-xs mt-3">
            Error al suscribirse. Inténtalo de nuevo.
          </p>
        )}

        <p className="text-[#334155] text-xs mt-4">
          Sin spam · Cancela cuando quieras
        </p>
      </div>
    </section>
  );
}
