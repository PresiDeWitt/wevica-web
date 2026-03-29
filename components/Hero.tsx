import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 overflow-hidden grid-bg"
      aria-label="Presentación principal de Stock Sync Pro"
    >
      {/* Background glow */}
      <div className="hero-glow" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.07)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <div style={{ animation: "heroFadeInUp 0.7s ease 0.05s both" }}>
          <span className="badge" role="status">
            <span className="badge-dot" aria-hidden="true" />
            7 días gratis · Sin tarjeta de crédito
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]" style={{ animation: "heroFadeInUp 0.7s ease 0.15s both" }}>
          Tu stock,
          <br />
          <span className="gradient-text">siempre al día.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#64748b] max-w-2xl leading-relaxed" style={{ animation: "heroFadeInUp 0.7s ease 0.25s both" }}>
          <strong className="text-[#94a3b8] font-medium">Stock Sync Pro</strong> conecta tu tienda WooCommerce con tus proveedores y mantiene el stock y los precios actualizados de forma automática, sin parar.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2" style={{ animation: "heroFadeInUp 0.7s ease 0.35s both" }}>
          <Link
            href={process.env.NEXT_PUBLIC_LS_SE_STARTER ?? "https://wevica.lemonsqueezy.com/buy/16216ef2-9646-4aca-9c04-8ea7fb001cd5"}
            className="btn-primary lemonsqueezy-button px-6 py-3 text-base inline-flex items-center gap-2 glow-primary"
            aria-label="Instalar el plugin Stock Sync Pro"
          >
            <span>Instalar el plugin</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/pricing"
            className="btn-secondary px-6 py-3 text-base inline-flex items-center gap-2"
          >
            Ver precios
          </Link>
        </div>

        {/* Trust signal */}
        <p className="text-xs text-[#475569] mt-1" style={{ animation: "heroFadeInUp 0.7s ease 0.45s both" }}>
          Sin tarjeta de crédito · 7 días gratis · Reembolso garantizado · Instalación en 2 minutos
        </p>

        {/* Hero visual — fiel al plugin real */}
        <div className="mt-10 w-full max-w-3xl" style={{ animation: "heroFadeInUp 0.7s ease 0.55s both" }}>
          {/* Outer glow ring */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-white/[0.03] shadow-[0_0_80px_rgba(99,102,241,0.12)]">
            {/* Browser chrome */}
            <div className="bg-[#0d0d1a] rounded-2xl overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#090912]">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-3 bg-white/[0.05] rounded-md py-1 px-3 text-[11px] text-[#4b5563] text-left font-mono">
                  mitienda.com/wp-admin · Stock Sync Pro
                </div>
              </div>

              {/* Plugin UI — light theme, exactly like the real plugin */}
              <div className="bg-[#f9fafb] p-5 text-left">

                {/* Page header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#e5e7eb]">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-[15px] font-bold text-[#111827] leading-tight">Stock Sync Pro</div>
                      <div className="text-[11px] text-[#6b7280] mt-0.5">Stock synchronization dashboard</div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#eef2ff] text-[#4338ca] border border-[#c7d2fe]">
                      v4.0.1
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e5e7eb] text-[11px] text-[#374151] font-medium shadow-sm">
                    <svg className="w-3 h-3 text-[#6b7280]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>
                    Settings
                  </div>
                </div>

                {/* Stat cards — 4 columnas con accent bar izquierda */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: "SYNCS", value: "1.284", meta: "Total accumulated", accent: "bg-[#6366f1]", icon: "text-[#6366f1]", iconBg: "bg-[#eef2ff]" },
                    { label: "UPDATED", value: "847",  meta: "Products total",    accent: "bg-[#10b981]", icon: "text-[#10b981]", iconBg: "bg-[#d1fae5]" },
                    { label: "ERRORS",  value: "0",    meta: "No errors",         accent: "bg-[#10b981]", icon: "text-[#10b981]", iconBg: "bg-[#d1fae5]" },
                    { label: "STORES",  value: "2",    meta: "Tienda A, Tienda B", accent: "bg-[#f59e0b]", icon: "text-[#f59e0b]", iconBg: "bg-[#fef3c7]" },
                  ].map((card) => (
                    <div key={card.label} className="relative bg-white rounded-xl border border-[#e5e7eb] p-3 shadow-sm overflow-hidden">
                      {/* Accent bar izquierda */}
                      <div className={`absolute top-0 left-0 w-1 h-full rounded-l-xl ${card.accent}`} aria-hidden="true" />
                      <div className="pl-2">
                        <div className={`w-7 h-7 rounded-lg ${card.iconBg} ${card.icon} flex items-center justify-center mb-2`}>
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/></svg>
                        </div>
                        <div className="text-[9px] font-semibold text-[#6b7280] uppercase tracking-wide mb-0.5">{card.label}</div>
                        <div className="text-xl font-extrabold text-[#111827] leading-none mb-0.5">{card.value}</div>
                        <div className="text-[9px] text-[#9ca3af] truncate">{card.meta}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom panels: Last sync + API Key */}
                <div className="grid grid-cols-2 gap-3">

                  {/* Last sync panel */}
                  <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#f9fafb] border-b border-[#f3f4f6]">
                      <span className="text-[11px] font-semibold text-[#374151] flex items-center gap-1.5">
                        <svg className="w-3 h-3 text-[#6366f1]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                        Last sync
                      </span>
                      <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#ede9fe] text-[#5b21b6] border border-[#ddd6fe]">CRON</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-[#f3f4f6]">
                      {[
                        { label: "DATE",    value: "29/03/2026 06:00" },
                        { label: "STORE",   value: "Tienda A" },
                        { label: "UPDATED", value: <span className="text-[#065f46]">423 / 450</span> },
                        { label: "ERRORS",  value: <span className="text-[#065f46]">0</span> },
                      ].map((item, i) => (
                        <div key={i} className={`px-3 py-2 ${i >= 2 ? "border-t border-[#f3f4f6]" : ""}`}>
                          <div className="text-[8px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-0.5">{item.label}</div>
                          <div className="text-[11px] font-semibold text-[#1f2937]">{item.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-[#f3f4f6]">
                      <span className="text-[10px] text-[#6366f1] font-medium">View full history →</span>
                    </div>
                  </div>

                  {/* API Key panel */}
                  <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
                    <div className="flex items-center px-4 py-2.5 bg-[#f9fafb] border-b border-[#f3f4f6]">
                      <span className="text-[11px] font-semibold text-[#374151] flex items-center gap-1.5">
                        <svg className="w-3 h-3 text-[#6366f1]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd"/></svg>
                        API Key
                      </span>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="flex items-center gap-2 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg px-3 py-2">
                        <span className="flex-1 font-mono text-[10px] text-[#6b7280] tracking-widest">••••••••••••••••••••••••••••••••</span>
                        <button className="text-[9px] font-medium px-2 py-1 bg-white border border-[#d1d5db] rounded text-[#4b5563] shadow-sm" aria-label="Copy API key">Copy</button>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3f4f6] border border-[#e5e7eb] rounded-full">
                        <svg className="w-3 h-3 text-[#6b7280]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                        <span className="font-mono text-[9px] text-[#6b7280]">tutienda.com/wp-json/stocksync/v1/sync</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
