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
      className="py-20 px-4 sm:px-6"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden section-fade-in">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3730a3] via-[#4f46e5] to-[#7c3aed]" aria-hidden="true" />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 grid-bg opacity-30"
            aria-hidden="true"
          />
          {/* Radial glow */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]"
            aria-hidden="true"
          />
          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43NSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 py-16 px-8 sm:px-16 text-center">
            <div className="section-fade-in mb-3">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-200 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1l1.6 3.3 3.6.5-2.6 2.6.6 3.6L7 9.3 3.8 11l.6-3.6L2 4.8l3.6-.5L7 1z" fill="currentColor" />
                </svg>
                Sin riesgos · Cancela cuando quieras
              </span>
            </div>

            <h2
              id="cta-heading"
              className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 section-fade-in"
            >
              Empieza hoy con{" "}
              <span className="text-indigo-200">7 días gratis.</span>
            </h2>

            <p className="text-indigo-200/80 text-lg mb-8 max-w-xl mx-auto section-fade-in">
              Prueba Stock Sync Pro sin compromiso. Sin tarjeta de crédito. Si no te convence, no pagas nada.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 section-fade-in">
              <Link
                href="https://wevica.lemonsqueezy.com/buy/PLACEHOLDER"
                className="lemonsqueezy-button inline-flex items-center gap-2 bg-white text-[#4f46e5] font-bold px-8 py-4 rounded-xl text-base hover:bg-indigo-50 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] hover:-translate-y-0.5"
                aria-label="Instalar el plugin gratis - 7 días sin tarjeta"
              >
                {/* TODO: reemplazar con URL real de Lemon Squeezy */}
                Instalar el plugin gratis
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm transition-colors"
              >
                Ver todos los planes
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 section-fade-in">
              {[
                "Sin tarjeta de crédito",
                "Cancela en 1 clic",
                "Soporte en español",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-indigo-200/70 text-sm">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7l3 3 7-7" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
