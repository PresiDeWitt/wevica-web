import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import Plans from "@/components/pricing/SyncEnginePlans";
import PricingFAQ from "@/components/pricing/PricingFAQ";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Sync Engine + plugin WordPress en un solo plan. Desde gratis hasta €299/mes. Tu stock siempre actualizado aunque tu proveedor no tenga API. 7 días gratis, sin tarjeta.",
  openGraph: {
    title: "Precios — Stock Sync Pro",
    description:
      "Sync Engine + plugin incluidos desde €79/mes. Tu stock siempre actualizado, aunque tu proveedor no tenga API.",
  },
};

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      {/* Page hero */}
      <section
        className="pt-36 pb-10 px-4 sm:px-6 text-center relative overflow-hidden"
        aria-labelledby="pricing-page-heading"
      >
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1)_0%,transparent_65%)] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="badge mb-5 inline-flex" style={{ animation: "heroFadeInUp 0.7s ease 0.05s both" }}>
            <span className="badge-dot" aria-hidden="true" />
            Precios transparentes
          </div>
          <h1
            id="pricing-page-heading"
            className="text-5xl sm:text-6xl font-black tracking-tight mb-5"
            style={{ animation: "heroFadeInUp 0.7s ease 0.15s both" }}
          >
            Simple, directo,{" "}
            <span className="gradient-text">sin sorpresas.</span>
          </h1>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto" style={{ animation: "heroFadeInUp 0.7s ease 0.25s both" }}>
            Elige el plan que encaja con el tamaño de tu tienda. Todos incluyen 7 días de prueba gratis y soporte en español.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: "🔒", text: "Pago seguro con Lemon Squeezy" },
              { icon: "↩️", text: "Reembolso en 7 días" },
              { icon: "🇪🇸", text: "Soporte en español" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-xs text-[#475569] bg-white/[0.03] border border-white/[0.07] rounded-full px-3 py-1.5"
              >
                <span aria-hidden="true">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Plans />
      <PricingFAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
