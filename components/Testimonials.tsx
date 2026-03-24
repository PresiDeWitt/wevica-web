"use client";

import { useEffect, useRef, useState } from "react";


const testimonials = [
  {
    id: "x3-padel",
    company: "X3 Pádel Zone",
    domain: "x3padelzone.com",
    description: "Tienda especializada en material de pádel · España",
    gradient: "from-[#6366f1]/10 to-[#8b5cf6]/10",
    stats: [
      { label: "+ventas",       color: "text-[#22c55e]", desc: "Stock actualizado = más productos disponibles para vender" },
      { label: "−devoluciones", color: "text-[#6366f1]", desc: "Fin a los pedidos de artículos que en realidad estaban agotados" },
      { label: "0h manuales",   color: "text-[#8b5cf6]", desc: "El stock se actualiza solo, cada día, sin intervención" },
    ],
    quote: "Desde que usamos Stock Sync Pro, el inventario de nuestra tienda refleja el stock real del proveedor cada día de forma automática. Eso nos ha permitido vender muchos más artículos que antes se nos escapaban por no tener el stock actualizado, y hemos reducido drásticamente las devoluciones de clientes que compraban productos que en realidad estaban agotados. Es de las mejores decisiones que hemos tomado para nuestra tienda.",
    quoteColor: "#6366f1",
    badgeColor: "bg-[#22c55e]",
    borderColor: "#6366f1"
  },
  {
    id: "casa-picota",
    company: "Casa Picota",
    domain: "casapicota.com",
    description: "Tienda de alimentos y productos gourmet · España",
    gradient: "from-[#ec4899]/10 to-[#f43f5e]/10",
    stats: [
      { label: "+88% rotación", color: "text-[#10b981]", desc: "Precios y ofertas sincronizados en tiempo real con proveedores" },
      { label: "−pérdidas",     color: "text-[#ec4899]", desc: "Adiós a ventas de productos descontinuados" },
      { label: "8h/semana",     color: "text-[#f43f5e]", desc: "Tiempo que ahorraban manualmente actualizando catálogo" },
    ],
    quote: "Gestionábamos el inventario de forma manual, lo que nos llevaba horas cada semana y generaba errores constantes. Con Stock Sync Pro tenemos precios y stock sincronizados automáticamente. Esto nos ha permitido aumentar significativamente nuestra rotación y reducir pérdidas por productos descontinuados. La mejor inversión en automatización que hemos hecho.",
    quoteColor: "#ec4899",
    badgeColor: "bg-[#10b981]",
    borderColor: "#6366f1",
    iconBorderColor: "#c7511e",
    iconBgColor: "#c7511e",
  },
];

