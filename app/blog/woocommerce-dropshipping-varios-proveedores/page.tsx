import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce y dropshipping: cómo gestionar el stock de varios proveedores a la vez",
  description: "Si tu tienda WooCommerce trabaja con múltiples proveedores en dropshipping, gestionar el stock manualmente es inviable. Aquí la solución.",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  author: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  publisher: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stocksync.es/blog/woocommerce-dropshipping-varios-proveedores" },
};

export const metadata: Metadata = {
  title: "WooCommerce y dropshipping: cómo gestionar el stock de varios proveedores a la vez",
  description: "Si tu tienda WooCommerce trabaja con múltiples proveedores en dropshipping, gestionar el stock manualmente es inviable. Aquí la solución.",
  openGraph: {
    title: "WooCommerce dropshipping: gestiona el stock de varios proveedores automáticamente",
    description: "Varios proveedores, un solo WooCommerce. Automatiza la sincronización de stock.",
    type: "article",
    publishedTime: "2026-03-22",
  },
};

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <article className="min-h-screen pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="pt-12 mb-10">
            <Link href="/blog" className="text-sm text-[#64748b] hover:text-[#f1f5f9] transition-colors inline-flex items-center gap-1 mb-6">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M10 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Volver al blog
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(99,102,241,0.12)] border border-[rgba(99,102,241,0.2)] text-[#a5b4fc]">
                Guía
              </span>
              <span className="text-xs text-[#475569]">22 de marzo de 2026 · 6 min lectura</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#f1f5f9] leading-tight mb-4">
              WooCommerce y dropshipping: cómo gestionar el stock de varios proveedores a la vez
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed">
              El dropshipping con WooCommerce funciona bien cuando tienes uno o dos proveedores. Cuando son cinco o diez, gestionar el inventario se convierte en un caos sin un sistema de sincronización automatizado.
            </p>
          </div>

          {/* Content */}
          <div className="prose-wevica">

            <h2>El reto del multiproveedor en WooCommerce</h2>
            <p>
              Una tienda de dropshipping típica trabaja con varios proveedores simultáneamente: cada uno con su propio catálogo, su propio formato de datos, su propia frecuencia de actualización de stock y sus propias reglas de precios. El mismo producto puede estar disponible en dos proveedores a precios distintos, y el stock de uno puede agotarse mientras el otro sigue teniendo unidades.
            </p>
            <p>
              Coordinar todo eso manualmente implica:
            </p>
            <ul>
              <li>Revisar el catálogo de cada proveedor por separado</li>
              <li>Cruzar referencias entre proveedores y WooCommerce</li>
              <li>Actualizar stock y precios en WooCommerce uno a uno</li>
              <li>Decidir qué proveedor usar cuando hay stock en varios</li>
            </ul>
            <p>
              Con cinco proveedores y mil referencias cada uno, esto es completamente inviable de forma manual.
            </p>

            <h2>Estrategia para gestionar múltiples proveedores</h2>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">1. Unificar por SKU</h3>
            <p>
              El primer paso es usar el SKU del producto como identificador único. Cada producto en WooCommerce debe tener un SKU que coincida con la referencia del proveedor (o un mapeo claro entre ellos). Sin esto, el sistema no sabe qué producto de WooCommerce corresponde a qué línea del catálogo del proveedor.
            </p>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">2. Fuentes de datos separadas por proveedor</h3>
            <p>
              Stock Sync Pro permite configurar múltiples fuentes de datos de forma independiente. Cada proveedor tiene su propia configuración: URL del feed, formato (CSV, API, scraping), frecuencia de sync y reglas de precio. El plugin gestiona cada fuente por separado y actualiza WooCommerce con los datos del proveedor correspondiente a cada producto.
            </p>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">3. Prioridad de proveedor</h3>
            <p>
              Cuando el mismo producto está disponible en varios proveedores, necesitas definir una prioridad. Por ejemplo: usar siempre el proveedor A si tiene stock, y caer al proveedor B como backup. Esta lógica se puede configurar en el plugin mediante reglas de prioridad por fuente de datos.
            </p>

            <h2>Formatos de datos habituales por tipo de proveedor</h2>

            <div className="glass-card rounded-xl p-6 my-6">
              <div className="flex flex-col gap-4 text-sm">
                {[
                  {
                    type: "Grandes distribuidores nacionales",
                    format: "API REST o FTP con CSV diario",
                    color: "#6366f1",
                  },
                  {
                    type: "Mayoristas tradicionales",
                    format: "CSV o Excel semanal por email o descarga directa",
                    color: "#8b5cf6",
                  },
                  {
                    type: "Proveedores con portal web propio",
                    format: "Sin API — requiere Sync Engine (scraping gestionado)",
                    color: "#a78bfa",
                  },
                  {
                    type: "Plataformas de dropshipping (BigBuy, etc.)",
                    format: "API REST documentada o feed XML",
                    color: "#7c3aed",
                  },
                ].map((item) => (
                  <div key={item.type} className="flex gap-3">
                    <div className="w-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                    <div>
                      <p className="font-semibold text-[#f1f5f9]">{item.type}</p>
                      <p className="text-[#64748b] text-xs mt-0.5">{item.format}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2>El caso especial del scraping multiproveedor</h2>
            <p>
              Algunos proveedores no tienen API ni feed descargable — solo un portal web con login. Para este caso existe el <strong>Sync Engine</strong>: un servicio gestionado donde nos encargamos de extraer los datos de cada portal y enviarlos al plugin automáticamente.
            </p>
            <p>
              Puedes combinar sin problema proveedores con API, proveedores con CSV y proveedores que requieren Sync Engine en la misma tienda. Cada fuente se gestiona de forma independiente.
            </p>

            <h2>Resultado: una tienda que se gestiona sola</h2>
            <p>
              Una tienda de dropshipping bien configurada con Stock Sync Pro funciona así: los productos de cada proveedor se actualizan automáticamente según la frecuencia configurada. Cuando un artículo se agota en el proveedor A, WooCommerce lo marca como sin stock (o activa el proveedor B si está configurado como backup). El responsable de la tienda recibe un resumen diario por Telegram con los cambios aplicados.
            </p>
            <p>
              Sin intervención manual. Sin pedidos de artículos agotados. Sin horas perdidas actualizando hojas de cálculo.
            </p>

            {/* CTA */}
            <div className="glass-card rounded-2xl p-8 mt-10 text-center">
              <p className="text-[#f1f5f9] font-bold text-lg mb-2">Gestiona todos tus proveedores desde un solo plugin</p>
              <p className="text-[#64748b] text-sm mb-6">7 días gratis. Soporte en español incluido.</p>
              <Link
                href="https://wevica.lemonsqueezy.com/buy/16216ef2-9646-4aca-9c04-8ea7fb001cd5"
                className="lemonsqueezy-button btn-primary px-7 py-3 text-sm inline-flex items-center gap-2 glow-primary"
              >
                <span>Instalar Stock Sync Pro</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
