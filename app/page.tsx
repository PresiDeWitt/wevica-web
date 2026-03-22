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

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Integrations />
      <TrustBar />
      <Features />
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
