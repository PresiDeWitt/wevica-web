import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Descargar Stock Sync Pro",
  description: "Descarga gratis el plugin WordPress Stock Sync Pro. Sincroniza stock desde cualquier fuente externa vía REST API.",
};

const VERSION = "4.9.2";

const steps = [
  "Ve a tu WordPress Admin → Plugins → Añadir nuevo plugin",
  'Haz clic en "Subir plugin" (arriba a la derecha)',
  "Selecciona el ZIP descargado y haz clic en Instalar",
  "Activa el plugin cuando termine la instalación",
];

const requirements = [
  { label: "WordPress", value: "5.8 o superior" },
  { label: "PHP", value: "7.4 o superior" },
  { label: "WooCommerce", value: "6.0 o superior" },
];

export default function DescargarPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-36 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1)_0%,transparent_65%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="badge mb-5 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Versión {VERSION} · Gratis
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
            Descarga{" "}
            <span className="gradient-text">Stock Sync Pro</span>
          </h1>

          <p className="text-[#64748b] text-lg max-w-xl mx-auto mb-10">
            Plugin WordPress gratuito para sincronizar stock desde cualquier fuente externa vía REST API.
          </p>

          <a
            href="/stock-sync-pro.zip"
            download
            className="btn-primary glow-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 2v10m0 0l-3-3m3 3l3-3M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Descargar v{VERSION} (.zip)
          </a>

          <p className="mt-3 text-xs text-[#475569]">115 KB · GPL-2.0 · Sin cuenta necesaria</p>
        </div>

        {/* Install steps */}
        <div className="relative z-10 max-w-2xl mx-auto mt-16">
          <h2 className="text-xl font-bold text-[#f1f5f9] mb-6 text-center">Cómo instalar</h2>
          <ol className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <li key={i} className="glass-card rounded-xl px-5 py-4 flex items-start gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-[#94a3b8] leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Requirements */}
        <div className="relative z-10 max-w-2xl mx-auto mt-10">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-[#f1f5f9] mb-4">Requisitos</h3>
            <ul className="flex flex-col gap-2">
              {requirements.map((r) => (
                <li key={r.label} className="flex justify-between text-sm">
                  <span className="text-[#64748b]">{r.label}</span>
                  <span className="text-[#94a3b8] font-medium">{r.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Upgrade CTA */}
        <div className="relative z-10 max-w-2xl mx-auto mt-8 text-center">
          <p className="text-sm text-[#475569]">
            ¿Quieres que lo gestionemos todo por ti?{" "}
            <a href="/pricing" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Ver planes con Sync Engine incluido →
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
