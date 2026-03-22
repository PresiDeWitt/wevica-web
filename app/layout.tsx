import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stocksync.es"),
  title: {
    default: "Stock Sync Pro — Sincronización de stock para WooCommerce",
    template: "%s | Stock Sync Pro",
  },
  description:
    "Sincroniza el stock y precios de tu tienda WooCommerce con tus proveedores de forma automática. Plugin WordPress + servicio gestionado de scraping. Prueba 7 días gratis.",
  keywords: [
    "WooCommerce stock sync",
    "sincronizar stock proveedor",
    "plugin wordpress precio automático",
    "stock sync pro",
    "woocommerce api proveedor",
    "scraping woocommerce",
  ],
  authors: [{ name: "Stock Sync Pro", url: "https://stocksync.es" }],
  creator: "Stock Sync Pro",
  publisher: "Stock Sync Pro",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://stocksync.es",
    siteName: "Stock Sync Pro",
    title: "Stock Sync Pro — Sincronización de stock para WooCommerce",
    description:
      "Sincroniza el stock y precios de tu tienda WooCommerce con tus proveedores de forma automática. Prueba 7 días gratis.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Stock Sync Pro — Sincronización de stock para WooCommerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Sync Pro — Sincronización de stock para WooCommerce",
    description:
      "Sincroniza el stock y precios de tu tienda WooCommerce con tus proveedores de forma automática.",
    images: ["/opengraph-image"],
    creator: "@stocksyncpro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Stock Sync Pro",
  applicationCategory: "BusinessApplication",
  operatingSystem: "WordPress",
  url: "https://stocksync.es",
  description:
    "Plugin WordPress que sincroniza automáticamente el stock y precios de WooCommerce con tus proveedores. Prueba 7 días gratis.",
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "EUR",
    priceValidUntil: "2027-12-31",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
  },
  author: { "@type": "Organization", name: "Wévica", url: "https://stocksync.es" },
};

const CRISP_ID = process.env.CRISP_WEBSITE_ID;
const crispReady = CRISP_ID && CRISP_ID !== "CRISP_WEBSITE_ID_PENDIENTE";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") ?? "";

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text-primary antialiased">
        {children}
        <CookieBanner nonce={nonce} />
        <Script
          nonce={nonce}
          src="https://app.lemonsqueezy.com/js/lemon.js"
          defer
          strategy="afterInteractive"
        />
        {crispReady && (
          <Script nonce={nonce} id="crisp-chat" strategy="afterInteractive">
            {`
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="${CRISP_ID}";
              (function(){var d=document;var s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
