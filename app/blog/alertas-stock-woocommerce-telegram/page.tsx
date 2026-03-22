import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alertas de stock en WooCommerce por Telegram: configuración completa",
  description: "Aprende a recibir notificaciones automáticas por Telegram cuando el stock de tu tienda WooCommerce cambia, se agota o tiene errores de sincronización.",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  author: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  publisher: { "@type": "Organization", name: "Stock Sync Pro", url: "https://stocksync.es" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stocksync.es/blog/alertas-stock-woocommerce-telegram" },
};

export const metadata: Metadata = {
  title: "Alertas de stock en WooCommerce por Telegram: configuración completa",
  description: "Recibe notificaciones automáticas en Telegram cuando el stock de tu WooCommerce cambia o hay errores. Guía paso a paso.",
  openGraph: {
    title: "Alertas de stock WooCommerce por Telegram",
    description: "Configura alertas automáticas de stock en tu tienda WooCommerce en 5 minutos.",
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
              <span className="text-xs text-[#475569]">22 de marzo de 2026 · 4 min lectura</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#f1f5f9] leading-tight mb-4">
              Alertas de stock en WooCommerce por Telegram: configuración completa
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed">
              Saber en tiempo real cuándo cambia el stock de tu tienda — sin tener que entrar al panel — es una ventaja operativa enorme. Con Stock Sync Pro puedes recibir alertas en Telegram en segundos.
            </p>
          </div>

          <div className="prose-wevica">
            <h2>Por qué Telegram y no email</h2>
            <p>El email es lento para notificaciones urgentes. Una alerta de "artículo agotado" que llega con 2 horas de retraso ya no sirve. Telegram entrega las notificaciones en segundos, está disponible en cualquier dispositivo y no acaba en spam.</p>
            <p>Además, puedes crear un bot de Telegram dedicado para tu tienda y recibir alertas directamente en tu chat personal o en un grupo del equipo.</p>

            <h2>Qué alertas puedes configurar</h2>
            <div className="glass-card rounded-xl p-6 my-6">
              <ul className="flex flex-col gap-3 text-sm text-[#94a3b8]">
                {[
                  { icon: "🔴", text: "Artículo agotado en el proveedor — stock llega a 0" },
                  { icon: "🟡", text: "Stock bajo — artículo cae por debajo del umbral configurado (ej: menos de 5 unidades)" },
                  { icon: "✅", text: "Sincronización completada — resumen con productos actualizados y errores" },
                  { icon: "⚠️", text: "Error de sincronización — fallo de conexión con el proveedor o datos incorrectos" },
                  { icon: "🔄", text: "Cambio de precio — cuando el proveedor modifica el precio de coste" },
                ].map((item) => (
                  <li key={item.text} className="flex gap-3">
                    <span className="shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>Paso a paso: crear el bot de Telegram</h2>
            <div className="glass-card rounded-xl p-6 my-6">
              <ol className="flex flex-col gap-4 text-sm text-[#94a3b8] mb-0">
                {[
                  "Abre Telegram y busca @BotFather",
                  "Escribe /newbot y sigue las instrucciones (nombre + username terminado en 'bot')",
                  "BotFather te dará un token de API (formato: 123456789:AAF...)",
                  "Envía cualquier mensaje al bot que acabas de crear",
                  "Ve a: https://api.telegram.org/botTU_TOKEN/getUpdates — copia el chat_id que aparece",
                  "Introduce el token y el chat_id en Stock Sync Pro → Ajustes → Notificaciones Telegram",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-[rgba(99,102,241,0.2)] text-[#6366f1] text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <h2>Ejemplo de alerta real</h2>
            <div className="glass-card rounded-xl p-5 my-6 font-mono text-xs text-[#94a3b8]">
              <p className="text-[#6366f1] font-bold mb-2">📦 Stock Sync Pro — Sync completado</p>
              <p>Tienda: mitienda.com</p>
              <p>Fecha: 22/03/2026 08:00</p>
              <p>Productos actualizados: 47</p>
              <p className="text-amber-400">⚠️ Sin stock (3): REF-001, REF-045, REF-112</p>
              <p className="text-red-400">❌ Errores: 0</p>
            </div>

            <h2>Alertas para equipos: usar un grupo de Telegram</h2>
            <p>Si gestionas la tienda con un equipo, puedes enviar las alertas a un grupo de Telegram. El proceso es el mismo: crea el bot, añádelo al grupo, obtén el chat_id del grupo (es negativo, ej: -1001234567890) e introdúcelo en la configuración.</p>

            <div className="glass-card rounded-2xl p-8 mt-10 text-center">
              <p className="text-[#f1f5f9] font-bold text-lg mb-2">Configura tus alertas Telegram hoy</p>
              <p className="text-[#64748b] text-sm mb-6">Incluido en todos los planes. 7 días gratis.</p>
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
