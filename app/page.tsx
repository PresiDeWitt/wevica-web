import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import PricingTeaser from "@/components/PricingTeaser";
import LandingFAQ from "@/components/LandingFAQ";
import CTABanner from "@/components/CTABanner";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import Link from "next/link";

function TrustBar() {
  const stats = [
    { value: "7 días", label: "de prueba gratis" },
    { value: "Soporte", label: "en español" },
    { value: "Reembolso", label: "garantizado 7 días" },
    { value: "Sin", label: "tarjeta requerida" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 border-y border-white/[0.05]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-lg font-bold text-[#f1f5f9]">{s.value}</span>
              <span className="text-sm text-[#475569]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SavingsBanner() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#6366f1]/10 via-[#8b5cf6]/10 to-[#6366f1]/10 border border-[rgba(99,102,241,0.2)] p-8 sm:p-10 text-center">
          <div className="relative z-10">
            <p className="text-[10px] font-bold text-[#6366f1] uppercase tracking-widest mb-3">
              Ahorra tiempo y dinero
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#f1f5f9] mb-4">
              Deja de actualizar el stock a mano.
            </h2>
            <p className="text-[#94a3b8] text-base max-w-xl mx-auto mb-8">
              Si actualizas tu catálogo manualmente, estás perdiendo más de <strong className="text-[#f1f5f9]">€1.500 al año</strong> en horas de trabajo. Stock Sync Pro lo hace solo — desde €79/mes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="px-6 py-3 rounded-xl bg-[#6366f1] hover:bg-[#5558e3] text-white text-sm font-semibold transition-colors"
              >
                Ver precios →
              </Link>
              <Link
                href="/descargar"
                className="px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-[#94a3b8] text-sm font-medium transition-colors"
              >
                Probar gratis
              </Link>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6366f1]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8b5cf6]/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <Integrations />
      <TrustBar />
      <Features />
      <SavingsBanner />
      <HowItWorks />
      <Testimonials />
      <PricingTeaser />
      <LandingFAQ />
      <CTABanner />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
