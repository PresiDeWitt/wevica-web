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
      className="py-28 px-4 sm:px-6 relative border-b border-white/[0.08]"
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Calculadora de Ahorro
          </div>
          <h2
            id="comparison-heading"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#f5f5f0]"
          >
            ¿Cuánto te cuesta{" "}
            <span className="font-serif italic font-normal text-zinc-300">hacerlo manual?</span>
          </h2>
          <p className="text-zinc-300 text-base max-w-xl mx-auto font-light leading-relaxed">
            Mueve el control deslizante y calcula lo que pierdes cada año frente al coste de automatizarlo.
          </p>
        </div>

        {/* Calculator */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 mb-8 section-fade-in">
          <label className="block text-[#f5f5f0] font-bold text-sm uppercase tracking-wider mb-6">
            Horas semanales dedicadas a actualizar stock manualmente:
            <span className="ml-2.5 text-[#f5f5f0] font-mono bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-md text-xs">{hours}h/semana</span>
          </label>

          <input
            type="range"
            min={1}
            max={20}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer mb-2 accent-white bg-white/[0.05]"
            style={{
              background: `linear-gradient(to right, #f5f5f0 ${((hours - 1) / 19) * 100}%, rgba(255,255,255,0.05) ${((hours - 1) / 19) * 100}%)`,
            }}
            aria-label="Horas semanales de trabajo manual"
          />
          <div className="flex justify-between text-[10px] font-bold font-mono text-zinc-300 mb-10">
            <span>1H</span><span>5H</span><span>10H</span><span>15H</span><span>20H</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-red-500/[0.01] border border-red-500/10 rounded-2xl p-6 text-center">
              <p className="text-[9px] font-bold text-red-400 uppercase tracking-widest mb-2.5">Coste manual estimado / año</p>
              <p className="text-3.5xl font-mono font-bold text-red-400">€{annualCost.toLocaleString("es-ES")}</p>
              <p className="text-[10px] font-medium text-zinc-400 mt-2">{hours}h × €15/h × 52 semanas</p>
            </div>

            <div className="bg-white/[0.01] border border-white/[0.11] rounded-2xl p-6 text-center">
              <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-2.5">Coste del plugin / año</p>
              <p className="text-3.5xl font-mono font-bold text-[#f5f5f0]">€948</p>
              <p className="text-[10px] font-medium text-zinc-400 mt-2">€79/mes · plan todo incluido</p>
            </div>

            <div className="bg-[#10b981]/[0.01] border border-[#10b981]/15 rounded-2xl p-6 text-center">
              <p className="text-[9px] font-bold text-[#10b981] uppercase tracking-widest mb-2.5">Tu ahorro neto anual</p>
              <p className="text-3.5xl font-mono font-bold text-[#10b981]">€{savings.toLocaleString("es-ES")}</p>
              <p className="text-[10px] font-medium text-zinc-400 mt-2">
                ROI en {paybackWeeks <= 1 ? "menos de 1 semana" : `${paybackWeeks} semanas`}
              </p>
            </div>
          </div>
        </div>

        {/* Before / After comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 section-fade-in">
          <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-red-500/10 flex items-center justify-center text-[9px] text-red-400 font-bold">✕</span>
              Método Manual Tradicional
            </h3>
            <ul className="flex flex-col gap-3.5">
              {[
                "Horas semanales perdidas actualizando stock",
                "Errores humanos y pedidos cancelados por rotura",
                "Devoluciones por discrepancias en catálogo",
                "Pérdida de ventas por productos sin disponibilidad",
                "Imposible escalar catálogo sin contratar personal",
                "Incidencias sin alertas de control",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-xs text-zinc-300 font-light">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="rgba(239,68,68,0.06)" />
                    <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-6 bg-white/[0.01] border border-white/[0.08] shadow-2xl">
            <h3 className="text-xs font-bold text-[#f5f5f0] uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#10b981]/15 flex items-center justify-center text-[9px] text-[#10b981] font-bold">✓</span>
              Automatización Integrada
            </h3>
            <ul className="flex flex-col gap-3.5">
              {[
                "Cero horas manuales — el sistema corre solo",
                "Inventario sincronizado de forma recurrente",
                "Sin penalizaciones por artículos agotados",
                "Catálogo siempre actualizado al segundo",
                "Escala a miles de productos sin sobrecostes",
                "Alertas instantáneas por email ante fallos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-xs text-zinc-300 font-light">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="rgba(16,185,129,0.06)" />
                    <path d="M5 8l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 section-fade-in">
          <Link
            href="/descargar"
            className="btn-primary px-8 py-3.5 text-sm inline-flex items-center gap-2 glow-primary"
          >
            <span>Empezar a ahorrar — 7 días gratis</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mt-3">Sin tarjeta de crédito · Prueba gratuita activa</p>
        </div>
      </div>
    </section>
  );
}
