"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito saber programar para usar Stock Sync Pro?",
    a: "No. El plugin se instala como cualquier otro plugin de WordPress: descargas el .zip, lo subes desde el panel de administración y lo activas. La configuración se hace a través de una interfaz visual. No necesitas tocar ni una línea de código.",
  },
  {
    q: "¿Con qué proveedores es compatible el plugin?",
    a: "El plugin funciona con cualquier proveedor que tenga una API REST o un feed de datos (CSV, Excel, JSON). Para proveedores con portales web protegidos, el servicio adicional Sync Engine se encarga del scraping y envía los datos al plugin automáticamente.",
  },
  {
    q: "¿Qué diferencia hay entre el plugin y el Sync Engine?",
    a: "El plugin se instala en tu WordPress y gestiona la sincronización de stock. El Sync Engine es el servicio gestionado que extrae datos de tu proveedor (aunque no tenga API) y los envía al plugin automáticamente. Todos los planes de pago incluyen ambos — no necesitas contratar nada por separado.",
  },
  {
    q: "¿Cada cuánto se actualiza el stock?",
    a: "Con el plan Starter el stock se actualiza 1 vez al día. Con Pro, 4 veces al día (cada 6 horas). Con Business, cada 2 horas (12 veces al día). En todos los casos el Sync Engine gestiona el proceso automáticamente sin que tengas que hacer nada.",
  },
  {
    q: "¿Qué pasa si mi proveedor cambia el diseño de su web?",
    a: "Si usas el Sync Engine, nos encargamos de detectar y corregir los cambios. Recibirás una notificación y actualizamos el adaptador sin coste adicional. Si gestionas tu propia integración, deberás actualizar la configuración del scraper.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí. Puedes cancelar tu suscripción en cualquier momento desde el panel de Lemon Squeezy sin penalizaciones. El plugin seguirá funcionando hasta el final del período facturado.",
  },
  {
    q: "¿Funciona con WooCommerce en multisitio o staging?",
    a: "Sí. Cada instalación de WordPress requiere su propia licencia activa. El plan Pro incluye hasta 4 proveedores y el Business incluye proveedores ilimitados, ideal para agencias que gestionan múltiples tiendas.",
  },
  {
    q: "¿Mis credenciales y datos están seguros?",
    a: "Todas las comunicaciones van cifradas por HTTPS/TLS. Las credenciales de acceso a proveedores se almacenan únicamente en tu servidor (o en el VPS del Sync Engine si aplica) y nunca pasan por nuestros servidores. Las claves de licencia se validan a través de la API de Lemon Squeezy.",
  },
];

export default function LandingFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 relative border-t border-white/[0.02]"
      aria-labelledby="landing-faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Preguntas frecuentes
          </div>
          <h2
            id="landing-faq-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f5f5f0] mb-4"
          >
            Todo lo que necesitas{" "}
            <span className="font-serif italic font-normal text-zinc-400">saber.</span>
          </h2>
          <p className="text-zinc-400 text-base font-light">
            ¿Tienes dudas? Aquí respondemos las más habituales. Si no encuentras
            lo que buscas,{" "}
            <a
              href="mailto:hola@wevica.com"
              className="text-[#f5f5f0] underline underline-offset-4 hover:text-amber-500 transition-colors font-medium"
            >
              escríbenos
            </a>
            .
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-white/[0.04] flex flex-col" role="list">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="faq-item transition-all duration-300"
                role="listitem"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-landing-${i}`}
                  id={`faq-question-landing-${i}`}
                >
                  <span className={`text-base font-medium transition-colors duration-300 ${
                    isOpen ? "text-[#f5f5f0]" : "text-zinc-300 group-hover:text-[#f5f5f0]"
                  }`}>
                    {faq.q}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className={`shrink-0 text-zinc-400 transition-transform duration-300 group-hover:text-[#f5f5f0] ${
                      isOpen ? "rotate-180 text-[#f5f5f0]" : ""
                    }`}
                  >
                    <path
                      d="M3 6l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                
                <div
                  id={`faq-answer-landing-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-landing-${i}`}
                  className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed font-light max-w-2xl">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

