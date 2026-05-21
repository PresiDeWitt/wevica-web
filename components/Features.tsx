"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.round(current * 10) / 10 % 1 === 0 ? Math.floor(current) : Number(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

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
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#71717a" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Sincronización automática",
    description:
      "Cron jobs ejecutándose 24/7 en segundo plano. Tu catálogo se actualiza sin que muevas un dedo: stock, precios y disponibilidad siempre al día.",
    tags: ["Cron 24/7", "Autónomo", "Alertas stock"],
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
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#71717a" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Soporte Multi-proveedor",
    description:
      "Conecta con cualquier fuente de datos: ficheros Excel, Google Sheets, ERPs como SAP o Odoo, APIs REST propias o scraper dedicado de scraping de catálogo.",
    tags: ["Excel / Sheets", "API REST", "Integración ERP"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="url(#grad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="grad3" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#71717a" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Cero configuración",
    description:
      "Instala el plugin en WordPress en menos de 2 minutos. Introduce tu API key, conecta tu proveedor y el sistema empieza a sincronizar. Así de simple.",
    tags: ["WordPress 5.8+", "Sin código", "Plug & Play"],
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
      className="py-28 px-4 sm:px-6 relative border-b border-white/[0.08]"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 section-fade-in">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Características
          </div>
          <h2
            id="features-heading"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#f5f5f0]"
          >
            Todo lo que necesitas para{" "}
            <span className="font-serif italic font-normal text-zinc-300">vender más.</span>
          </h2>
          <p className="text-zinc-300 text-base max-w-xl mx-auto font-light leading-relaxed">
            Stock Sync Pro se integra perfectamente con WooCommerce y te da el control total sobre tus datos de inventario.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col gap-6 section-fade-in"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Icon container */}
              <div className="w-11 h-11 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center shadow-inner">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2.5 flex-1">
                <h3 className="text-base font-bold text-[#f5f5f0]">{feature.title}</h3>
                <p className="text-zinc-300 text-[13px] leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/[0.08] text-zinc-300"
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
            { value: 20, suffix: "+", prefix: "+", label: "Tiendas activas", animated: true },
            { value: 99.9, suffix: "%", label: "Uptime garantizado", animated: true },
            { value: 2, suffix: " min", prefix: "<", label: "Tiempo instalación", animated: true },
            { value: 24, suffix: "/7", label: "Sincronización", animated: false },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/[0.01] border border-white/[0.08] rounded-xl p-5 text-center shadow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl font-mono font-bold text-[#f5f5f0] mb-1">
                {stat.animated ? <AnimatedNumber value={stat.value} suffix={stat.suffix} /> : `${stat.prefix ?? ""}${stat.value}${stat.suffix}`}
              </div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
