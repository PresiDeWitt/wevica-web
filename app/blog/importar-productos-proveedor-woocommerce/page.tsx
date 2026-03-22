import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo importar productos de tu proveedor a WooCommerce automáticamente",
  description: "Guía completa para importar y mantener actualizado el catálogo de tu proveedor en WooCommerce sin trabajo manual. Opciones para CSV, API y portales web.",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  author: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  publisher: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stocksync.es/blog/importar-productos-proveedor-woocommerce" },
};

export const metadata: Metadata = {
  title: "Cómo importar productos de tu proveedor a WooCommerce automáticamente",
  description: "Importa y mantén actualizado el catálogo de tu proveedor en WooCommerce sin trabajo manual. Guía completa para CSV, API y portales web.",
  openGraph: {
    title: "Importar productos de proveedor a WooCommerce automáticamente",
    description: "Deja de importar catálogos a mano. Guía completa de automatización.",
    type: "article",
    publishedTime: "2026-03-22",
  },
};

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <article className="min-h-screen pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="pt-12 mb-10">
            <Link href="/blog" className="text-sm text-[#64748b] hover:text-[#f1f5f9] transition-colors inline-flex items-center gap-1 mb-6">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M10 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Volver al blog
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(99,102,241,0.12)] border border-[rgba(99,102,241,0.2)] text-[#a5b4fc]">Tutorial</span>
              <span className="text-xs text-[#475569]">22 de marzo de 2026 · 5 min lectura</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#f1f5f9] leading-tight mb-4">
              Cómo importar productos de tu proveedor a WooCommerce automáticamente
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed">
              Importar el catálogo de un proveedor a WooCommerce manualmente es una tarea que puede llevar horas. Y lo peor es que hay que repetirla cada vez que el proveedor actualiza precios o stock. Aquí cómo hacerlo de forma automática.
            </p>
          </div>

          <div className="prose-wevica">
            <h2>La diferencia entre importar y sincronizar</h2>
            <p>Importar es un proceso puntual: subes un archivo, WooCommerce crea los productos, y ya. El problema es que el catálogo del proveedor cambia constantemente — precios, stock, nuevas referencias, referencias descatalogadas.</p>
            <p><strong>Sincronizar</strong> es un proceso continuo: el sistema compara periódicamente el catálogo del proveedor con WooCommerce y aplica los cambios automáticamente. Eso es lo que necesitas si quieres operar sin intervención manual.</p>

            <h2>Qué información se puede importar del proveedor</h2>
            <ul>
              <li><strong>Stock/inventario:</strong> cuántas unidades hay disponibles por referencia</li>
              <li><strong>Precio de coste:</strong> para calcular automáticamente el PVP con el margen configurado</li>
              <li><strong>Precio de venta sugerido:</strong> si el proveedor lo proporciona</li>
              <li><strong>Nombre y descripción:</strong> para crear nuevos productos</li>
              <li><strong>EAN/código de barras:</strong> para cruzar referencias entre proveedor y WooCommerce</li>
              <li><strong>Estado:</strong> activo, descatalogado, bajo pedido</li>
            </ul>

            <h2>Tipos de fuente de datos y cómo se procesan</h2>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">CSV / Excel</h3>
            <p>El formato más común entre distribuidores españoles. Stock Sync Pro descarga el archivo automáticamente (si está en una URL accesible) o acepta subidas manuales periódicas. El mapeo de columnas se configura una vez.</p>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">API REST</h3>
            <p>El método más limpio y rápido. Si tu proveedor tiene una API documentada, el plugin hace una petición GET al endpoint, recibe el JSON y actualiza WooCommerce. Soporta autenticación por API key, Bearer token y Basic Auth.</p>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">Portal web (scraping)</h3>
            <p>Para proveedores que solo tienen un portal web con login. El Sync Engine de Stock Sync Pro extrae los datos automáticamente y los envía al plugin, sin que tengas que hacer nada.</p>

            <h2>Flujo completo de importación automática</h2>
            <div className="glass-card rounded-xl p-6 my-6">
              <div className="flex flex-col gap-0">
                {[
                  { step: "Fuente", desc: "CSV en URL del proveedor / API REST / portal web (Sync Engine)" },
                  { step: "Descarga", desc: "Stock Sync Pro obtiene los datos según el schedule configurado" },
                  { step: "Transformación", desc: "Mapeo de campos, aplicación de márgenes, filtros por categoría" },
                  { step: "Actualización", desc: "Solo se modifican los productos que han cambiado en WooCommerce" },
                  { step: "Notificación", desc: "Resumen por Telegram con productos actualizados y posibles errores" },
                ].map((item, i) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-[rgba(99,102,241,0.2)] text-[#6366f1] text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                      {i < 4 && <div className="w-px h-6 bg-[rgba(99,102,241,0.15)] my-1" />}
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-semibold text-[#f1f5f9]">{item.step}</p>
                      <p className="text-xs text-[#64748b]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2>¿Qué pasa con los productos nuevos del proveedor?</h2>
            <p>Cuando el proveedor añade una referencia nueva a su catálogo, tienes dos opciones en Stock Sync Pro: crear el producto automáticamente en WooCommerce (con los datos disponibles) o simplemente ignorar las referencias nuevas y solo actualizar las existentes. La opción por defecto es actualizar solo las existentes, para evitar crear productos sin descripción ni imágenes.</p>

            <div className="glass-card rounded-2xl p-8 mt-10 text-center">
              <p className="text-[#f1f5f9] font-bold text-lg mb-2">Automatiza la importación de tu catálogo</p>
              <p className="text-[#64748b] text-sm mb-6">Compatible con cualquier formato de proveedor. 7 días gratis.</p>
              <Link href="https://wevica.lemonsqueezy.com/buy/16216ef2-9646-4aca-9c04-8ea7fb001cd5" className="lemonsqueezy-button btn-primary px-7 py-3 text-sm inline-flex items-center gap-2 glow-primary">
                <span>Instalar Stock Sync Pro</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
