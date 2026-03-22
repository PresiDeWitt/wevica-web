import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo conectar WooCommerce con un CSV de tu proveedor (sin programar)",
  description: "Guía paso a paso para importar y actualizar el stock de tu tienda WooCommerce automáticamente desde un archivo CSV de tu proveedor.",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  author: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  publisher: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stocksync.es/blog/conectar-woocommerce-csv-proveedor" },
};

export const metadata: Metadata = {
  title: "Cómo conectar WooCommerce con un CSV de tu proveedor (sin programar)",
  description: "Guía paso a paso para importar y actualizar el stock de tu tienda WooCommerce automáticamente desde un archivo CSV de tu proveedor.",
  openGraph: {
    title: "Cómo conectar WooCommerce con un CSV de tu proveedor",
    description: "Deja de importar CSVs a mano. Automatiza la actualización de stock en 5 minutos.",
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
                Tutorial
              </span>
              <span className="text-xs text-[#475569]">22 de marzo de 2026 · 5 min lectura</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#f1f5f9] leading-tight mb-4">
              Cómo conectar WooCommerce con un CSV de tu proveedor (sin programar)
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed">
              La mayoría de proveedores ofrecen su catálogo en formato CSV o Excel. Si sigues importándolo a mano, estás perdiendo horas cada semana. Esta guía explica cómo automatizarlo completamente.
            </p>
          </div>

          {/* Content */}
          <div className="prose-wevica">

            <h2>¿Qué es un feed CSV de proveedor?</h2>
            <p>
              Un feed CSV es un archivo de texto con filas y columnas que contiene el catálogo completo de un proveedor: referencia del producto, nombre, stock disponible, precio y a veces imagen. Muchos distribuidores españoles generan este archivo diariamente o varias veces al día y lo ponen a disposición de sus clientes via descarga directa, FTP o email.
            </p>
            <p>
              El problema es que WooCommerce no se conecta solo a ese archivo. Hay que descargarlo, procesarlo y actualizar cada producto manualmente — o buscar la forma de automatizarlo.
            </p>

            <h2>Opciones para conectar WooCommerce con un CSV</h2>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">1. Importación manual con el importador de WooCommerce</h3>
            <p>
              WooCommerce incluye un importador de productos nativo que acepta CSV. El proceso: descargas el CSV del proveedor, lo adaptas al formato de WooCommerce (renombrar columnas, ajustar valores), y lo subes desde Productos → Importar. Es gratuito pero completamente manual, propenso a errores y no escala.
            </p>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">2. Cron job personalizado (requiere programación)</h3>
            <p>
              Si tienes acceso al servidor, puedes crear un script PHP o Python que descargue el CSV del proveedor, lo procese y actualice los productos usando la API REST de WooCommerce. Es potente pero requiere desarrollo y mantenimiento constante.
            </p>

            <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">3. Plugin de sincronización automática</h3>
            <p>
              La opción más práctica para la mayoría de tiendas. <strong>Stock Sync Pro</strong> acepta CSVs directamente: le das la URL del archivo o lo subes, configuras el mapeo de columnas una vez, y el plugin sincroniza automáticamente cada hora.
            </p>

            <h2>Formato del CSV: qué necesitas y qué columnas mapear</h2>
            <p>Para que Stock Sync Pro pueda leer el CSV de tu proveedor necesitas al menos estas columnas:</p>

            <div className="glass-card rounded-xl p-6 my-6 overflow-x-auto">
              <table className="text-sm w-full">
                <thead>
                  <tr className="text-[#6366f1] text-xs uppercase tracking-wider">
                    <th className="text-left pb-3 pr-6">Columna del proveedor</th>
                    <th className="text-left pb-3">Campo en WooCommerce</th>
                  </tr>
                </thead>
                <tbody className="text-[#94a3b8] divide-y divide-white/[0.05]">
                  {[
                    ["referencia / sku", "SKU del producto"],
                    ["stock / disponible / cantidad", "Stock"],
                    ["precio / pvp", "Precio regular"],
                    ["nombre / descripcion", "Nombre (opcional)"],
                  ].map(([col, field]) => (
                    <tr key={col}>
                      <td className="py-2.5 pr-6 font-mono text-xs text-[#6366f1]">{col}</td>
                      <td className="py-2.5">{field}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              El mapeo se configura una sola vez en el panel del plugin. A partir de ahí, cada vez que el proveedor actualice el CSV, Stock Sync Pro lo descarga y aplica los cambios automáticamente.
            </p>

            <h2>Paso a paso: configurar Stock Sync Pro con un CSV</h2>

            <div className="glass-card rounded-xl p-6 my-6">
              <ol className="flex flex-col gap-4 text-sm text-[#94a3b8] mb-0">
                {[
                  "Instala Stock Sync Pro en tu WordPress y actívalo con tu licencia.",
                  "Ve a Stock Sync → Nueva fuente → selecciona tipo CSV.",
                  "Introduce la URL del CSV de tu proveedor (o sube el archivo manualmente para la primera prueba).",
                  "Configura el mapeo de columnas: indica qué columna es el SKU, cuál es el stock y cuál es el precio.",
                  "Selecciona la frecuencia de sync: cada hora, cada 2 horas o diaria.",
                  "Guarda y ejecuta el primer sync manualmente para verificar que todo funciona.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-[rgba(99,102,241,0.2)] text-[#6366f1] text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <h2>¿Qué pasa si el CSV del proveedor tiene un formato raro?</h2>
            <p>
              Es muy habitual que los proveedores usen separadores distintos (punto y coma en lugar de coma), codificaciones especiales (ISO-8859-1 en lugar de UTF-8) o columnas con nombres en otro idioma. Stock Sync Pro permite configurar el separador y la codificación, y el mapeo de columnas es completamente libre: puedes llamar a las columnas como quieras.
            </p>
            <p>
              Si el formato es muy específico o el proveedor usa Excel en lugar de CSV, el plugin también soporta archivos <strong>.xlsx</strong> con la misma lógica de mapeo.
            </p>

            <h2>Resultado esperado</h2>
            <p>
              Una tienda con 2.000 referencias que antes tardaba 3 horas semanales en actualizar el stock puede tener el inventario sincronizado automáticamente cada hora sin intervención. El plugin actualiza únicamente los productos que han cambiado, lo que minimiza la carga en el servidor.
            </p>

            {/* CTA */}
            <div className="glass-card rounded-2xl p-8 mt-10 text-center">
              <p className="text-[#f1f5f9] font-bold text-lg mb-2">Conecta tu CSV en menos de 5 minutos</p>
              <p className="text-[#64748b] text-sm mb-6">7 días gratis. Si no funciona con tu formato, te devolvemos el dinero.</p>
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
