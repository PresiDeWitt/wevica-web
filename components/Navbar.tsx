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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06060e]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Stock Sync Pro - Inicio"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] transition-shadow duration-300">
            <svg
              width="16"
              height="16"
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
          <span className="text-lg font-bold gradient-text">Stock Sync Pro</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#caracteristicas"
            className="text-sm font-medium text-[#64748b] hover:text-[#f1f5f9] transition-colors duration-200"
          >
            Características
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-[#64748b] hover:text-[#f1f5f9] transition-colors duration-200"
          >
            Precios
          </Link>
          <Link
            href="/#como-funciona"
            className="text-sm font-medium text-[#64748b] hover:text-[#f1f5f9] transition-colors duration-200"
          >
            Cómo funciona
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://wevica.lemonsqueezy.com/buy/16216ef2-9646-4aca-9c04-8ea7fb001cd5"
            className="btn-primary lemonsqueezy-button px-4 py-2 text-sm inline-flex items-center gap-1.5"
            aria-label="Empezar gratis - 7 días sin tarjeta de crédito"
          >
            <span>Empezar gratis</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#64748b] hover:text-[#f1f5f9] hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#06060e]/95 backdrop-blur-xl border-b border-white/[0.06] px-4 py-4 flex flex-col gap-4">
          <Link
            href="/#caracteristicas"
            className="text-sm font-medium text-[#64748b] hover:text-[#f1f5f9] py-2 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Características
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-[#64748b] hover:text-[#f1f5f9] py-2 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Precios
          </Link>
          <Link
            href="/#como-funciona"
            className="text-sm font-medium text-[#64748b] hover:text-[#f1f5f9] py-2 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Cómo funciona
          </Link>
          <Link
            href="https://wevica.lemonsqueezy.com/buy/16216ef2-9646-4aca-9c04-8ea7fb001cd5"
            className="btn-primary lemonsqueezy-button px-4 py-2.5 text-sm text-center"
            onClick={() => setMobileOpen(false)}
          >
            <span>Empezar gratis</span>
          </Link>
        </div>
      )}
    </header>
  );
}
