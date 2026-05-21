"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Instala el plugin en WordPress",
    description:
      "Descarga Stock Sync Pro, súbelo en tu panel de WordPress y actívalo con tu licencia. El proceso completo tarda menos de 2 minutos.",
    detail: "Compatible con WordPress 5.8+ y WooCommerce 6.0+",
  },
  {
    number: "02",
    title: "Conecta tu proveedor",
    description:
      "Elige cómo alimentar el stock: sube un Excel, apunta a tu Google Sheets, configura la API de tu ERP o activa el Sync Engine para scraping automatizado.",
    detail: "Excel, Sheets, API, ERP, Scraper integrado",
  },
  {
    number: "03",
    title: "El stock se actualiza solo",
    description:
      "Una vez configurado, Stock Sync Pro trabaja en segundo plano. Cada ciclo actualiza el stock y los precios en tu WooCommerce sin intervención manual.",
    detail: "Frecuencia configurable: 1h, 2h, 4h, 24h",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nodes = entry.target.querySelectorAll(".section-fade-in");
            nodes.forEach((node, i) => {
              setTimeout(() => node.classList.add("visible"), i * 150);
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
      id="como-funciona"
      ref={sectionRef}
      className="py-28 px-4 sm:px-6 relative overflow-hidden border-b border-white/[0.08]"
      aria-labelledby="how-it-works-heading"
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 section-fade-in">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Cómo funciona
          </div>
          <h2
            id="how-it-works-heading"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#f5f5f0]"
          >
            En marcha en{" "}
            <span className="font-serif italic font-normal text-zinc-300">tres pasos.</span>
          </h2>
          <p className="text-zinc-300 text-base max-w-xl mx-auto font-light leading-relaxed">
            Sin código, sin configuraciones complejas. De cero a sincronizando en menos de 5 minutos.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-14 left-[calc(16.66%-20px)] right-[calc(16.66%-20px)] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="section-fade-in flex flex-col items-center lg:items-start text-center lg:text-left relative"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step number (large background) */}
                <div className="step-number mb-1.5" aria-hidden="true">
                  {step.number}
                </div>

                {/* Step indicator */}
                <div className="w-8 h-8 rounded-full border border-white/[0.12] bg-[#14161a] flex items-center justify-center text-[#f5f5f0] text-xs font-bold font-mono mb-5 shadow-lg -mt-6">
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#f5f5f0] mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-zinc-300 text-[13px] leading-relaxed font-light mb-5 max-w-xs">
                  {step.description}
                </p>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 bg-white/[0.01] border border-white/[0.08] rounded-lg px-3.5 py-2 inline-block">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center section-fade-in">
          <p className="text-zinc-400 text-sm font-light">
            ¿Tienes un origen de datos a medida?{" "}
            <a
              href="mailto:hola@wevica.com"
              className="text-[#f5f5f0] hover:text-white underline underline-offset-4 transition-colors font-medium"
            >
              Contacta con soporte y lo conectamos →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
