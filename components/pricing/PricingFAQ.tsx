"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué incluye cada plan?",
    answer:
      "Todos los planes de pago (Starter, Pro y Business) incluyen tanto el plugin WordPress como el Sync Engine gestionado. El plan Free incluye solo el plugin para quienes ya tienen su propia fuente de datos (CSV, API o ERP) y quieren gestionarse solos, sin límite de tiempo.",
  },
  {
    question: "¿Cómo funciona el período de prueba de 7 días?",
    answer:
      "Al comprar cualquier plan, dispones de 7 días completos para probarlo sin riesgo. Si por cualquier motivo no estás satisfecho, te devolvemos el importe íntegro sin preguntas. No necesitas introducir ningún justificante ni abrir una disputa: simplemente escríbenos.",
  },
  {
    question: "¿Qué ocurre si supero el número de sitios de mi plan?",
    answer:
      "Si necesitas activar el plugin en más sitios de los permitidos por tu plan, el sistema te avisará y te pedirá que actualices tu licencia. Puedes hacer upgrade en cualquier momento desde tu panel de Lemon Squeezy y el importe se prorratea automáticamente para que solo pagues la diferencia por el tiempo restante.",
  },
  {
    question: "¿Puedo cambiar de plan o cancelar en cualquier momento?",
    answer:
      "Sí. Todos los planes son mensuales y se renuevan automáticamente. Puedes cancelar en cualquier momento desde tu portal de cliente en Lemon Squeezy antes del próximo ciclo de facturación, sin ningún coste adicional.",
  },
  {
    question: "¿Qué proveedores y formatos de datos soporta Stock Sync Pro?",
    answer:
      "Stock Sync Pro es compatible con cualquier fuente de datos que exponga una API REST o un archivo descargable. Soporta de forma nativa: archivos CSV/Excel subidos por FTP o URL, Google Sheets (mediante URL de exportación), APIs REST con autenticación básica o Bearer token, y el Sync Engine para scraping gestionado. Si tu proveedor tiene una integración especial, contáctanos y te ayudamos a configurarla.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-20 px-4 sm:px-6"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-black tracking-tight mb-3"
          >
            Preguntas <span className="gradient-text">frecuentes.</span>
          </h2>
          <p className="text-[#64748b] text-base">
            Si no encuentras tu respuesta aquí, escríbenos a{" "}
            <a
              href="mailto:hola@wevica.com"
              className="text-[#6366f1] hover:text-[#8b5cf6] transition-colors"
            >
              hola@wevica.com
            </a>
          </p>
        </div>

        {/* FAQ list */}
        <div
          className="glass-card rounded-2xl overflow-hidden divide-y divide-white/[0.05]"
          role="list"
        >
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="faq-item"
              role="listitem"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-sm sm:text-base font-semibold text-[#f1f5f9] leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[rgba(99,102,241,0.2)] rotate-180"
                      : "bg-white/[0.05]"
                  }`}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 4l4 4 4-4"
                      stroke={openIndex === index ? "#6366f1" : "#64748b"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="px-6 pb-6"
                >
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
