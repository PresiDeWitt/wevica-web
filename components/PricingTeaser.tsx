"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const plans = [
  {
    category: "Plan Free",
    name: "Gratis para siempre",
    price: "0",
    period: "",
    description: "Plugin WordPress incluido. Conecta tu propio CSV, API o ERP. Tú gestionas el sync.",
    features: [
      "Plugin WordPress incluido",
      "Hasta 500 productos/mes",
      "1 API key",
      "Sync manual vía REST API",
      "Sin límite de tiempo",
    ],
    ctaLabel: "Empezar gratis →",
    ctaHref: "https://wordpress.org/plugins/wevica-stock-sync/",
    highlighted: false,
  },
  {
    category: "Starter — desde €79/mes",
    name: "Plugin + Sync Engine",
    price: "79",
    period: "mes",
    description: "Plugin + Sync Engine gestionado. Nosotros nos ocupamos del scraping 24/7.",
    features: [
      "Plugin WordPress incluido",
      "1 proveedor gestionado",
      "Sync automático cada 2h",
      "Scraping en VPS gestionado",
      "7 días de prueba gratis",
    ],
    ctaLabel: "Activar Starter →",
    ctaHref: process.env.NEXT_PUBLIC_LS_SE_STARTER ?? "https://wevica.lemonsqueezy.com/checkout",
    highlighted: true,
  },
];

export default function PricingTeaser() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nodes = entry.target.querySelectorAll(".section-fade-in");
            nodes.forEach((node, i) => {
              setTimeout(() => node.classList.add("visible"), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative"
      aria-labelledby="pricing-teaser-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 section-fade-in">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Precios
          </div>
          <h2
            id="pricing-teaser-heading"
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Olvídate de actualizar el stock.{" "}
            <span className="gradient-text">Lo hacemos nosotros.</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto">
            Plugin + Sync Engine incluidos en cada plan. Empieza gratis, escala cuando lo necesites.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`section-fade-in rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                plan.highlighted
                  ? "plan-card-popular plan-card-popular:hover"
                  : "glass-card glass-card-hover"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Category label */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest">
                  {plan.category}
                </span>
                {plan.highlighted && (
                  <span className="popular-badge">Recomendado</span>
                )}
              </div>

              {/* Price */}
              <div>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="text-4xl font-black text-[#f1f5f9]">
                    €{plan.price}
                  </span>
                  <span className="text-[#64748b] mb-1.5">/{plan.period}</span>
                </div>
                <p className="text-sm text-[#64748b]">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-[#94a3b8]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      <circle cx="8" cy="8" r="7" fill="rgba(99,102,241,0.15)" />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke="#6366f1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.ctaHref}
                className={`lemonsqueezy-button text-center py-3 px-5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? "btn-primary glow-primary"
                    : "btn-secondary"
                }`}
                aria-label={`${plan.ctaLabel} - desde €${plan.price}/${plan.period}`}
              >
                <span>{plan.ctaLabel}</span>
              </Link>
            </article>
          ))}
        </div>

        {/* See all plans */}
        <div className="text-center section-fade-in">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-[#6366f1] hover:text-[#8b5cf6] font-medium transition-colors text-sm"
          >
            Ver todos los planes y comparar características
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
