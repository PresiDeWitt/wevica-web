import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce y API REST de proveedor: cómo conectarlos sin programar",
  description: "Conecta WooCommerce con la API REST de tu proveedor para sincronizar stock y precios automáticamente. Guía práctica sin necesidad de código.",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  author: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  publisher: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stocksync.es/blog/woocommerce-api-rest-proveedor" },
};

export const metadata: Metadata = {
  title: "WooCommerce y API REST de proveedor: cómo conectarlos sin programar",
  description: "Conecta WooCommerce con la API REST de tu proveedor y sincroniza stock y precios automáticamente. Sin código, sin CSV, sin trabajo manual.",
  openGraph: {
    title: "Conectar WooCommerce con API REST de proveedor",
    description: "Sincronización automática de stock y precios vía API REST, sin programar.",
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
              WooCommerce y API REST de proveedor: cómo conectarlos sin programar
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed">
              Si tu proveedor tiene una API REST, tienes la forma más potente y fiable de sincronizar stock y precios. Sin archivos, sin descargas manuales, sin retrasos. Aquí cómo aprovecharlo sin escribir una sola línea de código.
            </p>
          </div>

          <div className="prose-wevica">
            <h2>¿Qué es una API REST y por qué es mejor que un CSV?</h2>
            <p>Un CSV es un archivo estático: el proveedor lo genera en un momento dado y tú lo descargas. Si el proveedor actualiza su stock a las 14:32, tú no lo sabrás hasta que genere el próximo archivo y lo proceses.</p>
            <p>Una API REST es un canal en tiempo real: puedes consultarla cuantas veces quieras y siempre recibirás el estado actual del inventario. Para tiendas con productos de rotación rápida o stock limitado, la diferencia es crítica.</p>

            <h2>Qué necesitas saber antes de conectar la API</h2>
            <div className="glass-card rounded-xl p-6 my-6">
              <ul className="flex flex-col gap-3 text-sm text-[#94a3b8]">
                {[
                  { label: "URL base del endpoint", desc: "La dirección donde está la API. Ej: https://api.miproveedor.com/v2/stock" },
                  { label: "Tipo de autenticación", desc: "API key, Bearer token o Basic Auth (usuario + contraseña). Tu proveedor te lo indicará." },
                  { label: "Formato de respuesta", desc: "Casi siempre JSON. Stock Sync Pro lo parsea automáticamente." },
                  { label: "Campos disponibles", desc: "Qué devuelve la API: SKU, EAN, stock, precio de coste, precio de venta, estado..." },
                  { label: "Rate limiting", desc: "Cuántas peticiones por minuto/hora permite la API. Relevante para configurar la frecuencia de sync." },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-2 shrink-0" />
                    <span><strong className="text-[#f1f5f9]">{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>Tipos de autenticación soportados</h2>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">API Key en header</h3>
            <p>El método más habitual. El proveedor te da una clave que se envía en cada petición como cabecera HTTP. En Stock Sync Pro solo tienes que introducir el nombre del header (ej: <code>X-Api-Key</code>) y el valor.</p>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">Bearer Token</h3>
            <p>Se envía en el header <code>Authorization: Bearer TU_TOKEN</code>. Habitual en APIs modernas con OAuth2. Stock Sync Pro gestiona la renovación automática del token si la API usa refresh tokens.</p>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">Basic Auth</h3>
            <p>Usuario y contraseña codificados en Base64. Menos seguro que los anteriores pero aún muy común en distribuidores con APIs más antiguas. Compatible al 100%.</p>

            <h2>Cómo se mapean los campos de la API a WooCommerce</h2>
            <p>Cada proveedor nombra sus campos de forma diferente. Stock Sync Pro incluye un editor de mapeo visual: seleccionas qué campo de la respuesta JSON corresponde a cada dato de WooCommerce.</p>
            <div className="glass-card rounded-xl p-6 my-6 font-mono text-xs">
              <p className="text-[#6366f1] font-bold mb-3 font-sans">Ejemplo de respuesta JSON de proveedor</p>
              <p className="text-[#94a3b8]">{"{"}</p>
              <p className="text-[#94a3b8] ml-4">{'"ref": "PRV-00123",'}</p>
              <p className="text-[#94a3b8] ml-4">{'"disponible": 47,'}</p>
              <p className="text-[#94a3b8] ml-4">{'"precio_neto": 18.50,'}</p>
              <p className="text-[#94a3b8] ml-4">{'"estado": "activo"'}</p>
              <p className="text-[#94a3b8]">{"}"}</p>
              <div className="mt-4 pt-4 border-t border-white/10 font-sans text-[#64748b]">
                <p>Mapeo configurado en Stock Sync Pro:</p>
                <p className="text-[#a5b4fc] mt-1">ref → SKU · disponible → stock · precio_neto → precio de coste · estado → estado</p>
              </div>
            </div>

            <h2>Frecuencia de sincronización recomendada</h2>
            <p>Depende de la volatilidad de tu catálogo y del rate limiting de la API:</p>
            <ul>
              <li><strong>Stock de alta rotación</strong> (electrónica, moda): cada 15-30 minutos</li>
              <li><strong>Stock estable</strong> (ferretería, repuestos): cada 2-4 horas</li>
              <li><strong>Solo precios</strong>: una vez al día suele ser suficiente</li>
            </ul>
            <p>Stock Sync Pro respeta el rate limiting del proveedor y distribuye las peticiones de forma inteligente para no saturar la API.</p>

            <h2>¿Mi proveedor no tiene API?</h2>
            <p>Si tu proveedor solo tiene un portal web con login o envía archivos CSV periódicamente, el <strong>Sync Engine</strong> de Stock Sync Pro lo cubre también. Extrae los datos del portal automáticamente y los envía al plugin en el mismo formato que una API REST, sin que notes la diferencia operativa.</p>

            <div className="glass-card rounded-2xl p-8 mt-10 text-center">
              <p className="text-[#f1f5f9] font-bold text-lg mb-2">Conecta la API de tu proveedor hoy</p>
              <p className="text-[#64748b] text-sm mb-6">Configuración en menos de 5 minutos. 7 días gratis.</p>
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
