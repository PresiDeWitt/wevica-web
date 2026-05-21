import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import ComparisonSection from "@/components/ComparisonSection";
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
    <section className="py-12 px-4 sm:px-6 border-y border-white/[0.08]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-base font-bold font-mono text-[#f5f5f0]">{s.value}</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">{s.label}</span>
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
        <div className="relative overflow-hidden rounded-2xl bg-white/[0.01] border border-white/[0.08] p-8 sm:p-12 text-center shadow-xl noise-overlay">
          <div className="relative z-10">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">
              Ahorra tiempo y dinero
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] mb-4">
              Deja de actualizar el stock{" "}
              <span className="font-serif italic font-normal text-zinc-300">a mano.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
              Si actualizas tu catálogo manualmente, estás perdiendo más de <strong className="text-[#f5f5f0] font-semibold">€1.500 al año</strong> en horas de trabajo. Stock Sync Pro lo hace solo — desde €79/mes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="btn-primary px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300"
              >
                Ver precios
              </Link>
              <Link
                href="/descargar"
                className="btn-secondary px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300"
              >
                Probar gratis
              </Link>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/[0.01] rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/[0.01] rounded-full blur-3xl" />
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
      <ComparisonSection />
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
