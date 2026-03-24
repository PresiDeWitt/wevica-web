import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocsSidebar from "./DocsSidebar";

export const metadata: Metadata = {
  title: "Documentación",
  description: "Guía de instalación, configuración y referencia de API de Stock Sync Pro para WooCommerce.",
};

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-12 pt-8">
            <div className="badge mb-4 inline-flex" style={{ animation: "heroFadeInUp 0.7s ease 0.05s both" }}>
              <span className="badge-dot" aria-hidden="true" />
              Documentación
            </div>
            <h1 className="text-4xl font-black tracking-tight mb-3" style={{ animation: "heroFadeInUp 0.7s ease 0.15s both" }}>
              <span className="gradient-text">Stock Sync Pro</span> — Docs
            </h1>
            <p className="text-[#64748b] text-lg" style={{ animation: "heroFadeInUp 0.7s ease 0.25s both" }}>
              Todo lo que necesitas para instalar, configurar e integrar el plugin en tu tienda WooCommerce.
            </p>
          </div>

          <div className="flex gap-10">
            {/* Sidebar */}
            <DocsSidebar />

            {/* Main content */}
            <main className="flex-1 min-w-0 prose-wevica">

              {/* Introducción */}
              <section id="introduccion" className="mb-14 scroll-mt-24">
                <h2>Introducción</h2>
                <p>
                  <strong>Stock Sync Pro</strong> es un plugin de WordPress que sincroniza automáticamente el stock y los precios de tu tienda WooCommerce con tus proveedores. Compatible con cualquier fuente de datos: CSV, Excel, API REST o scraping web mediante el servicio adicional Sync Engine.
                </p>
                <p>
                  Una vez instalado y configurado, el plugin ejecuta sincronizaciones automáticas mediante cron jobs de WordPress, sin intervención manual. Cada ciclo actualiza cantidades de stock, precios y disponibilidad de productos.
                </p>
                <div className="glass-card rounded-xl p-5 my-6 border-l-4 border-[#6366f1]">
                  <p className="text-sm text-[#94a3b8] mb-0">
                    <strong className="text-[#f1f5f9]">Trial gratuito de 7 días.</strong> Prueba el plugin completo sin tarjeta de crédito. Si no te convence, no pagas nada.{" "}
                    <Link href="https://wevica.lemonsqueezy.com/buy/16216ef2-9646-4aca-9c04-8ea7fb001cd5" className="text-[#6366f1]">
                      Instalar ahora →
                    </Link>
                  </p>
                </div>
              </section>

              {/* Requisitos */}
              <section id="requisitos" className="mb-14 scroll-mt-24">
                <h2>Requisitos</h2>
                <table>
                  <thead>
                    <tr><th>Componente</th><th>Versión mínima</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>WordPress</td><td>5.8+</td></tr>
                    <tr><td>WooCommerce</td><td>6.0+</td></tr>
                    <tr><td>PHP</td><td>7.4+ (recomendado 8.1+)</td></tr>
                    <tr><td>MySQL</td><td>5.7+ o MariaDB 10.3+</td></tr>
                    <tr><td>Cron de WordPress</td><td>Activado (o cron real del servidor)</td></tr>
                  </tbody>
                </table>
                <p>
                  El plugin no requiere ninguna extensión PHP especial. Funciona en cualquier hosting estándar compatible con WordPress.
                </p>
              </section>

              {/* Instalación */}
              <section id="instalacion" className="mb-14 scroll-mt-24">
                <h2>Instalación</h2>

                <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">1. Descarga el plugin</h3>
                <p>
                  Tras completar la compra en LemonSqueezy recibirás un email con el enlace de descarga del archivo <code className="text-[#a5b4fc] bg-white/5 px-1.5 py-0.5 rounded text-sm">wevica-stock-sync-pro.zip</code>. También puedes descargarlo desde tu panel de cliente en LemonSqueezy en cualquier momento.
                </p>

                <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">2. Instala en WordPress</h3>
                <ol className="list-decimal pl-5 flex flex-col gap-2 text-[#94a3b8] text-sm">
                  <li>Ve a <strong className="text-[#f1f5f9]">Panel de WordPress → Plugins → Añadir nuevo</strong></li>
                  <li>Haz click en <strong className="text-[#f1f5f9]">Subir plugin</strong></li>
                  <li>Selecciona el archivo .zip descargado</li>
                  <li>Haz click en <strong className="text-[#f1f5f9]">Instalar ahora</strong> → <strong className="text-[#f1f5f9]">Activar</strong></li>
                </ol>

                <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">3. Activa con tu licencia</h3>
                <p>
                  Tras activar el plugin, aparecerá un mensaje solicitando la clave de licencia. Introduce la clave que recibiste por email. La activación se hace contra la API de LemonSqueezy y requiere conexión a internet.
                </p>

                <div className="glass-card rounded-xl p-5 my-4">
                  <p className="text-sm text-[#94a3b8] mb-0">
                    <strong className="text-[#f1f5f9]">Importante:</strong> Cada licencia permite activación en un número de sitios según el plan (Personal: 1 sitio, Business: 3 sitios, Agency: ilimitados). Para desactivar un sitio y liberar la licencia ve a <strong className="text-[#f1f5f9]">Plugins → Stock Sync Pro → Desactivar licencia</strong>.
                  </p>
                </div>
              </section>

              {/* Configuración */}
              <section id="configuracion" className="mb-14 scroll-mt-24">
                <h2>Configuración inicial</h2>
                <p>
                  Tras activar el plugin, accede a <strong className="text-[#f1f5f9]">WooCommerce → Stock Sync Pro</strong> en el menú lateral de WordPress.
                </p>
                <ul>
                  <li><strong>Frecuencia de sync:</strong> Selecciona con qué frecuencia se ejecuta la sincronización automática (cada 1h, 2h, 4h, o diaria).</li>
                  <li><strong>Modo de actualización:</strong> Elige si actualizar solo el stock, solo los precios, o ambos.</li>
                  <li><strong>Productos nuevos:</strong> Decide si crear automáticamente productos nuevos que aparezcan en la fuente pero no existan en WooCommerce, o solo actualizar los existentes.</li>
                  <li><strong>Campo de referencia:</strong> Define qué campo de la fuente de datos se usa para identificar el producto en WooCommerce (SKU recomendado).</li>
                </ul>
              </section>

              {/* Fuentes de datos */}
              <section id="fuentes-de-datos" className="mb-14 scroll-mt-24">
                <h2>Fuentes de datos</h2>

                <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">CSV / Excel</h3>
                <p>
                  Sube un archivo CSV o Excel con las columnas de tu proveedor. El plugin mapea automáticamente las columnas a los campos de WooCommerce (SKU, stock, precio). Puedes configurar el delimitador, codificación y fila de cabecera.
                </p>
                <p>Formato mínimo esperado:</p>
                <pre className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-xs text-[#94a3b8] overflow-x-auto">
{`sku,stock,precio
REF-001,24,19.99
REF-002,0,34.50
REF-003,8,12.00`}
                </pre>

                <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">API REST</h3>
                <p>
                  Configura la URL del endpoint de tu proveedor y el método de autenticación (API Key en header, Bearer token, o Basic Auth). El plugin hace una petición GET y parsea la respuesta JSON.
                </p>
                <p>Ejemplo de respuesta JSON esperada:</p>
                <pre className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-xs text-[#94a3b8] overflow-x-auto">
{`[
  { "referencia": "REF-001", "stock": 24, "pvp": 19.99 },
  { "referencia": "REF-002", "stock": 0,  "pvp": 34.50 }
]`}
                </pre>

                <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">Sync Engine (scraping gestionado)</h3>
                <p>
                  Para proveedores sin API ni fichero descargable, el servicio adicional <strong className="text-[#f1f5f9]">Sync Engine</strong> extrae los datos de su portal web y los envía automáticamente al plugin. Ver sección <a href="#sync-engine">Sync Engine</a>.
                </p>
              </section>

              {/* API REST */}
              <section id="api" className="mb-14 scroll-mt-24">
                <h2>API REST del plugin</h2>
                <p>
                  El plugin expone su propia API REST en tu WordPress para permitir integraciones externas y activar sincronizaciones bajo demanda.
                </p>

                <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">Autenticación</h3>
                <p>
                  Todas las peticiones requieren el header <code className="text-[#a5b4fc] bg-white/5 px-1.5 py-0.5 rounded text-sm">X-Wevica-Key</code> con tu API key del plugin (visible en Panel → Stock Sync Pro → API).
                </p>

                <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">Endpoints</h3>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      method: "GET",
                      path: "/wp-json/wevica/v1/status",
                      desc: "Estado del plugin y último sync.",
                    },
                    {
                      method: "POST",
                      path: "/wp-json/wevica/v1/sync",
                      desc: "Lanza una sincronización manual inmediata.",
                    },
                    {
                      method: "GET",
                      path: "/wp-json/wevica/v1/history",
                      desc: "Historial de sincronizaciones (últimas 100).",
                    },
                    {
                      method: "POST",
                      path: "/wp-json/wevica/v1/sync-csv",
                      desc: "Sincroniza enviando un CSV en el cuerpo de la petición.",
                    },
                  ].map((ep) => (
                    <div key={ep.path} className="glass-card rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded shrink-0 ${ep.method === "GET" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}`}>
                        {ep.method}
                      </span>
                      <code className="text-sm text-[#a5b4fc] break-all">{ep.path}</code>
                      <span className="text-sm text-[#64748b]">{ep.desc}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-base font-bold text-[#f1f5f9] mt-6 mb-3">Ejemplo de petición</h3>
                <pre className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-xs text-[#94a3b8] overflow-x-auto">
{`curl -X POST https://tutienda.com/wp-json/wevica/v1/sync \\
  -H "X-Wevica-Key: tu-api-key-aqui"`}
                </pre>
              </section>

              {/* Sync Engine */}
              <section id="sync-engine" className="mb-14 scroll-mt-24">
                <h2>Sync Engine</h2>
                <p>
                  El <strong className="text-[#f1f5f9]">Sync Engine</strong> es un servicio adicional gestionado que ejecuta scrapers web en nuestros servidores VPS y envía los datos directamente a tu plugin. Ideal para proveedores que no tienen API ni fichero descargable.
                </p>
                <ul>
                  <li>Nos encargamos de mantener el scraper actualizado cuando el proveedor cambia su web.</li>
                  <li>Los datos se envían al plugin mediante la API REST con la frecuencia contratada.</li>
                  <li>Sin configuración técnica por tu parte — solo necesitas el plugin instalado y activado.</li>
                </ul>
                <p>
                  Para activar el Sync Engine contacta con{" "}
                  <a href="mailto:hola@wevica.com?subject=Activar Sync Engine">hola@wevica.com</a>{" "}
                  indicando el proveedor que necesitas integrar.
                </p>
              </section>

              {/* Alertas */}
              <section id="alertas" className="mb-14 scroll-mt-24">
                <h2>Alertas por Telegram</h2>
                <p>
                  El plugin puede enviarte notificaciones por Telegram cuando una sincronización falla o cuando el stock de un producto cae por debajo de un umbral.
                </p>
                <ol className="list-decimal pl-5 flex flex-col gap-2 text-[#94a3b8] text-sm">
                  <li>Abre Telegram y busca <strong className="text-[#f1f5f9]">@BotFather</strong></li>
                  <li>Crea un nuevo bot con el comando <code className="text-[#a5b4fc] bg-white/5 px-1.5 py-0.5 rounded">/newbot</code></li>
                  <li>Copia el token del bot</li>
                  <li>Obtén tu Chat ID enviando un mensaje al bot y consultando <code className="text-[#a5b4fc] bg-white/5 px-1.5 py-0.5 rounded">https://api.telegram.org/bot&#123;TOKEN&#125;/getUpdates</code></li>
                  <li>Introduce el token y el chat ID en <strong className="text-[#f1f5f9]">WooCommerce → Stock Sync Pro → Alertas</strong></li>
                </ol>
              </section>

              {/* FAQ Técnico */}
              <section id="faq-tecnico" className="mb-14 scroll-mt-24">
                <h2>FAQ técnico</h2>

                {[
                  {
                    q: "El cron no se ejecuta automáticamente",
                    a: "WordPress usa WP-Cron, que se activa con visitas. En servidores con poco tráfico puede retrasarse. Solución recomendada: desactiva WP-Cron en wp-config.php y configura un cron real del servidor (cPanel → Cron Jobs) que llame a wp-cron.php cada minuto.",
                  },
                  {
                    q: "El sync actualiza solo 100 productos aunque tenga más",
                    a: "Por defecto el plugin procesa en lotes de 100 para evitar timeouts. Puedes aumentar el tamaño del lote en Ajustes → Rendimiento, pero asegúrate de que tu servidor tenga suficiente memoria PHP (mínimo 256MB recomendado).",
                  },
                  {
                    q: "Recibo el error 'API Key inválida'",
                    a: "Regenera la API key desde Panel → Stock Sync Pro → API → Regenerar. Si usas el Sync Engine, actualiza también la key en la configuración del motor externo.",
                  },
                  {
                    q: "¿El plugin es compatible con WPML o Polylang?",
                    a: "Sí, pero debes configurar el campo de referencia (SKU) correctamente para que el sync se aplique a todas las traducciones del producto. Contacta con soporte si necesitas configuración específica.",
                  },
                  {
                    q: "¿Puedo usar el plugin en staging sin consumir activaciones?",
                    a: "Sí. Los entornos de staging detectados automáticamente (local, .staging., .test) no consumen activaciones de licencia. Para entornos personalizados, contacta con soporte.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border-b border-white/[0.06] py-5 last:border-0">
                    <h3 className="text-sm font-bold text-[#f1f5f9] mb-2">{q}</h3>
                    <p className="text-sm text-[#64748b] mb-0">{a}</p>
                  </div>
                ))}

                <div className="glass-card rounded-xl p-6 mt-8 text-center">
                  <p className="text-[#94a3b8] text-sm mb-3">¿No encuentras lo que buscas?</p>
                  <a
                    href="mailto:hola@wevica.com"
                    className="btn-primary px-6 py-2.5 text-sm inline-flex items-center gap-2"
                  >
                    <span>Contactar soporte</span>
                  </a>
                </div>
              </section>

            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
