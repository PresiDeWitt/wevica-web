import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Recursos para tiendas WooCommerce",
  description: "Artículos sobre sincronización de stock WooCommerce, automatización de inventario y cómo vender más en tu tienda online.",
};

const posts = [
  {
    slug: "woocommerce-sin-stock-como-evitar-ventas",
    title: "Ventas de productos sin stock en WooCommerce: cómo evitarlo definitivamente",
    excerpt: "Un cliente compra, tú aceptas el pago y luego no tienes el artículo. Es el error más costoso en ecommerce — y el más evitable con la configuración correcta.",
    date: "2026-03-22",
    readTime: "5 min",
    tag: "Guía",
  },
  {
    slug: "woocommerce-dropshipping-varios-proveedores",
    title: "WooCommerce y dropshipping: cómo gestionar el stock de varios proveedores a la vez",
    excerpt: "El dropshipping con múltiples proveedores es inviable si gestionas el stock manualmente. Aprende a automatizarlo con una sola herramienta.",
    date: "2026-03-22",
    readTime: "6 min",
    tag: "Guía",
  },
  {
    slug: "sincronizar-precios-woocommerce-proveedor",
    title: "Cómo sincronizar los precios de WooCommerce con tu proveedor automáticamente",
    excerpt: "Si tu proveedor cambia precios con frecuencia y no los actualizas a tiempo, vendes con menos margen del que crees. Aquí cómo automatizarlo.",
    date: "2026-03-22",
    readTime: "5 min",
    tag: "Tutorial",
  },
  {
    slug: "conectar-woocommerce-csv-proveedor",
    title: "Cómo conectar WooCommerce con un CSV de tu proveedor (sin programar)",
    excerpt: "La mayoría de proveedores ofrecen su catálogo en CSV. Si lo importas a mano, estás perdiendo horas cada semana. Guía completa para automatizarlo.",
    date: "2026-03-22",
    readTime: "5 min",
    tag: "Tutorial",
  },
  {
    slug: "sincronizar-stock-woocommerce-proveedor",
    title: "Cómo sincronizar el stock de WooCommerce con tu proveedor automáticamente",
    excerpt: "Si actualizas el inventario de tu tienda a mano, estás perdiendo ventas y tiempo. Te explicamos cómo automatizarlo en menos de 5 minutos.",
    date: "2026-03-21",
    readTime: "6 min",
    tag: "Tutorial",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="pt-12 mb-12">
            <div className="badge mb-4 inline-flex">
              <span className="badge-dot" aria-hidden="true" />
              Blog
            </div>
            <h1 className="text-4xl font-black tracking-tight mb-3">
              Recursos para <span className="gradient-text">tiendas WooCommerce</span>
            </h1>
            <p className="text-[#64748b] text-lg">
              Guías, tutoriales y casos prácticos para automatizar tu inventario y vender más.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card glass-card-hover rounded-2xl p-7 block group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(99,102,241,0.12)] border border-[rgba(99,102,241,0.2)] text-[#a5b4fc]">
                    {post.tag}
                  </span>
                  <span className="text-xs text-[#475569]">{post.date} · {post.readTime} lectura</span>
                </div>
                <h2 className="text-xl font-bold text-[#f1f5f9] mb-2 group-hover:text-white transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#64748b] text-sm leading-relaxed">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-[#6366f1] text-sm font-medium mt-4">
                  Leer artículo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
