import Link from "next/link";

interface SyncPlan {
  name: string;
  price: number;
  popular: boolean;
  description: string;
  features: string[];
  highlight?: string;
  ctaLabel: string;
  ctaHref: string;
}

const syncPlans: SyncPlan[] = [
  {
    name: "Starter",
    price: 79,
    popular: false,
    description: "Perfecto para tiendas que trabajan con un único proveedor.",
    features: [
      "1 proveedor gestionado",
      "Sincronización cada 2 horas",
      "Scraping gestionado en VPS",
      "Dashboard de monitorización",
      "Historial 30 días",
      "Soporte por email",
    ],
    ctaLabel: "Activar Starter",
    ctaHref: "mailto:hola@wevica.com?subject=Sync%20Engine%20Starter",
  },
  {
    name: "Pro",
    price: 149,
    popular: true,
    description: "Para tiendas con múltiples proveedores que necesitan datos frescos cada hora.",
    highlight: "El más elegido por tiendas medianas",
    features: [
      "3 proveedores gestionados",
      "Sincronización cada hora",
      "Scraping gestionado en VPS",
      "Notificaciones por Telegram/email",
      "Dashboard + alertas avanzadas",
      "Historial 90 días",
      "Soporte prioritario",
    ],
    ctaLabel: "Activar Pro",
    ctaHref: "mailto:hola@wevica.com?subject=Sync%20Engine%20Pro",
  },
  {
    name: "Business",
    price: 299,
    popular: false,
    description: "Para grandes operaciones con múltiples proveedores y requisitos de SLA.",
    features: [
      "Proveedores ilimitados",
      "Sincronización cada 30 minutos",
      "VPS dedicado exclusivo",
      "Setup e integración incluidos",
      "Notificaciones multicanal",
      "Historial 365 días",
      "SLA 99.9% garantizado",
      "Soporte 24/7 dedicado",
    ],
    ctaLabel: "Activar Business",
    ctaHref: "mailto:hola@wevica.com?subject=Sync%20Engine%20Business",
  },
];

export default function SyncEnginePlans() {
  return (
    <section
      className="py-20 px-4 sm:px-6 relative"
      aria-labelledby="sync-engine-heading"
    >
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Separator */}
        <div className="border-t border-white/[0.06] mb-20" />

        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Servicio Gestionado
          </div>
          <h2
            id="sync-engine-heading"
            className="text-3xl sm:text-4xl font-black tracking-tight mb-3"
          >
            <span className="gradient-text">Sync Engine</span>
          </h2>
          <p className="text-[#64748b] text-base max-w-xl mx-auto">
            Nosotros gestionamos el scraping por ti. Ejecutamos tus scrapers en nuestros VPS 24/7 y alimentamos tu plugin directamente.{" "}
            <strong className="text-[#94a3b8] font-medium">Tú solo configuras.</strong>
          </p>

          {/* How it's different */}
          <div className="mt-8 inline-flex flex-col sm:flex-row gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12" rx="2" stroke="#6366f1" strokeWidth="1.5" />
                  <path d="M5 8h6M8 5v6" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#f1f5f9] mb-0.5">Plugin solo</p>
                <p className="text-xs text-[#64748b]">Tú gestionas tu propia fuente de datos y el servidor.</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center text-[#334155]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 10h10M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v3M8 11v3M2 8h3M11 8h3" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="8" cy="8" r="3" stroke="#8b5cf6" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#f1f5f9] mb-0.5">Plugin + Sync Engine</p>
                <p className="text-xs text-[#64748b]">El Sync Engine gestiona el scraping y el servidor por ti. Zero-ops.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {syncPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col gap-6 transition-all duration-300 relative ${
                plan.popular
                  ? "plan-card-popular"
                  : "glass-card glass-card-hover"
              }`}
              aria-label={`Plan Sync Engine ${plan.name}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="popular-badge">Más elegido</span>
                </div>
              )}

              {/* Plan info */}
              <div>
                <h3 className="text-lg font-bold text-[#f1f5f9] mb-1">{plan.name}</h3>
                <p className="text-sm text-[#64748b]">{plan.description}</p>
                {plan.highlight && (
                  <p className="text-xs text-[#6366f1] mt-1.5 font-medium">{plan.highlight}</p>
                )}
              </div>

              {/* Price */}
              <div>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="text-4xl font-black text-[#f1f5f9]">
                    €{plan.price}
                  </span>
                  <span className="text-[#64748b] mb-1.5 text-sm">/mes</span>
                </div>
                <p className="text-xs text-[#475569]">
                  Facturado mensualmente · Cancela cuando quieras
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1" aria-label={`Características del plan Sync Engine ${plan.name}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-[#94a3b8]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0 mt-0.5"
                    >
                      <circle cx="8" cy="8" r="7" fill="rgba(139,92,246,0.15)" />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke="#8b5cf6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.ctaHref}
                className={`lemonsqueezy-button text-center py-3 px-5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "btn-primary glow-primary"
                    : "btn-secondary"
                }`}
                aria-label={`${plan.ctaLabel} - €${plan.price}/mes`}
              >
                <span>{plan.ctaLabel}</span>
              </Link>
            </article>
          ))}
        </div>

        {/* Custom note */}
        <div className="mt-10 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#f1f5f9] mb-1">
              ¿Tienes un proveedor con estructura especial?
            </p>
            <p className="text-xs text-[#64748b]">
              Podemos desarrollar scrapers a medida para cualquier web o sistema. Contacta con nosotros.
            </p>
          </div>
          <a
            href="mailto:hola@wevica.com"
            className="btn-secondary px-5 py-2.5 text-sm font-medium whitespace-nowrap shrink-0"
          >
            Solicitar scraper personalizado →
          </a>
        </div>
      </div>
    </section>
  );
}
