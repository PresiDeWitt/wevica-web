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
      "Elige cómo quieres alimentar el stock: sube un Excel, apunta a tu Google Sheets, configura la API de tu ERP o activa el Sync Engine para que gestionemos el scraping por ti.",
    detail: "Excel, Google Sheets, API REST, ERP, Scraper gestionado",
  },
  {
    number: "03",
    title: "El stock se actualiza solo",
    description:
      "Una vez configurado, Stock Sync Pro trabaja en segundo plano. Cada ciclo de sincronización actualiza stock y precios en tu WooCommerce sin intervención manual.",
    detail: "Frecuencia configurable: 30 min, 1h, 2h, diaria",
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
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none"
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
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            En marcha en{" "}
            <span className="gradient-text">tres pasos.</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto">
            Sin código, sin configuraciones complejas. De cero a sincronizando en menos de 5 minutos.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-14 left-[calc(16.66%-20px)] right-[calc(16.66%-20px)] h-px bg-gradient-to-r from-transparent via-[rgba(99,102,241,0.3)] to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="section-fade-in flex flex-col items-center lg:items-start text-center lg:text-left relative"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step number (large background) */}
                <div className="step-number mb-2" aria-hidden="true">
                  {step.number}
                </div>

                {/* Step indicator */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white text-sm font-bold mb-5 shadow-[0_0_20px_rgba(99,102,241,0.4)] -mt-8">
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="text-xs text-[#475569] bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2 inline-block">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center section-fade-in">
          <p className="text-[#64748b] text-sm">
            ¿Tienes un proveedor específico?{" "}
            <a
              href="mailto:hola@wevica.com"
              className="text-[#6366f1] hover:text-[#8b5cf6] transition-colors font-medium"
            >
              Cuéntanos y lo integramos →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
