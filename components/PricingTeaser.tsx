"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const plans = [
  {
    category: "Plan Free",
    name: "Gratis para siempre",
    price: "0",
    period: "siempre",
    description: "Plugin WordPress incluido. Conecta tu propio CSV, API o ERP. Tú gestionas el sync.",
    features: [
      "Plugin WordPress incluido",
      "Hasta 500 productos/mes",
      "1 API key",
      "Sync manual vía REST API",
      "Sin límite de tiempo",
    ],
    ctaLabel: "Empezar gratis →",
    ctaHref: "/descargar",
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
    ctaHref: process.env.NEXT_PUBLIC_LS_SE_STARTER ?? "https://stocksyncpro.lemonsqueezy.com/checkout",
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
      className="py-24 px-4 sm:px-6 relative border-t border-white/[0.08]"
      aria-labelledby="pricing-teaser-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Precios simples
          </div>
          <h2
            id="pricing-teaser-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-4"
          >
            Olvídate de actualizar el stock.{" "}
            <span className="font-serif italic font-normal text-zinc-300">Lo hacemos nosotros.</span>
          </h2>
          <p className="text-zinc-300 text-base max-w-xl mx-auto font-light">
            Plugin + Sync Engine incluidos en cada plan. Empieza gratis, escala cuando lo necesites.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`section-fade-in rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 noise-overlay ${
                plan.highlighted
                  ? "plan-card-popular plan-card-popular:hover"
                  : "glass-card glass-card-hover"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Category label */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold uppercase tracking-widest ${
                  plan.highlighted ? "text-amber-500/90" : "text-zinc-400"
                }`}>
                  {plan.category}
                </span>
                {plan.highlighted && (
                  <span className="popular-badge">Recomendado</span>
                )}
              </div>

              {/* Price */}
              <div>
                <div className="flex items-end gap-1.5 mb-2">
                  <span className="text-4xl font-extrabold text-[#f5f5f0]">
                    €{plan.price}
                  </span>
                  <span className="text-zinc-400 mb-1.5">/{plan.period}</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-light">{plan.description}</p>
              </div>

              <div className="h-px bg-white/[0.08] w-full" aria-hidden="true" />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0 text-emerald-500"
                    >
                      <path
                        d="M3.5 8.5l3 3 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.ctaHref}
                className={`text-center py-3.5 px-5 text-sm font-semibold transition-all duration-300 ${
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
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#f5f5f0] font-medium transition-colors text-sm group"
          >
            Ver todos los planes y comparar características
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transform transition-transform group-hover:translate-x-1 duration-300"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

