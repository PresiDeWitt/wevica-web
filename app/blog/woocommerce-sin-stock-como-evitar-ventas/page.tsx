import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ventas de productos sin stock en WooCommerce: cómo evitarlo definitivamente",
  description: "Si tu tienda WooCommerce vende productos que ya no tienes en stock, estás generando devoluciones y perdiendo clientes. Esta guía explica por qué pasa y cómo solucionarlo.",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  author: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  publisher: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stocksync.es/blog/woocommerce-sin-stock-como-evitar-ventas" },
};

export const metadata: Metadata = {
  title: "Ventas de productos sin stock en WooCommerce: cómo evitarlo definitivamente",
  description: "Si tu tienda vende productos agotados, pierdes clientes y dinero. Aquí por qué ocurre en WooCommerce y cómo solucionarlo con sincronización automática.",
  openGraph: {
    title: "Cómo evitar vender productos sin stock en WooCommerce",
    description: "La causa más frecuente de devoluciones en tiendas WooCommerce — y cómo eliminarla.",
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
              <span className="text-xs text-[#475569]">22 de marzo de 2026 · 5 min lectura</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#f1f5f9] leading-tight mb-4">
              Ventas de productos sin stock en WooCommerce: cómo evitarlo definitivamente
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed">
              Un cliente compra, tú aceptas el pago, y luego descubres que el proveedor no tiene ese artículo. Tienes que cancelar, devolver el dinero y gestionar un cliente enfadado. Es el error más costoso en ecommerce — y el más evitable.
            </p>
          </div>

          <div className="prose-wevica">

            <h2>Por qué ocurre en WooCommerce</h2>
            <p>
              WooCommerce tiene un sistema de gestión de stock propio, pero ese sistema solo sabe lo que tú le dices. Si tu proveedor agota un artículo a las 9 de la mañana y tú actualizas WooCommerce el jueves por la tarde, durante esos días tu tienda sigue mostrando ese artículo como disponible y aceptando pedidos.
            </p>
            <p>
              Las causas más habituales:
            </p>
            <ul>
              <li><strong>Actualización manual tardía:</strong> simplemente no hay tiempo de revisar el catálogo del proveedor cada día.</li>
              <li><strong>Sin sistema de alerta:</strong> el proveedor no te notifica cuando un artículo se agota.</li>
              <li><strong>Importación CSV infrecuente:</strong> si importas el catálogo semanalmente, una semana entera de ventas puede ser sobre stock inexistente.</li>
              <li><strong>Múltiples proveedores:</strong> coordinar el stock de varios proveedores manualmente es prácticamente imposible.</li>
            </ul>

            <h2>El coste real de vender sin stock</h2>
            <p>
              El impacto va más allá de la devolución puntual:
            </p>

            <div className="glass-card rounded-xl p-6 my-6">
              <ul className="flex flex-col gap-4 text-sm">
                {[
                  { icon: "💸", title: "Costes directos", desc: "Devolución del pago + gastos de gestión + coste de atención al cliente. En promedio, una devolución cuesta entre €5 y €15 en tiempo y recursos." },
                  { icon: "⭐", title: "Reputación", desc: "Un cliente que recibe una cancelación raramente vuelve a comprar. En plataformas como Google My Business o Trustpilot, deja una reseña negativa." },
                  { icon: "📉", title: "Posicionamiento SEO", desc: "Una tasa de devoluciones alta afecta la reputación del vendedor en comparadores de precios y puede penalizar en SEO de producto." },
                  { icon: "⏱️", title: "Tiempo del equipo", desc: "Gestionar cancelaciones y devoluciones consume tiempo que podría destinarse a crecer el negocio." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-[#f1f5f9] mb-0.5">{item.title}</p>
                      <p className="text-[#64748b]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <h2>La solución: sincronización automática del stock</h2>
            <p>
              La única forma de eliminar este problema definitivamente es que WooCommerce se actualice automáticamente desde la fuente de verdad: el catálogo real del proveedor.
            </p>
            <p>
              Stock Sync Pro hace exactamente esto. Conecta directamente con el catálogo de tu proveedor — en cualquier formato — y actualiza WooCommerce automáticamente cada hora (o con la frecuencia que configures). Cuando un artículo llega a stock 0 en el proveedor, en menos de una hora ya está marcado como agotado en tu tienda.
            </p>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">¿Qué pasa cuando un artículo se agota?</h3>
            <p>
              Puedes configurar el comportamiento exacto en Stock Sync Pro:
            </p>
            <ul>
              <li><strong>Marcar como agotado:</strong> el producto sigue visible pero no se puede comprar.</li>
              <li><strong>Ocultar el producto:</strong> desaparece de la tienda hasta que vuelva a tener stock.</li>
              <li><strong>Alerta Telegram:</strong> recibes una notificación inmediata cuando un artículo se agota, para poder tomar decisiones.</li>
            </ul>

            <h2>Configuración recomendada para evitar ventas sin stock</h2>

            <div className="glass-card rounded-xl p-6 my-6">
              <ol className="flex flex-col gap-4 text-sm text-[#94a3b8] mb-0">
                {[
                  "Configura la sincronización automática cada 2 horas (plan Starter), cada hora (Pro) o cada 30 minutos (Business).",
                  "Activa las alertas por email para recibir notificación inmediata cuando el sync detecta cambios de stock.",
                  "Establece el comportamiento para stock 0: ocultar producto si no quieres que aparezca, o marcar como agotado si prefieres mantenerlo visible.",
                  "Activa el informe diario por email: cada mañana recibirás un resumen de productos actualizados y posibles incidencias.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-[rgba(99,102,241,0.2)] text-[#6366f1] text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <h2>Conclusión</h2>
            <p>
              Vender productos sin stock es un problema 100% evitable. Con una sincronización automática correctamente configurada, tu tienda WooCommerce siempre reflejará la disponibilidad real de tu proveedor. Sin sorpresas, sin cancelaciones, sin clientes enfadados.
            </p>

            <div className="glass-card rounded-2xl p-8 mt-10 text-center">
              <p className="text-[#f1f5f9] font-bold text-lg mb-2">Elimina las ventas sin stock de tu tienda</p>
              <p className="text-[#64748b] text-sm mb-6">7 días gratis. Sincronización automática desde el primer día.</p>
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
