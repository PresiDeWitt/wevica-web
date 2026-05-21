"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CTABanner() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative border-t border-white/[0.02]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden section-fade-in glass-card noise-overlay border border-white/[0.04] p-12 sm:p-20">
          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 grid-bg opacity-[0.03]"
            aria-hidden="true"
          />
          {/* Delicate champagne radial glow */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,245,240,0.02)_0%,transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 text-center flex flex-col items-center gap-6">
            <div className="section-fade-in">
              <span className="badge" role="status">
                <span className="badge-dot" aria-hidden="true" />
                Sin riesgos · Cancela cuando quieras
              </span>
            </div>

            <h2
              id="cta-heading"
              className="text-4xl sm:text-5xl font-bold text-[#f5f5f0] tracking-tight section-fade-in"
            >
              Empieza hoy con{" "}
              <span className="font-serif italic font-normal text-zinc-400">7 días gratis.</span>
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed section-fade-in">
              Prueba Stock Sync Pro sin compromiso. Sin tarjeta de crédito. Si no te convence, no pagas nada.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 section-fade-in">
              <Link
                href="/descargar"
                className="btn-primary px-8 py-3.5 text-sm inline-flex items-center gap-2 glow-primary"
                aria-label="Instalar el plugin gratis - 7 días sin tarjeta"
              >
                <span>Instalar el plugin gratis</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="btn-secondary px-8 py-3.5 text-sm inline-flex items-center gap-2"
              >
                <span>Ver todos los planes</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 section-fade-in border-t border-white/[0.04] pt-8 w-full">
              {[
                "Sin tarjeta de crédito",
                "Cancela en 1 clic",
                "Soporte en español",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm font-light">
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
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