const CARD_RATIO = 0.80; // card width as % of container
const GAP_RATIO  = 0.06; // gap between card edges as % of container

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="glass-card rounded-3xl overflow-hidden h-full"
      style={t.borderColor ? { borderColor: t.borderColor } : undefined}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
        {/* Left: stats */}
        <div className={`lg:col-span-2 bg-gradient-to-br ${t.gradient} border-b lg:border-b-0 lg:border-r border-white/[0.06] p-8 flex flex-col justify-between gap-6`}>
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[rgba(99,102,241,0.15)] border border-[rgba(99,102,241,0.25)] flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm.75 9H7.25V7h1.5v4zm0-5.5H7.25v-1.5h1.5v1.5z" fill="#6366f1"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest">Caso de éxito</span>
            </div>
            <p className="text-2xl font-black text-[#f1f5f9]">{t.company}</p>
            <p className="text-sm text-[#64748b] mt-1">{t.description}</p>
            <div className="flex items-center gap-1 mt-3" aria-label="Valoración 5 de 5 estrellas">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.4l-3.6 2.1.7-4L2.2 5.7l4-.6L8 1.5z" fill="#f59e0b"/>
                </svg>
              ))}
              <span className="text-xs text-[#64748b] ml-1">5/5</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {t.stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M9 2v14M5 7l4-4 4 4"
                      stroke={s.color.replace("text-[", "").replace("]", "")}
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                  <span className={`text-2xl font-black ${s.color}`}>{s.label}</span>
                </div>
                <p className="text-xs text-[#64748b] pl-6">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: quote */}
        <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-between gap-6">
          <div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-5 opacity-30" aria-hidden="true">
              <path d="M12 8C7.58 8 4 11.58 4 16v16h16V16H8c0-2.21 1.79-4 4-4V8zm20 0c-4.42 0-8 3.58-8 8v16h16V16h-12c0-2.21 1.79-4 4-4V8z" fill={t.quoteColor}/>
            </svg>
            <blockquote className="text-[#cbd5e1] text-base sm:text-lg leading-relaxed font-medium">
              {t.quote}
            </blockquote>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <img
                src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=64`}
                alt={`Logo de ${t.company}`}
                className="w-10 h-10 rounded-full object-cover border p-1"
                style={{
                  borderColor: t.iconBorderColor ?? "rgba(255,255,255,0.08)",
                  backgroundColor: t.iconBgColor ?? "#ffffff",
                }}
              />
              <div>
                <p className="text-sm font-semibold text-[#f1f5f9]">{t.company}</p>
                <p className="text-xs text-[#475569]">{t.domain} · WooCommerce</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.07] rounded-full px-3 py-1.5">
              <div className={`w-2 h-2 rounded-full ${t.badgeColor} animate-pulse`} aria-hidden="true"/>
              <span className="text-xs text-[#64748b]">Cliente activo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef   = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [cw, setCw] = useState(860);

  // measure container width
  useEffect(() => {
    const update = () => {
      if (containerRef.current) setCw(containerRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".section-fade-in")
              .forEach((node, i) =>
                setTimeout(() => node.classList.add("visible"), i * 120)
              );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % testimonials.length);
    }, 15000); // 15 segundos por testimonio
    return () => clearInterval(timer);
  }, [current]); // Dependemos de "current" para reiniciar el contador 15s si el usuario hace click manualmente

  const total  = testimonials.length;
  const cardW  = cw * CARD_RATIO;
  const step   = cw * (CARD_RATIO + GAP_RATIO);
  const cardLeft = (cw - cardW) / 2;

  const goNext = () => setCurrent((i) => (i + 1) % total);
  const goPrev = () => setCurrent((i) => (i - 1 + total) % total);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative"
      aria-labelledby="testimonials-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 section-fade-in">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true"/>
            Casos reales
          </div>
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Tiendas que ya{" "}
            <span className="gradient-text">venden más.</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto">
            No te lo decimos nosotros. Te lo dice quien lo usa cada día.
          </p>
        </div>

        {/* Carousel */}
        <div className="section-fade-in">
          {/* Track */}
          <div
            ref={containerRef}
            className="relative overflow-hidden"
            style={{ height: 520 }}
          >
            {testimonials.map((t, idx) => {
              // circular offset: always use the shortest path around the circle
              let offset = idx - current;
              const half = total / 2;
              if (offset >  half) offset -= total;
              if (offset < -half) offset += total;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              return (
                <div
                  key={t.id}
                  onClick={() => {
                    if (!isActive) setCurrent(idx);
                  }}
                  className={`absolute top-0 bottom-0 ${!isActive ? "cursor-pointer" : ""}`}
                  style={{
                    width: cardW,
                    left: cardLeft,
                    transform: `translateX(${offset * step}px) scale(${isActive ? 1 : 0.95})`,
                    transformOrigin: offset > 0 ? "left center" : offset < 0 ? "right center" : "center",
                    transition: "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1), opacity 1200ms ease",
                    opacity: isVisible ? (isActive ? 1 : 0.45) : 0,
                    zIndex: isActive ? 10 : 5,
                    pointerEvents: isVisible ? "auto" : "none", // Permite clickar en las cartas visibles
                  }}
                >
                  <TestimonialCard t={t} />
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  idx === current ? "w-6 bg-[#6366f1]" : "w-2 bg-white/[0.2]"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 section-fade-in">
          <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-dashed">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="7" r="3" stroke="#475569" strokeWidth="1.5"/>
                  <path d="M3 15c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[#94a3b8]">¿Tu tienda podría ser la siguiente historia de éxito?</p>
                <p className="text-xs text-[#475569]">7 días gratis · Sin tarjeta · Cancela cuando quieras</p>
              </div>
            </div>
            <a
              href="https://wevica.lemonsqueezy.com/buy/16216ef2-9646-4aca-9c04-8ea7fb001cd5"
              className="lemonsqueezy-button btn-secondary px-5 py-2.5 text-sm font-medium whitespace-nowrap shrink-0"
            >
              Empezar prueba gratis →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
