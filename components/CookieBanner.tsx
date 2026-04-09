"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

interface Props {
  nonce?: string;
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_COOKIE = "cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, maxAge: number) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export default function CookieBanner({ nonce }: Props) {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getCookie(CONSENT_COOKIE);
    if (stored === "accepted") {
      setConsent("accepted");
    } else if (stored === "rejected") {
      setConsent("rejected");
    } else {
      setTimeout(() => setVisible(true), 1200);
    }
  }, []);

  const accept = () => {
    setCookie(CONSENT_COOKIE, "accepted", COOKIE_MAX_AGE);
    setConsent("accepted");
    setVisible(false);
  };

  const reject = () => {
    setCookie(CONSENT_COOKIE, "rejected", COOKIE_MAX_AGE);
    setConsent("rejected");
    setVisible(false);
  };

  return (
    <>
      {consent === "accepted" && GA_ID && (
        <>
          <Script
            nonce={nonce}
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script nonce={nonce} id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(GA_ID)});`}
          </Script>
        </>
      )}

      {visible && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
          role="dialog"
          aria-label="Aviso de cookies"
          aria-live="polite"
        >
          <div className="max-w-2xl mx-auto glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.12] shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#f1f5f9] mb-1">Usamos cookies</p>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Utilizamos cookies analíticas propias para mejorar tu experiencia y entender cómo se usa el sitio. No compartimos datos con terceros.{" "}
                  <Link href="/privacidad" className="text-[#6366f1] hover:underline">
                    Política de privacidad
                  </Link>
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={reject}
                  className="btn-secondary px-4 py-2 text-xs font-medium rounded-lg"
                >
                  Rechazar
                </button>
                <button
                  onClick={accept}
                  className="btn-primary px-4 py-2 text-xs font-medium rounded-lg"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
