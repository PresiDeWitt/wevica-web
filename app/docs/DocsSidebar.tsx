"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "introduccion", label: "Introducción" },
  { id: "requisitos", label: "Requisitos" },
  { id: "instalacion", label: "Instalación" },
  { id: "configuracion", label: "Configuración" },
  { id: "fuentes-de-datos", label: "Fuentes de datos" },
  { id: "api", label: "API REST" },
  { id: "sync-engine", label: "Sync Engine" },
  { id: "alertas", label: "Alertas Telegram" },
  { id: "faq-tecnico", label: "FAQ técnico" },
];

export default function DocsSidebar() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          rootMargin: "-20% 0px -70% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="hidden lg:block w-52 shrink-0 sticky top-24 self-start"
      aria-label="Tabla de contenidos"
    >
      <p className="text-[10px] font-bold text-[#475569] uppercase tracking-widest mb-3">
        En esta página
      </p>
      <ul className="flex flex-col gap-1">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-sm py-1 block transition-colors duration-300"
              style={{
                color: activeId === s.id ? "#f1f5f9" : "#64748b",
              }}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 glass-card rounded-xl p-4">
        <p className="text-xs text-[#64748b] mb-3">¿Necesitas ayuda?</p>
        <a
          href="mailto:hola@wevica.com"
          className="text-xs text-[#6366f1] hover:text-[#8b5cf6] transition-colors font-medium"
        >
          hola@wevica.com →
        </a>
      </div>
    </nav>
  );
}
