import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.06] py-12 px-4 sm:px-6"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Pie de página de Stock Sync Pro
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Stock Sync Pro - Inicio"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.4)]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8l3 3 7-7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" opacity="0.4" />
                </svg>
              </div>
              <span className="text-base font-bold gradient-text">Stock Sync Pro</span>
            </Link>
            <p className="text-xs text-[#475569] max-w-[200px] text-center md:text-left leading-relaxed">
              Plugin de sincronización de stock para WooCommerce. Automático, sin complicaciones.
            </p>
          </div>

          {/* Nav groups */}
          <div className="flex flex-col sm:flex-row gap-10 text-center md:text-left">
            <div>
              <h3 className="text-xs font-semibold text-[#f1f5f9] uppercase tracking-widest mb-3">
                Producto
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "Características", href: "/#caracteristicas" },
                  { label: "Precios", href: "/pricing" },
                  { label: "Cómo funciona", href: "/#como-funciona" },
                  { label: "Documentación", href: "/docs" },
                  { label: "Blog", href: "/blog" },
                  { label: "Changelog", href: "/changelog" },
                  { label: "FAQ", href: "/#faq" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#64748b] hover:text-[#f1f5f9] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-[#f1f5f9] uppercase tracking-widest mb-3">
                Legal y soporte
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "Privacidad", href: "/privacidad" },
                  { label: "Términos de uso", href: "/terminos" },
                  { label: "Contacto", href: "mailto:hola@wevica.com" },
                  { label: "Soporte", href: "mailto:hola@wevica.com" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#64748b] hover:text-[#f1f5f9] transition-colors"
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
        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#334155]">
            © 2026 Stock Sync Pro · Todos los derechos reservados
          </p>
          <p className="text-xs text-[#334155]">
            Hecho con cariño en España 🇪🇸
          </p>
        </div>
      </div>
    </footer>
  );
}
