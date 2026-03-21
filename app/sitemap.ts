import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://stocksyncpro.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terminos`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];
}
