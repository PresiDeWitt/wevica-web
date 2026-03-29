import Link from "next/link";

const LS_STARTER  = process.env.NEXT_PUBLIC_LS_SE_STARTER  ?? "https://wevica.lemonsqueezy.com/checkout";
const LS_PRO      = process.env.NEXT_PUBLIC_LS_SE_PRO      ?? "https://wevica.lemonsqueezy.com/checkout";
const LS_BUSINESS = process.env.NEXT_PUBLIC_LS_SE_BUSINESS ?? "https://wevica.lemonsqueezy.com/checkout";

interface Plan {
  name: string;
  price: number;
  popular?: boolean;
  highlight?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  free?: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: 0,
    free: true,
    description: "Para quien ya tiene su fuente de datos (CSV, API, ERP). Tú gestionas el sync.",
    features: [
      "Plugin WordPress incluido",
      "Hasta 500 productos/mes",
      "1 API key",
      "Sync manual vía REST API",
      "7 días de prueba completa",
    ],
    ctaLabel: "Empezar gratis",
    ctaHref: "https://wordpress.org/plugins/wevica-stock-sync/",
  },
  {
    name: "Starter",
    price: 79,
    description: "Para tiendas con un único proveedor. Nosotros lo gestionamos todo.",
    features: [
      "Plugin WordPress incluido",
      "1 proveedor gestionado",
      "Sync automático cada 2 horas",
      "Scraping gestionado en VPS",
      "Hasta 5.000 productos/mes",
      "Soporte por email",
    ],
    ctaLabel: "Activar Starter",
    ctaHref: LS_STARTER,
  },
  {
    name: "Pro",
    price: 149,
    popular: true,
    highlight: "El más elegido",
    description: "Para tiendas con varios proveedores que necesitan datos siempre frescos.",
    features: [
      "Plugin WordPress incluido",
      "Hasta 4 proveedores gestionados",
      "Sync automático cada hora",
      "Scrapers personalizados incluidos",
      "Hasta 50.000 productos/mes",
      "Dashboard + alertas avanzadas",
      "Soporte prioritario",
    ],
    ctaLabel: "Activar Pro",
    ctaHref: LS_PRO,
  },
  {
    name: "Business",
    price: 299,
    description: "Para grandes operaciones con múltiples proveedores y SLA garantizado.",
    features: [
      "Plugin WordPress incluido",
      "Proveedores ilimitados",
      "Sync automático cada 30 minutos",
      "VPS dedicado exclusivo",
      "Productos ilimitados",
      "SLA 99,9% garantizado",
      "Soporte 24/7 dedicado",
    ],
    ctaLabel: "Activar Business",
    ctaHref: LS_BUSINESS,
  },
];

export default function Plans() {
  return (
    <section
      className="py-20 px-4 sm:px-6 relative"
      aria-labelledby="plans-heading"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Plugin + Sync Engine incluidos
          </div>
          <h2
            id="plans-heading"
            className="text-3xl sm:text-4xl font-black tracking-tight mb-3"
          >
            Tu stock siempre actualizado,{" "}
            <span className="gradient-text">aunque tu proveedor no tenga API.</span>
          </h2>
          <p className="text-[#64748b] text-base max-w-xl mx-auto">
            Todos los planes de pago incluyen el plugin WordPress y el Sync Engine gestionado.{" "}
            <strong className="text-[#94a3b8] font-medium">Cero configuración de servidor.</strong>
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col gap-6 transition-all duration-300 relative ${
                plan.popular
                  ? "plan-card-popular"
                  : "glass-card glass-card-hover"
              }`}
              aria-label={`Plan ${plan.name}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="popular-badge">Más elegido</span>
                </div>
              )}

              {/* Plan name + description */}
              <div>
                <h3 className="text-lg font-bold text-[#f1f5f9] mb-1">{plan.name}</h3>
                <p className="text-sm text-[#64748b]">{plan.description}</p>
              </div>

              {/* Price */}
              <div>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="text-4xl font-black text-[#f1f5f9]">
                    {plan.free ? "Gratis" : `€${plan.price}`}
                  </span>
                  {!plan.free && (
                    <span className="text-[#64748b] mb-1.5 text-sm">/mes</span>
                  )}
                </div>
                <p className="text-xs text-[#475569]">
                  {plan.free ? "Sin tarjeta de crédito" : "Facturado mensualmente · Cancela cuando quieras"}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1" aria-label={`Características del plan ${plan.name}`}>
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
                      <circle cx="8" cy="8" r="7" fill={plan.popular ? "rgba(139,92,246,0.15)" : "rgba(99,102,241,0.15)"} />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke={plan.popular ? "#8b5cf6" : "#6366f1"}
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
                aria-label={`${plan.ctaLabel}${!plan.free ? ` - €${plan.price}/mes` : ""}`}
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
              Desarrollamos scrapers a medida para cualquier web o sistema. Contacta con nosotros.
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
