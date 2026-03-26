import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Sync Engine — Scraping gestionado para WooCommerce",
  description:
    "Deja que nosotros nos encarguemos del scraping. Sincronizamos tu stock desde cualquier proveedor en piloto automático. Sin servidor, sin mantenimiento.",
  openGraph: {
    title: "Sync Engine — Scraping gestionado para WooCommerce",
    description:
      "Sincronizamos tu stock desde cualquier proveedor 24/7. Tú solo instalas el plugin y nos dices cuál es tu proveedor.",
  },
};

const LS_SE_STARTER  = process.env.NEXT_PUBLIC_LS_SE_STARTER  ?? "https://wevica.lemonsqueezy.com/checkout";
const LS_SE_PRO      = process.env.NEXT_PUBLIC_LS_SE_PRO      ?? "https://wevica.lemonsqueezy.com/checkout";
const LS_SE_BUSINESS = process.env.NEXT_PUBLIC_LS_SE_BUSINESS ?? "https://wevica.lemonsqueezy.com/checkout";

const plans = [
  {
    name: "Starter",
    price: 79,
    popular: false,
    description: "Perfecto para tiendas con un único proveedor.",
    features: [
      "1 proveedor gestionado",
      "Sincronización cada 2 horas",
      "Scraper personalizado incluido",
      "Dashboard de monitorización",
      "Alertas por email",
      "Historial 30 días",
      "Soporte por email",
    ],
    ctaLabel: "Activar Starter",
    ctaHref: LS_SE_STARTER,
  },
  {
    name: "Pro",
    price: 149,
    popular: true,
    highlight: "El más elegido",
    description: "Para tiendas que necesitan datos frescos y múltiples proveedores.",
    features: [
      "3 proveedores gestionados",
      "Sincronización cada hora",
      "Scrapers personalizados incluidos",
      "Notificaciones Telegram + email",
      "Dashboard con alertas avanzadas",
      "Historial 90 días",
      "Soporte prioritario",
    ],
    ctaLabel: "Activar Pro",
    ctaHref: LS_SE_PRO,
  },
  {
    name: "Business",
    price: 299,
    popular: false,
    description: "Operaciones grandes con múltiples proveedores y SLA garantizado.",
    features: [
      "Proveedores ilimitados",
      "Sincronización cada 30 minutos",
      "VPS dedicado exclusivo",
      "Setup e integración completa",
      "Notificaciones multicanal",
      "Historial 365 días",
      "SLA 99,9% garantizado",
      "Soporte 24/7 dedicado",
    ],
    ctaLabel: "Activar Business",
    ctaHref: LS_SE_BUSINESS,
  },
];

const steps = [
  {
    number: "01",
    title: "Instala el plugin",
    description:
      "Descarga Stock Sync Pro e instálalo en tu WordPress. En menos de 2 minutos está activo.",
  },
  {
    number: "02",
    title: "Elige tu plan y activa",
    description:
      "Contrata el plan Sync Engine que necesitas. Recibirás tu clave de activación al instante por email.",
  },
  {
    number: "03",
    title: "Nosotros hacemos el resto",
    description:
      "Nos dices cuál es tu proveedor y configuramos tu scraper personalizado. A partir de ahí, el stock se actualiza solo.",
  },
];

const faqs = [
  {
    question: "¿Qué es exactamente el Sync Engine?",
    answer:
      "Es un servicio gestionado donde nosotros nos encargamos de acceder a la web de tu proveedor, extraer el stock actualizado y enviarlo directamente a tu WooCommerce. Todo corre en nuestros servidores: tú no tienes que instalar nada más ni mantener ningún servidor.",
  },
  {
    question: "¿Qué pasa después de contratar?",
    answer:
      "Recibirás un email con tu clave de activación del Sync Engine. La introduces en el plugin (menú Licencia → Sync Engine), nos indicas la URL de tu proveedor en los ajustes y en 24-48 horas tenemos tu scraper personalizado listo y funcionando.",
  },
  {
    question: "¿Funciona con cualquier proveedor?",
    answer:
      "Sí, con cualquier tienda online o catálogo web. Si tu proveedor tiene una web pública donde pueda verse el stock, podemos desarrollar un scraper para él. También soportamos APIs REST, feeds XML, Excel y CSV.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí. Los planes del Sync Engine son mensuales y puedes cancelar en cualquier momento desde tu portal de cliente en Lemon Squeezy. No hay permanencia ni penalización.",
  },
  {
    question: "¿Necesito el plugin para usar el Sync Engine?",
    answer:
      "Sí, el Sync Engine trabaja en combinación con el plugin Stock Sync Pro. El plugin se instala en tu WordPress y actúa como receptor: el Sync Engine scrapa tu proveedor y envía los datos al plugin. Puedes usar el plugin sin Sync Engine (con tu propia fuente de datos), pero no el Sync Engine sin el plugin.",
  },
];

