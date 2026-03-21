import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stocksyncpro.com"),
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
  authors: [{ name: "Stock Sync Pro", url: "https://stocksyncpro.com" }],
  creator: "Stock Sync Pro",
  publisher: "Stock Sync Pro",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://stocksyncpro.com",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
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
        <Script
          src="https://app.lemonsqueezy.com/js/lemon.js"
          defer
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
