"use client";

import { useEffect, useRef } from "react";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

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
            <span className="badge-dot" aria-hidden="true" />
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

        {/* Case study card */}
        <div className="section-fade-in">
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">

              {/* Stats column */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 border-b lg:border-b-0 lg:border-r border-white/[0.06] p-8 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-[rgba(99,102,241,0.15)] border border-[rgba(99,102,241,0.25)] flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm.75 9H7.25V7h1.5v4zm0-5.5H7.25v-1.5h1.5v1.5z" fill="#6366f1" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest">
                      Caso de éxito
                    </span>
                  </div>

                  <div className="mb-2">
                    <p className="text-2xl font-black text-[#f1f5f9]">X3 Pádel Zone</p>
                    <p className="text-sm text-[#64748b] mt-1">Tienda especializada en material de pádel · España</p>
                  </div>

                  <div className="flex items-center gap-1 mt-3" aria-label="Valoración 5 de 5 estrellas">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.4l-3.6 2.1.7-4L2.2 5.7l4-.6L8 1.5z" fill="#f59e0b" />
                      </svg>
                    ))}
                    <span className="text-xs text-[#64748b] ml-1">5/5</span>
                  </div>
                </div>

                {/* Key results */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <path d="M9 2v14M5 7l4-4 4 4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-2xl font-black text-[#22c55e]">+ventas</span>
                    </div>
                    <p className="text-xs text-[#64748b] pl-6">Stock actualizado = más productos disponibles para vender</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <path d="M9 16V4M5 11l4 4 4-4" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-2xl font-black text-[#6366f1]">−devoluciones</span>
                    </div>
                    <p className="text-xs text-[#64748b] pl-6">Fin a los pedidos de artículos que en realidad estaban agotados</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <circle cx="9" cy="9" r="7" stroke="#8b5cf6" strokeWidth="1.5"/>
                        <path d="M9 6v3.5l2 2" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span className="text-2xl font-black text-[#8b5cf6]">0h manuales</span>
                    </div>
                    <p className="text-xs text-[#64748b] pl-6">El stock se actualiza solo, cada día, sin intervención</p>
                  </div>
                </div>
              </div>

              {/* Testimonial column */}
              <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-between gap-8">
                <div>
                  {/* Quote mark */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="mb-6 opacity-30"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 8C7.58 8 4 11.58 4 16v16h16V16H8c0-2.21 1.79-4 4-4V8zm20 0c-4.42 0-8 3.58-8 8v16h16V16h-12c0-2.21 1.79-4 4-4V8z"
                      fill="#6366f1"
                    />
                  </svg>

                  <blockquote className="text-[#cbd5e1] text-lg sm:text-xl leading-relaxed font-medium">
                    Desde que usamos Stock Sync Pro, el inventario de nuestra tienda
                    refleja el stock real del proveedor cada día de forma automática.
                    Eso nos ha permitido{" "}
                    <strong className="text-[#f1f5f9]">
                      vender muchos más artículos que antes se nos escapaban
                    </strong>{" "}
                    por no tener el stock actualizado, y hemos reducido drásticamente
                    las devoluciones de clientes que compraban productos que en realidad
                    estaban agotados.{" "}
                    <strong className="text-[#f1f5f9]">
                      Es de las mejores decisiones que hemos tomado para nuestra tienda.
                    </strong>
                  </blockquote>
                </div>

                {/* Attribution */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  {/* gap-3 = espacio entre imagen y texto. Sube a gap-4, gap-5, gap-6... */}
                  <div className="flex items-center gap-3">

                    {/* ml-0 = sin margen izquierdo. Sube a ml-1, ml-2, ml-3... para alejar del borde */}
                    {/* p-1 = padding interno (hace la imagen más pequeña visualmente dentro del círculo) */}
                    <img src="https://www.google.com/s2/favicons?domain=x3padelzone.com&sz=64"
                      alt="Logo de X3 Pádel Zone"
                      className="w-10 h-10 rounded-full object-cover bg-white border border-white/[0.08] ml-1 p-1"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#f1f5f9]">Equipo X3 Pádel Zone</p>
                      <p className="text-xs text-[#475569]">x3padelzone.com · WooCommerce</p>
                    </div>
                  </div>

                  {/* Context badge */}
                  <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.07] rounded-full px-3 py-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" aria-hidden="true" />
                    <span className="text-xs text-[#64748b]">Cliente activo</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Second testimonial placeholder — subtle CTA to build trust */}
        <div className="mt-6 section-fade-in">
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
