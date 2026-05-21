import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.08] py-16 px-4 sm:px-6 relative"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Pie de página de Stock Sync Pro
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Stock Sync Pro - Inicio"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#ffffff] to-[#71717a] flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_18px_rgba(255,255,255,0.2)] transition-all duration-300">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8l3 3 7-7"
                    stroke="#08080a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-tight text-[#f5f5f0] group-hover:text-white transition-colors duration-200">
                Stock Sync Pro
              </span>
            </Link>
            <p className="text-xs text-zinc-300 max-w-[220px] text-center md:text-left leading-relaxed font-light">
              Plugin de sincronización de stock para WooCommerce. Automático, fiable y sin complicaciones.
            </p>
          </div>

          {/* Nav groups */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <h3 className="text-[11px] font-semibold text-[#f5f5f0] uppercase tracking-wider font-mono">
                Producto
              </h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "Características", href: "/#caracteristicas" },
                  { label: "Precios", href: "/pricing" },
                  { label: "Sync Engine", href: "/sync-engine" },
                  { label: "Cómo funciona", href: "/#como-funciona" },
                  { label: "Documentación", href: "/docs" },
                  { label: "Blog", href: "/blog" },
                  { label: "Changelog", href: "/changelog" },
                  { label: "FAQ", href: "/#faq" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-zinc-400 hover:text-[#f5f5f0] transition-colors duration-200 font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[11px] font-semibold text-[#f5f5f0] uppercase tracking-wider font-mono">
                Legal y soporte
              </h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "Privacidad", href: "/privacidad" },
                  { label: "Términos de uso", href: "/terminos" },
                  { label: "Contacto", href: "/contacto" },
                  { label: "Soporte", href: "mailto:hola@wevica.com" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-zinc-400 hover:text-[#f5f5f0] transition-colors duration-200 font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-400 font-light tracking-wide">
            © 2026 Stock Sync Pro · Todos los derechos reservados
          </p>
          <p className="text-[11px] text-zinc-400 font-light tracking-wide">
            Hecho con cariño en España 🇪🇸
          </p>
        </div>
      </div>
    </footer>
  );
}

