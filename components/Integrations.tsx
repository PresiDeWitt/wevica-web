export default function Integrations() {
  const integrations = [
    {
      name: "WordPress",
      logo: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="#21759B" />
          <path
            d="M4.3 24C4.3 35 11.7 44.2 21.8 47L6 8.8C4.9 13.5 4.3 18.7 4.3 24zM37.2 23c0-3.4-1.2-5.7-2.2-7.5-1.4-2.2-2.7-4.1-2.7-6.3 0-2.5 1.9-4.8 4.5-4.8h.3C32 .9 28.2 0 24.2 0 18 0 12.5 3 9.1 7.6h2c3.3 0 8.4-.4 8.4-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.6.3l11.4 33.9 6.9-20.5-4.9-13.4c-1.7-.1-3.3-.3-3.3-.3-1.7-.1-1.5-2.7.2-2.6 0 0 5.2.4 8.3.4 3.3 0 8.4-.4 8.4-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.6.3L51 43.9C37.4 43.9 26 34.1 26 22.2c0-1.2.1-2.4.3-3.6L22 18c.7 4.5 1.3 9.6 1.3 9.6-.1 1.7-2.7 1.9-2.8.1 0 0-.4-4.7-1-8.3L8.5 44c4.3 2.4 9.2 3.7 14.5 3.7C35.7 47.7 43.7 37 43.7 24c0-1.1 0-2.1-.1-3.1l-4.9 2.1c1 0 .5 0-1.5 0z"
            fill="white"
            opacity="0.9"
          />
        </svg>
      ),
      label: "WordPress",
      sublabel: "5.x / 6.x",
    },
    {
      name: "WooCommerce",
      logo: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#7F54B3" />
          <path
            d="M5 14.5C5 12.6 6.6 11 8.5 11h31c1.9 0 3.5 1.6 3.5 3.5v10c0 1.9-1.6 3.5-3.5 3.5h-4l2 7-7-7H8.5C6.6 28 5 26.4 5 24.5v-10z"
            fill="white"
            opacity="0.15"
          />
          <path
            d="M6.4 15.2c.4-.6 1-.9 1.8-.8.7.1 1.1.5 1.2 1.3l1.7 9 3.7-7c.3-.6.7-.9 1.3-.9.5 0 .9.3 1.1.9l2.1 5.4c.6-4.3 1.5-7.4 2.9-9.5.4-.6 1-.8 1.7-.5.6.3.9.8.7 1.5-.9 1.6-1.7 4.5-2.3 8.7-.6 4-.7 7.2-.5 9.5.1.6-.1 1.2-.6 1.5s-1 .3-1.6-.1c-1.8-1.6-3.2-4.2-4.3-7.7l-2.4 4.6c-.8 1.5-1.7 2.3-2.7 2.3-.7 0-1.2-.4-1.5-1.3L6 17.1c-.2-.8 0-1.4.4-1.9z"
            fill="white"
          />
          <path
            d="M41.4 19.5c-.6-1.1-1.5-1.8-2.8-2.1-1-.2-2 0-2.8.5-.6.4-1 .9-1.3 1.5-.3.7-.4 1.4-.4 2.2 0 1.1.3 2 .9 2.8.7.9 1.6 1.4 2.8 1.4.9 0 1.7-.3 2.4-.8.6-.5 1-.9 1.2-1.4.4-.8.5-1.7.4-2.6-.1-.6-.2-1.1-.4-1.5zm-2.4 4.3c-.4.4-.8.6-1.3.6-.6 0-1.1-.3-1.4-.8-.2-.4-.3-.9-.3-1.5 0-.5.1-.9.3-1.2.3-.5.7-.7 1.3-.7.5 0 .9.2 1.3.5.4.4.6 1 .6 1.7 0 .6-.2 1-.5 1.4z"
            fill="white"
          />
          <path
            d="M33.2 19.5c-.6-1.1-1.5-1.8-2.8-2.1-1-.2-2 0-2.8.5-.6.4-1 .9-1.3 1.5-.3.7-.4 1.4-.4 2.2 0 1.1.3 2 .9 2.8.7.9 1.6 1.4 2.8 1.4.9 0 1.7-.3 2.4-.8.6-.5 1-.9 1.2-1.4.4-.8.5-1.7.4-2.6-.1-.6-.2-1.1-.4-1.5zm-2.4 4.3c-.4.4-.8.6-1.3.6-.6 0-1.1-.3-1.4-.8-.2-.4-.3-.9-.3-1.5 0-.5.1-.9.3-1.2.3-.5.7-.7 1.3-.7.5 0 .9.2 1.3.5.4.4.6 1 .6 1.7 0 .6-.2 1-.5 1.4z"
            fill="white"
          />
        </svg>
      ),
      label: "WooCommerce",
      sublabel: "7.x / 8.x / 9.x",
    },
    {
      name: "Excel",
      logo: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#217346" />
          <path d="M28 8H14a2 2 0 00-2 2v28a2 2 0 002 2h20a2 2 0 002-2V18L28 8z" fill="white" opacity="0.15" />
          <path d="M28 8v10h10" stroke="white" strokeWidth="2" opacity="0.5" />
          <path d="M17 22l4 8m0-8l-4 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M25 22v8M25 22h5a2 2 0 010 4h-5m0 0h5.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      label: "Excel / CSV",
      sublabel: "Feeds de datos",
    },
    {
      name: "REST API",
      logo: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#0f172a" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
          <path d="M8 24h7m17 0h8M20 24a4 4 0 008 0m-8 0a4 4 0 018 0" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 16l-4 8 4 8" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33 16l4 8-4 8" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: "REST API",
      sublabel: "JSON / XML",
    },
    {
      name: "Scraping",
      logo: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#0f172a" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
          <path d="M12 14h24v4H12z" fill="#6366f1" opacity="0.3" rx="2" />
          <path d="M12 22h18" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 28h14" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 34h10" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="38" cy="30" r="6" fill="#6366f1" opacity="0.2" stroke="#6366f1" strokeWidth="1.5" />
          <path d="M35.5 30l1.5 1.5 3-3" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: "Web Scraping",
      sublabel: "Sync Engine",
    },
    {
      name: "CRON",
      logo: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
          <rect width="48" height="48" rx="10" fill="#0f172a" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="13" stroke="#6366f1" strokeWidth="2" opacity="0.4" />
          <circle cx="24" cy="24" r="9" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
          <path d="M24 17v7l4 4" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: "Cron / Webhooks",
      sublabel: "Automatización",
    },
  ];

  return (
    <section
      className="py-14 px-4 sm:px-6 border-y border-white/[0.05]"
      aria-labelledby="integrations-heading"
    >
      <div className="max-w-5xl mx-auto">
        <p
          id="integrations-heading"
          className="text-center text-xs font-semibold text-[#475569] uppercase tracking-widest mb-8"
        >
          Compatible con las herramientas que ya usas
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2 group"
              aria-label={`${item.label} — ${item.sublabel}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:bg-white/[0.07] group-hover:border-white/[0.12] transition-all duration-200">
                {item.logo}
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold text-[#94a3b8] leading-tight">
                  {item.label}
                </div>
                <div className="text-[10px] text-[#475569] leading-tight mt-0.5">
                  {item.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
