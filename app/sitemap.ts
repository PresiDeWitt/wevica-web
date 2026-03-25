import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://stocksync.es";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/sync-engine`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/docs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${base}/blog/sincronizar-stock-woocommerce-proveedor`,
      lastModified: new Date("2026-03-21"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/conectar-woocommerce-csv-proveedor`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/sincronizar-precios-woocommerce-proveedor`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/woocommerce-dropshipping-varios-proveedores`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/woocommerce-sin-stock-como-evitar-ventas`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/alertas-stock-woocommerce-telegram`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/importar-productos-proveedor-woocommerce`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/woocommerce-api-rest-proveedor`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${base}/changelog`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terminos`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];
}
