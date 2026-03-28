"use client";

import { useState } from "react";
import Link from "next/link";

interface Plan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  annualTotal: number;
  popular: boolean;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHrefAnnual: string;
  ctaHrefMonthly: string;
}

const pluginPlans: Plan[] = [
  {
    name: "Personal",
    monthlyPrice: 9,
    annualPrice: 79,
    annualTotal: 79,
    popular: false,
    description: "Ideal para tiendas individuales que quieren automatizar su inventario.",
    features: [
      "1 sitio WooCommerce",
      "Sync manual y automático",
      "API REST completa",
      "Hasta 5.000 productos/mes",
      "Historial de sincronizaciones",
      "Soporte por email",
      "7 días de prueba gratis",
    ],
    ctaLabel: "Empezar con Personal",
    ctaHrefAnnual: "https://wevica.lemonsqueezy.com/buy/16216ef2-9646-4aca-9c04-8ea7fb001cd5",
    ctaHrefMonthly: "https://wevica.lemonsqueezy.com/buy/fcfed910-961a-4f4e-96b8-e403e7c630a5",
  },
  {
    name: "Business",
    monthlyPrice: 29,
    annualPrice: 199,
    annualTotal: 199,
    popular: true,
    description: "Para agencias y tiendas que gestionan varios sitios a la vez.",
    features: [
      "3 sitios WooCommerce",
      "Todo lo de Personal",
      "Hasta 50.000 productos/mes",
      "Webhooks en tiempo real",
      "Múltiples API keys",
      "Logs avanzados y alertas",
      "Soporte prioritario",
      "7 días de prueba gratis",
    ],
    ctaLabel: "Empezar con Business",
    ctaHrefAnnual: process.env.NEXT_PUBLIC_LS_PLUGIN_BUSINESS_ANNUAL ?? "mailto:hola@wevica.com?subject=Stock%20Sync%20Pro%20Business%20Anual",
    ctaHrefMonthly: process.env.NEXT_PUBLIC_LS_PLUGIN_BUSINESS_MONTHLY ?? "mailto:hola@wevica.com?subject=Stock%20Sync%20Pro%20Business%20Mensual",
  },
  {
    name: "Agency",
    monthlyPrice: 79,
    annualPrice: 490,
    annualTotal: 490,
    popular: false,
    description: "Sin límites para agencias y grandes operaciones de ecommerce.",
    features: [
      "Sitios ilimitados",
      "Todo lo de Business",
      "Productos ilimitados",
      "White-label disponible",
      "Onboarding personalizado",
      "SLA garantizado",
      "Soporte dedicado",
      "7 días de prueba gratis",
    ],
    ctaLabel: "Empezar con Agency",
    ctaHrefAnnual: process.env.NEXT_PUBLIC_LS_PLUGIN_AGENCY_ANNUAL ?? "mailto:hola@wevica.com?subject=Stock%20Sync%20Pro%20Agency%20Anual",
    ctaHrefMonthly: process.env.NEXT_PUBLIC_LS_PLUGIN_AGENCY_MONTHLY ?? "mailto:hola@wevica.com?subject=Stock%20Sync%20Pro%20Agency%20Mensual",
  },
];

export default function PluginPlans() {
  const [billingAnnual, setBillingAnnual] = useState(true);

  return (
    <section
      className="py-20 px-4 sm:px-6"
      aria-labelledby="plugin-plans-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge mb-4 inline-flex">
            <span className="badge-dot" aria-hidden="true" />
            Plugin WordPress
          </div>
          <h2
            id="plugin-plans-heading"
            className="text-3xl sm:text-4xl font-black tracking-tight mb-3"
          >
            <span className="gradient-text">Stock Sync Pro</span>
          </h2>
          <p className="text-[#64748b] text-base max-w-lg mx-auto mb-8">
            Instálalo en tu WordPress. Sincroniza tu stock de forma automática desde cualquier fuente de datos.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3" role="group" aria-label="Seleccionar período de facturación">
            <div className="toggle-switch">
              <button
                className={`toggle-option ${billingAnnual ? "" : "active"}`}
                onClick={() => setBillingAnnual(false)}
                aria-pressed={!billingAnnual}
              >
                Mensual
              </button>
              <button
                className={`toggle-option ${billingAnnual ? "active" : ""}`}
                onClick={() => setBillingAnnual(true)}
                aria-pressed={billingAnnual}
              >
                Anual
              </button>
            </div>
            {billingAnnual && (
              <span className="text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-2.5 py-1">
                Ahorra hasta 48%
              </span>
            )}
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pluginPlans.map((plan) => (
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
                  <span className="popular-badge">Más popular</span>
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
                    €{billingAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-[#64748b] mb-1.5 text-sm">
                    /{billingAnnual ? "año" : "mes"}
                  </span>
                </div>
                {billingAnnual && (
                  <p className="text-xs text-green-400">
                    Equivale a €{Math.round(plan.annualTotal / 12)}/mes · facturado anualmente
                  </p>
                )}
                {!billingAnnual && (
                  <p className="text-xs text-[#475569]">
                    Facturado mensualmente
                  </p>
                )}
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
                      <circle cx="8" cy="8" r="7" fill="rgba(99,102,241,0.15)" />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke="#6366f1"
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
                href={billingAnnual ? plan.ctaHrefAnnual : plan.ctaHrefMonthly}
                className={`text-center py-3 px-5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "btn-primary glow-primary"
                    : "btn-secondary"
                } ${(billingAnnual ? plan.ctaHrefAnnual : plan.ctaHrefMonthly).startsWith("https://wevica.lemonsqueezy.com") ? "lemonsqueezy-button" : ""}`}
                aria-label={`${plan.ctaLabel} - €${billingAnnual ? plan.annualPrice : plan.monthlyPrice}/${billingAnnual ? "año" : "mes"}`}
              >
                <span>{plan.ctaLabel}</span>
              </Link>
            </article>
          ))}
        </div>

        {/* Enterprise note */}
        <p className="text-center text-sm text-[#475569] mt-8">
          ¿Necesitas más de 10 sitios o una integración personalizada?{" "}
          <a
            href="mailto:hola@wevica.com"
            className="text-[#6366f1] hover:text-[#8b5cf6] transition-colors font-medium"
          >
            Contáctanos para una oferta personalizada →
          </a>
        </p>
      </div>
    </section>
  );
}
