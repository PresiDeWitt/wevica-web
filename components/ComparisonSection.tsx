"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ComparisonSection() {
  const [hours, setHours] = useState(3);
  const sectionRef = useRef<HTMLElement>(null);

  const annualCost = hours * 15 * 52;
  const pluginCost = 79 * 12; // €79/mes × 12 = €948/año
  const savings = annualCost - pluginCost;
  const paybackWeeks = Math.max(1, Math.round(pluginCost / (hours * 15 * 4.33)));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".section-fade-in").forEach((node, i) =>
              setTimeout(() => node.classList.add("visible"), i * 100)
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
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 section-fade-in">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            ROI inmediato
          </div>
          <h2
            id="comparison-heading"
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            ¿Cuánto te cuesta{" "}
            <span className="gradient-text">hacerlo manual?</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto">
            Mueve el slider y calcula lo que pierdes cada año frente a lo que cuesta automatizarlo.
          </p>
        </div>

        {/* Calculator */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 mb-6 section-fade-in">
          <label className="block text-[#f1f5f9] font-semibold text-base mb-6">
            Horas semanales dedicadas a actualizar stock manualmente:
            <span className="ml-2 text-[#6366f1]">{hours}h/semana</span>
          </label>

          <input
            type="range"
            min={1}
            max={20}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer mb-2"
            style={{
              background: `linear-gradient(to right, #6366f1 ${((hours - 1) / 19) * 100}%, rgba(255,255,255,0.08) ${((hours - 1) / 19) * 100}%)`,
            }}
            aria-label="Horas semanales de trabajo manual"
          />
          <div className="flex justify-between text-xs text-[#475569] mb-8">
            <span>1h</span><span>5h</span><span>10h</span><span>15h</span><span>20h</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-red-500/[0.06] border border-red-500/20 rounded-2xl p-5 text-center">
              <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-2">Coste manual / año</p>
              <p className="text-3xl font-black text-red-400">€{annualCost.toLocaleString("es-ES")}</p>
              <p className="text-xs text-[#64748b] mt-1">{hours}h × €15/h × 52 semanas</p>
            </div>

            <div className="bg-[rgba(99,102,241,0.06)] border border-[rgba(99,102,241,0.2)] rounded-2xl p-5 text-center">
              <p className="text-[10px] font-bold text-[#6366f1] uppercase tracking-widest mb-2">Stock Sync Pro / año</p>
              <p className="text-3xl font-black text-[#6366f1]">€948</p>
              <p className="text-xs text-[#64748b] mt-1">€79/mes · todo incluido</p>
            </div>

            <div className="bg-green-500/[0.06] border border-green-500/20 rounded-2xl p-5 text-center">
              <p className="text-[10px] font-bold text-green-400 uppercase tracking-widest mb-2">Tu ahorro anual</p>
              <p className="text-3xl font-black text-green-400">€{savings.toLocaleString("es-ES")}</p>
              <p className="text-xs text-[#64748b] mt-1">
                ROI en {paybackWeeks <= 1 ? "menos de 1 semana" : `${paybackWeeks} semanas`}
              </p>
            </div>
          </div>
        </div>

        {/* Before / After comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 section-fade-in">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-sm font-bold text-[#64748b] mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-[10px] text-red-400">✕</span>
              Sin automatizar
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Horas semanales perdidas actualizando stock",
                "Errores humanos → pedidos cancelados",
                "Devoluciones por stock desactualizado",
                "Ventas perdidas de artículos sin disponibilidad",
                "Imposible escalar sin contratar personal",
                "Sin alertas cuando algo falla",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#64748b]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="rgba(239,68,68,0.12)" />
                    <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 border border-[rgba(99,102,241,0.25)]">
            <h3 className="text-sm font-bold text-[#f1f5f9] mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] text-green-400">✓</span>
              Con Stock Sync Pro
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "0h manuales — el sistema trabaja solo",
                "Stock actualizado cada hora, siempre correcto",
                "Sin devoluciones por artículos agotados",
                "Catálogo siempre al día → más ventas",
                "Escala a miles de productos sin esfuerzo",
                "Alertas por email si algo falla",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#94a3b8]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="rgba(34,197,94,0.12)" />
                    <path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 section-fade-in">
          <Link
            href="https://wevica.lemonsqueezy.com/buy/16216ef2-9646-4aca-9c04-8ea7fb001cd5"
            className="lemonsqueezy-button btn-primary px-8 py-4 text-base inline-flex items-center gap-2 glow-primary"
          >
            <span>Empezar a ahorrar — 7 días gratis</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p className="text-xs text-[#475569] mt-3">Sin tarjeta de crédito · Cancela cuando quieras</p>
        </div>
      </div>
    </section>
  );
}
