import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 pb-20 overflow-hidden grid-bg"
      aria-label="Presentación principal de Stock Sync Pro"
    >
      {/* Background glow */}
      <div className="hero-glow" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(245,245,240,0.02)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <div style={{ animation: "heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both" }}>
          <span className="badge" role="status">
            <span className="badge-dot" aria-hidden="true" />
            7 días gratis · Sin tarjeta de crédito
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6.5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#f5f5f0]" style={{ animation: "heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both" }}>
          Tu stock,
          <br />
          <span className="font-serif italic font-normal text-zinc-300">siempre al día.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-light" style={{ animation: "heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both" }}>
          <strong className="text-[#f5f5f0] font-semibold">Stock Sync Pro</strong> conecta tu tienda WooCommerce con tus proveedores y mantiene el stock y los precios actualizados de forma automática, sin parar.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-2" style={{ animation: "heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both" }}>
          <Link
            href="/descargar"
            className="btn-primary px-7 py-3.5 text-sm inline-flex items-center gap-2 glow-primary"
            aria-label="Instalar el plugin Stock Sync Pro"
          >
            <span>Instalar el plugin</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/pricing"
            className="btn-secondary px-7 py-3.5 text-sm inline-flex items-center gap-2"
          >
            Ver precios
          </Link>
        </div>

        {/* Trust signal */}
        <p className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase mt-1" style={{ animation: "heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both" }}>
          Instalación rápida en 2 min · Reembolso garantizado · Plugin certificado
        </p>

        {/* Hero visual — High-fidelity premium interface */}
        <div className="mt-12 w-full max-w-3.5xl" style={{ animation: "heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both" }}>
          {/* Outer frame */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-white/[0.02] shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
            {/* Browser container */}
            <div className="bg-[#0f1013] rounded-2xl overflow-hidden border border-white/[0.08]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3.5 border-b border-white/[0.08] bg-[#0c0d10]">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>
                <div className="flex-1 mx-3 bg-white/[0.02] border border-white/[0.06] rounded-md py-1 px-3 text-[10px] text-zinc-400 text-left font-mono tracking-wide">
                  mitienda.com/wp-admin · Stock Sync Pro
                </div>
              </div>

              {/* Plugin UI — Premium technical dark interface */}
              <div className="bg-[#121316] p-6 text-left">
                {/* Page header */}
                <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-sm font-bold text-[#f5f5f0] tracking-tight leading-tight">Stock Sync Pro</div>
                      <div className="text-[10px] text-zinc-400 mt-0.5 tracking-wide uppercase">Consola de Control del Catálogo</div>
                    </div>
                    <span className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-200 border border-white/[0.12] font-mono">
                      v5.1.2
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.12] text-[10px] text-zinc-300 font-semibold tracking-wide hover:text-white transition-colors cursor-pointer">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    Ajustes de Sincronización
                  </div>
                </div>

                {/* Stat cards — 4 columnas de precisión */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Sincronizaciones", value: "2.847", meta: "Acumulado total", accent: "border-l-[#f5f5f0]" },
                    { label: "Actualizados", value: "1.654", meta: "Productos en catálogo", accent: "border-l-[#10b981]" },
                    { label: "Errores detectados", value: "0", meta: "100% efectividad", accent: "border-l-[#10b981]" },
                    { label: "Orígenes conectados", value: "3", meta: "Casa Picota, X3 Pádel, Sheets", accent: "border-l-[#d97706]" },
                  ].map((card) => (
                    <div key={card.label} className={`relative bg-white/[0.02] rounded-xl border border-white/[0.08] border-l-2 ${card.accent} p-4 flex flex-col justify-between`}>
                      <div>
                        <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{card.label}</div>
                        <div className="text-2xl font-mono font-bold text-[#f5f5f0] tracking-tight leading-none mb-1.5">{card.value}</div>
                      </div>
                      <div className="text-[10px] text-zinc-400 font-medium truncate mt-1">{card.meta}</div>
                    </div>
                  ))}
                </div>

                {/* Real-time sync log console */}
                <div className="flex flex-col rounded-xl border border-white/[0.08] bg-white/[0.01] overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/[0.08]">
                    <span className="text-[10px] font-semibold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                      Monitor del Sync Engine — En vivo (24/7)
                    </span>
                    <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">EJECUTANDO</span>
                  </div>
                  <div className="p-4 font-mono text-[10px] text-zinc-400 leading-relaxed space-y-1 bg-black/20">
                    <p><span className="text-zinc-500">[22:38:05]</span> <span className="text-zinc-300">[SYSTEM]</span> Iniciando comprobación programada (CRON)...</p>
                    <p><span className="text-zinc-500">[22:38:07]</span> <span className="text-zinc-300">[ENGINE]</span> Conectando con API de proveedor <span className="text-zinc-200">"Casa Picota"</span>... OK</p>
                    <p><span className="text-zinc-500">[22:38:10]</span> <span className="text-zinc-300">[PARSER]</span> Procesando feed de stock (3.318 artículos mapeados)...</p>
                    <p className="text-[#10b981]"><span className="text-zinc-500">[22:38:12]</span> <span className="text-[#10b981] font-semibold">[UPDATE]</span> Zapatillas Pádel Carbono: Stock modificado [12 → 15]</p>
                    <p className="text-[#10b981]"><span className="text-zinc-500">[22:38:13]</span> <span className="text-[#10b981] font-semibold">[UPDATE]</span> Pala Pro Gold 2026: Precio modificado [€189.90 → €179.90]</p>
                    <p><span className="text-zinc-500">[22:38:14]</span> <span className="text-zinc-300">[SYNC]</span> WooCommerce stock actualizado. 0 errores. Tasa de éxito: 100%.</p>
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