export default function SyncEnginePage() {
  return (
    <main>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 px-4 sm:px-6 text-center relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12)_0%,transparent_65%)] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="badge mb-5 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Servicio gestionado
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
            Tu stock sincronizado.{" "}
            <span className="gradient-text">Sin servidores.</span>
          </h1>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto mb-10">
            Nos encargamos de scrapear tu proveedor y actualizar tu tienda WooCommerce en piloto automático.
            Tú solo instalas el plugin y nos dices cuál es tu proveedor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#planes"
              className="btn-primary glow-primary px-7 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
              </svg>
              Ver planes y precios
            </a>
            <Link
              href="/pricing"
              className="btn-secondary px-7 py-3.5 rounded-xl text-sm font-semibold"
            >
              Comparar con el plugin →
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: "🔒", text: "Pago seguro con Lemon Squeezy" },
              { icon: "↩️", text: "Reembolso en 7 días" },
              { icon: "⚡", text: "Scraper listo en 24-48 h" },
              { icon: "🇪🇸", text: "Soporte en español" },
            ].map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 text-xs text-[#475569] bg-white/[0.03] border border-white/[0.07] rounded-full px-3 py-1.5"
              >
                <span aria-hidden="true">{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6" aria-labelledby="how-it-works-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2
              id="how-it-works-heading"
              className="text-3xl sm:text-4xl font-black tracking-tight mb-3"
            >
              Tres pasos y{" "}
              <span className="gradient-text">listo para siempre.</span>
            </h2>
            <p className="text-[#64748b] text-base max-w-lg mx-auto">
              No necesitas saber programar ni mantener servidores. Solo sigue estos pasos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="glass-card rounded-2xl p-7 text-center">
                <div className="text-4xl font-black text-[rgba(99,102,241,0.25)] mb-4">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-[#f1f5f9] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* After purchase note */}
          <div className="mt-10 glass-card rounded-2xl p-6 border border-[rgba(99,102,241,0.2)] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] flex items-center justify-center shrink-0 mt-0.5">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 4v4l3 1.5"
                  stroke="#6366f1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f1f5f9] mb-1">
                ¿Qué pasa después de contratar?
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Recibirás tu clave de Sync Engine por email. La introduces en el plugin, nos indicas la URL de tu proveedor
                y en{" "}
                <strong className="text-[#94a3b8]">24-48 horas</strong> tu scraper personalizado está activo y sincronizando.
                Sin reuniones, sin configuración técnica por tu parte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Plans ────────────────────────────────────────────────────────── */}
      <section id="planes" className="py-20 px-4 sm:px-6" aria-labelledby="se-plans-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge mb-4 inline-flex">
              <span className="badge-dot" aria-hidden="true" />
              Planes mensuales
            </div>
            <h2
              id="se-plans-heading"
              className="text-3xl sm:text-4xl font-black tracking-tight mb-3"
            >
              <span className="gradient-text">Elige tu plan</span>
            </h2>
            <p className="text-[#64748b] text-base max-w-lg mx-auto">
              Todos los planes incluyen scraper personalizado para tu proveedor, 7 días de prueba y soporte en español.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-2xl p-7 flex flex-col gap-6 transition-all duration-300 relative ${
                  plan.popular ? "plan-card-popular" : "glass-card glass-card-hover"
                }`}
                aria-label={`Plan Sync Engine ${plan.name}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="popular-badge">{plan.highlight}</span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-[#f1f5f9] mb-1">{plan.name}</h3>
                  <p className="text-sm text-[#64748b]">{plan.description}</p>
                </div>

                <div>
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className="text-4xl font-black text-[#f1f5f9]">€{plan.price}</span>
                    <span className="text-[#64748b] mb-1.5 text-sm">/mes</span>
                  </div>
                  <p className="text-xs text-[#475569]">Facturado mensualmente · Cancela cuando quieras</p>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1" aria-label={`Características del plan ${plan.name}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-[#94a3b8]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
                        <circle cx="8" cy="8" r="7" fill="rgba(139,92,246,0.15)" />
                        <path d="M5 8l2 2 4-4" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  className={`lemonsqueezy-button text-center py-3 px-5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    plan.popular ? "btn-primary glow-primary" : "btn-secondary"
                  }`}
                  aria-label={`${plan.ctaLabel} - €${plan.price}/mes`}
                >
                  {plan.ctaLabel}
                </a>
              </article>
            ))}
          </div>

          {/* Custom scraper note */}
          <div className="mt-10 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#f1f5f9] mb-1">
                ¿Tu proveedor tiene una estructura especial?
              </p>
              <p className="text-xs text-[#64748b]">
                Desarrollamos scrapers a medida para cualquier web, API o formato. Contáctanos para presupuesto.
              </p>
            </div>
            <a
              href="mailto:hola@wevica.com?subject=Scraper%20personalizado%20Sync%20Engine"
              className="btn-secondary px-5 py-2.5 text-sm font-medium whitespace-nowrap shrink-0"
            >
              Solicitar scraper personalizado →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <SyncEngineFAQ />

      <CTABanner />
      <Footer />
    </main>
  );
}

function SyncEngineFAQ() {
  return (
    <section className="py-20 px-4 sm:px-6" aria-labelledby="se-faq-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="se-faq-heading"
            className="text-3xl sm:text-4xl font-black tracking-tight mb-3"
          >
            Preguntas <span className="gradient-text">frecuentes.</span>
          </h2>
          <p className="text-[#64748b] text-base">
            ¿Tienes más dudas?{" "}
            <a href="mailto:hola@wevica.com" className="text-[#6366f1] hover:text-[#8b5cf6] transition-colors">
              Escríbenos
            </a>
          </p>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/[0.05]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors list-none">
                <span className="text-sm sm:text-base font-semibold text-[#f1f5f9] leading-snug">
                  {faq.question}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full bg-white/[0.05] flex items-center justify-center group-open:bg-[rgba(99,102,241,0.2)] group-open:rotate-180 transition-all duration-300" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-[#64748b] leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
