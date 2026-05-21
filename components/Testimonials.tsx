"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: "x3-padel",
    company: "X3 Pádel Zone",
    domain: "x3padelzone.com",
    description: "Tienda especializada en material de pádel · España",
    gradient: "from-white/[0.01] to-white/[0.03]",
    stats: [
      { label: "+ventas",       color: "text-[#10b981]", desc: "Stock actualizado = más productos disponibles para vender" },
      { label: "−devoluciones", color: "text-[#a1a1aa]", desc: "Fin a los pedidos de artículos que en realidad estaban agotados" },
      { label: "0h manuales",   color: "text-[#f5f5f0]", desc: "El stock se actualiza solo, cada día, sin intervención" },
    ],
    quote: "Desde que usamos Stock Sync Pro, el inventario de nuestra tienda refleja el stock real del proveedor cada día de forma automática. Eso nos ha permitido vender muchos más artículos que antes se nos escapaban por no tener el stock actualizado, y hemos reducido drásticamente las devoluciones de clientes que compraban productos que en realidad estaban agotados. Es de las mejores decisiones que hemos tomado para nuestra tienda.",
    quoteColor: "#f5f5f0",
    badgeColor: "bg-[#10b981]",
    borderColor: "rgba(255,255,255,0.06)"
  },
  {
    id: "casa-picota",
    company: "Casa Picota",
    domain: "casapicota.com",
    description: "Tienda de alimentos y productos gourmet · España",
    gradient: "from-white/[0.01] to-white/[0.03]",
    stats: [
      { label: "+3.269 SKUs",   color: "text-[#f5f5f0]", desc: "Productos con stock actualizado automáticamente cada día" },
      { label: "−pérdidas",     color: "text-[#10b981]", desc: "Adiós a ventas de productos descontinuados" },
      { label: "8h/semana",     color: "text-[#a1a1aa]", desc: "Tiempo que ahorraban actualizando el catálogo a mano" },
    ],
    quote: "Gestionábamos el inventario de forma manual, lo que nos llevaba horas cada semana y generaba errores constantes. Con Stock Sync Pro tenemos precios y stock sincronizados automáticamente. Esto nos ha permitido aumentar significativamente nuestra rotación y reducir pérdidas por productos descontinuados. La mejor inversión en automatización que hemos hecho.",
    quoteColor: "#f5f5f0",
    badgeColor: "bg-[#10b981]",
    borderColor: "rgba(255,255,255,0.06)",
    iconBorderColor: "rgba(255,255,255,0.1)",
    iconBgColor: "#ffffff",
  },
];

const CARD_RATIO = 0.85; // card width as % of container
const GAP_RATIO  = 0.04; // gap between card edges as % of container

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="glass-card rounded-3xl overflow-hidden h-full border border-white/[0.11] shadow-2xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
        {/* Left: stats */}
        <div className={`lg:col-span-2 bg-gradient-to-br ${t.gradient} border-b lg:border-b-0 lg:border-r border-white/[0.08] p-8 flex flex-col justify-between gap-6`}>
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm.75 9H7.25V7h1.5v4zm0-5.5H7.25v-1.5h1.5v1.5z" fill="#f5f5f0"/>
                </svg>
              </div>
              <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Caso de éxito</span>
            </div>
            <p className="text-xl font-bold text-[#f5f5f0] tracking-tight">{t.company}</p>
            <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">{t.description}</p>
            <div className="flex items-center gap-1 mt-3" aria-label="Valoración 5 de 5 estrellas">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.4l-3.6 2.1.7-4L2.2 5.7l4-.6L8 1.5z" fill="#d97706"/>
                </svg>
              ))}
              <span className="text-[10px] font-bold font-mono text-zinc-400 ml-1.5">5.0</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {t.stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="shrink-0" aria-hidden="true">
                    <path
                      d="M9 2v14M5 7l4-4 4 4"
                      stroke="#f5f5f0"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                  <span className={`text-lg font-mono font-bold ${s.color}`}>{s.label}</span>
                </div>
                <p className="text-[11px] text-zinc-400 font-light pl-6 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: quote */}
        <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-between gap-6">
          <div>
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="mb-5 opacity-10" aria-hidden="true">
              <path d="M12 8C7.58 8 4 11.58 4 16v16h16V16H8c0-2.21 1.79-4 4-4V8zm20 0c-4.42 0-8 3.58-8 8v16h16V16h-12c0-2.21 1.79-4 4-4V8z" fill={t.quoteColor}/>
            </svg>
            <blockquote className="text-zinc-200 text-sm sm:text-base leading-relaxed font-light">
              "{t.quote}"
            </blockquote>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <img
                src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=64`}
                alt={`Logo de ${t.company}`}
                className="w-8 h-8 rounded-full object-cover border border-white/[0.06] p-1 bg-white"
              />
              <div>
                <p className="text-xs font-semibold text-[#f5f5f0]">{t.company}</p>
                <p className="text-[10px] text-zinc-400 font-mono">{t.domain} · WooCommerce</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.01] border border-white/[0.08] rounded-full px-3 py-1">
              <div className={`w-1.5 h-1.5 rounded-full ${t.badgeColor} animate-pulse`} aria-hidden="true"/>
              <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Cliente activo</span>
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
    }, 12000);
    return () => clearInterval(timer);
  }, [current]);

  const total  = testimonials.length;
  const cardW  = cw * CARD_RATIO;
  const step   = cw * (CARD_RATIO + GAP_RATIO);
  const cardLeft = (cw - cardW) / 2;

  return (
    <section
      ref={sectionRef}
      className="py-28 px-4 sm:px-6 relative border-b border-white/[0.08]"
      aria-labelledby="testimonials-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true"/>
            Casos reales
          </div>
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#f5f5f0]"
          >
            Tiendas que ya{" "}
            <span className="font-serif italic font-normal text-zinc-300">venden más.</span>
          </h2>
          <p className="text-zinc-300 text-base max-w-xl mx-auto font-light leading-relaxed">
            No te lo decimos nosotros. Te lo dice quien lo usa cada día en sus WooCommerce.
          </p>
        </div>

        {/* Carousel */}
        <div className="section-fade-in">
          {/* Track */}
          <div
            ref={containerRef}
            className="relative overflow-hidden"
            style={{ height: 460 }}
          >
            {testimonials.map((t, idx) => {
              // circular offset
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
                    transform: `translateX(${offset * step}px) scale(${isActive ? 1 : 0.96})`,
                    transformOrigin: offset > 0 ? "left center" : offset < 0 ? "right center" : "center",
                    transition: "transform 1000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 1000ms ease",
                    opacity: isVisible ? (isActive ? 1 : 0.35) : 0,
                    zIndex: isActive ? 10 : 5,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                >
                  <TestimonialCard t={t} />
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  idx === current ? "w-6 bg-[#f5f5f0]" : "w-1.5 bg-white/[0.1]"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 section-fade-in">
          <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-dashed border-white/[0.08] bg-transparent shadow-none">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/[0.08] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="7" r="3" stroke="#a1a1aa" strokeWidth="1.5"/>
                  <path d="M3 15c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-zinc-200">¿Tu tienda podría ser la siguiente historia de éxito?</p>
                <p className="text-[10px] text-zinc-400 font-medium uppercase mt-0.5">7 días gratis · Sin tarjeta · Configurado en minutos</p>
              </div>
            </div>
            <a
              href="/pricing"
              className="btn-secondary px-5 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-300"
            >
              Empezar prueba gratis →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
