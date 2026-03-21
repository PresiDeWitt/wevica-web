"use client";

import { useEffect, useRef } from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const features: Feature[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="url(#grad1)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="grad1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Sincronización automática",
    description:
      "Cron jobs ejecutándose 24/7 en segundo plano. Tu catálogo se actualiza sin que muevas un dedo: stock, precios y disponibilidad siempre al día.",
    tags: ["Cron 24/7", "Sin intervención manual", "Alertas de stock"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="url(#grad2)" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="url(#grad2)" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="url(#grad2)" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="url(#grad2)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="grad2" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Multi-proveedor",
    description:
      "Conecta con cualquier fuente de datos: ficheros Excel, Google Sheets, ERPs como SAP o Odoo, APIs REST propias o déjanos ejecutar un scraper dedicado para ti.",
    tags: ["Excel / Sheets", "API REST", "ERP", "Scraper propio"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="url(#grad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="grad3" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Cero configuración",
    description:
      "Instala el plugin en WordPress en menos de 2 minutos. Introduce tu API key, conecta tu proveedor y el sistema empieza a sincronizar. Así de simple.",
    tags: ["Instalación 2 min", "Sin código", "Onboarding guiado"],
  },
];

export default function Features() {
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
      id="caracteristicas"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Características
          </div>
          <h2
            id="features-heading"
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Todo lo que necesitas para{" "}
            <span className="gradient-text">vender más.</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Stock Sync Pro se integra perfectamente con WooCommerce y te da el control total sobre tus datos de inventario.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`glass-card glass-card-hover rounded-2xl p-8 flex flex-col gap-5 section-fade-in`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-lg font-bold text-[#f1f5f9]">{feature.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-[#64748b]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Additional stats row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 section-fade-in">
          {[
            { value: "+1.200", label: "Tiendas activas" },
            { value: "99.9%", label: "Uptime garantizado" },
            { value: "<2 min", label: "Tiempo instalación" },
            { value: "24/7", label: "Sincronización" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-5 text-center"
            >
              <div className="text-2xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[#475569]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
