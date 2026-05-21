"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-3 px-4 sm:px-6" : "pt-0 px-0"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "max-w-4xl px-6 h-12 rounded-full border border-white/[0.04] bg-[#0c0c0e]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            : "max-w-6xl px-4 sm:px-6 h-16 border-b border-transparent bg-transparent"
        }`}
        aria-label="Navegación principal"
      >
        {/* Logo */}
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

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { href: "/#caracteristicas", label: "Características" },
            { href: "/pricing", label: "Precios" },
            { href: "/#como-funciona", label: "Cómo funciona" },
            { href: "/docs", label: "Docs" },
            { href: "/blog", label: "Blog" },
            { href: "/sync-engine", label: "Sync Engine" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/descargar"
            className="btn-primary lemonsqueezy-button px-4 py-1.5 text-xs inline-flex items-center gap-1.5"
            aria-label="Empezar gratis - 7 días sin tarjeta de crédito"
          >
            <span>Probar gratis</span>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-4 bg-[#0c0c0e]/95 backdrop-blur-xl border border-white/[0.04] rounded-2xl p-4 flex flex-col gap-3 shadow-2xl">
          {[
            { href: "/#caracteristicas", label: "Características" },
            { href: "/pricing", label: "Precios" },
            { href: "/#como-funciona", label: "Cómo funciona" },
            { href: "/docs", label: "Docs" },
            { href: "/blog", label: "Blog" },
            { href: "/sync-engine", label: "Sync Engine" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white py-1.5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/descargar"
            className="btn-primary lemonsqueezy-button px-4 py-2 text-xs text-center mt-1"
            onClick={() => setMobileOpen(false)}
          >
            <span>Probar gratis</span>
          </Link>
        </div>
      )}
    </header>
  );
}
