import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Changelog — Stock Sync Pro",
  description: "Historial de versiones y actualizaciones de Stock Sync Pro. Nuevas funcionalidades, mejoras y correcciones.",
};

const releases = [
  {
    version: "4.9.2",
    date: "7 abril 2026",
    type: "patch",
    changes: [
      { type: "new", text: "Updater robusto con ZipArchive y botón 'Actualizar ahora' en el dashboard" },
      { type: "new", text: "Respuestas de activate/validate incluyen plan, plan_name y limits" },
      { type: "new", text: "Detalles del plan activo visibles en la página de licencia (nombre, límite de API keys, features)" },
      { type: "fix", text: "Corrección de límites de plan y añadido plan free en SaaS" },
    ],
  },
  {
    version: "4.9.1",
    date: "6 abril 2026",
    type: "patch",
    changes: [
      { type: "fix", text: "Script Python movido a .github/scripts para evitar error de parseo en YAML heredoc" },
      { type: "fix", text: "Stub de get_option corregido con expect()->with()->andReturn()" },
      { type: "fix", text: "withArgs() reemplazado por with() en LicenseTest (Brain\\Monkey API)" },
    ],
  },
  {
    version: "4.9.0",
    date: "5 abril 2026",
    type: "major",
    changes: [
      { type: "new", text: "Activación unificada de plugin + Sync Engine bajo una única licencia" },
      { type: "new", text: "Formulario de onboarding para configuración del scraper enviado por email tras activación" },
      { type: "improve", text: "Estructura de planes simplificada — Sync Engine incluido en todos los planes de pago" },
      { type: "improve", text: "Limpieza de la página de settings — eliminadas secciones redundantes" },
      { type: "fix", text: "Error 500 en la API de licencias al activar" },
      { type: "fix", text: "Auditoría del codebase — resueltas lógicas redundantes y condiciones rotas" },
      { type: "fix", text: "Añadidas cabeceras de seguridad a todas las respuestas REST" },
    ],
  },
  {
    version: "4.8.2",
    date: "3 abril 2026",
    type: "patch",
    changes: [
      { type: "fix", text: "Extracción de URL de Google Sheets desde enlaces compartidos de Drive" },
      { type: "fix", text: "manage_stock ahora se deshabilita correctamente cuando no se envía cantidad" },
      { type: "fix", text: "Modo Dry Run muestra etiqueta 'Preview' en lugar de 'Sin SKU' en el log" },
      { type: "fix", text: "Hashing bcrypt para API keys (reemplaza almacenamiento HMAC-SHA256)" },
      { type: "fix", text: "Rate limiting en endpoints de licencia y Sync Engine (capa Vercel)" },
      { type: "improve", text: "Limpieza de transients al desactivar el plugin" },
    ],
  },
  {
    version: "4.7.0",
    date: "1 abril 2026",
    type: "minor",
    changes: [
      { type: "new", text: "Registry API — el plugin se registra automáticamente en el backend central de Vercel al activar Sync Engine" },
      { type: "new", text: "Gestión del ciclo de vida de Sync Engine (activar/desactivar desde el panel)" },
      { type: "new", text: "UI de settings simplificada — URL de fuente de datos, test de conexión y auto-detección de formato" },
      { type: "new", text: "Endpoint /stocksync/v1/config para que Sync Engine obtenga la configuración del plugin" },
      { type: "new", text: "Página de estado simplificada con estado en tiempo real de Sync Engine y última sync" },
      { type: "new", text: "Página de ayuda rehecha para usuarios no técnicos (inicio rápido en 4 pasos, FAQ, guía de formatos)" },
      { type: "improve", text: "uninstall.php limpia todas las opciones de registry y cron al eliminar el plugin" },
      { type: "improve", text: "170+ tests PHPUnit en 14 clases (Pure PHP, WP Stubs, WC Mocks)" },
      { type: "fix", text: "Prevención de SSRF en URLs de fuente, autenticación HMAC-SHA256 en registry" },
    ],
  },
  {
    version: "4.4.0",
    date: "28 marzo 2026",
    type: "minor",
    changes: [
      { type: "new", text: "Middleware de validación de plan — control de acceso a funcionalidades por tier de suscripción" },
      { type: "new", text: "Tracking de uso (productos, llamadas API) con límites mensuales" },
      { type: "new", text: "Estadísticas en el dashboard — uso en tiempo real vs límites con alertas por porcentaje" },
      { type: "new", text: "Webhook handler de Lemon Squeezy (subscription_created, updated, cancelled, expired)" },
      { type: "new", text: "Notificaciones por email en el ciclo de vida de la suscripción" },
      { type: "new", text: "Página de configuración de facturación para Lemon Squeezy" },
    ],
  },
  {
    version: "4.0.1",
    date: "21 marzo 2026",
    type: "patch",
    changes: [
      { type: "fix", text: "Corrección en el mapeo de columnas CSV con separador punto y coma" },
      { type: "fix", text: "Resuelto error de timeout en sincronizaciones con catálogos de más de 10.000 referencias" },
      { type: "improve", text: "Mejor manejo de errores en la conexión con la API de WooCommerce" },
    ],
  },
  {
    version: "4.0.0",
    date: "1 marzo 2026",
    type: "major",
    changes: [
      { type: "new", text: "Nuevo motor de sincronización con soporte nativo para archivos Excel (.xlsx)" },
      { type: "new", text: "Sincronización de precios con reglas de margen por categoría" },
      { type: "new", text: "Panel de historial con filtros por fecha, tienda y estado" },
      { type: "new", text: "Alertas Telegram mejoradas: resumen diario con estadísticas detalladas" },
      { type: "new", text: "Soporte para productos variables de WooCommerce" },
      { type: "improve", text: "Interfaz de configuración completamente rediseñada" },
      { type: "improve", text: "Rendimiento mejorado: hasta 3x más rápido en catálogos grandes" },
    ],
  },
  {
    version: "3.2.0",
    date: "10 febrero 2026",
    type: "minor",
    changes: [
      { type: "new", text: "API REST propia: endpoint para lanzar sincronización desde sistemas externos" },
      { type: "new", text: "Soporte para múltiples API keys por instalación" },
      { type: "improve", text: "Documentación en línea integrada directamente en el panel" },
      { type: "fix", text: "Corrección en la sincronización de stock con valor cero" },
    ],
  },
  {
    version: "3.1.0",
    date: "20 enero 2026",
    type: "minor",
    changes: [
      { type: "new", text: "Modo dry run: previsualiza los cambios antes de aplicarlos" },
      { type: "new", text: "Webhook entrante para disparar sync desde eventos externos" },
      { type: "improve", text: "Logs de sincronización exportables en formato CSV" },
    ],
  },
  {
    version: "3.0.0",
    date: "5 enero 2026",
    type: "major",
    changes: [
      { type: "new", text: "Integración con Sync Engine: scraping gestionado para proveedores sin API" },
      { type: "new", text: "Soporte multisitio para planes Pro y Business" },
      { type: "new", text: "Precio mínimo configurable para proteger márgenes" },
      { type: "improve", text: "Compatibilidad con WooCommerce 9.x y WordPress 6.7" },
    ],
  },
];

const typeConfig = {
  major: { label: "Mayor", className: "bg-[#6366f1]/15 text-[#a5b4fc] border-[#6366f1]/20" },
  minor: { label: "Menor", className: "bg-[#8b5cf6]/15 text-[#c4b5fd] border-[#8b5cf6]/20" },
  patch: { label: "Parche", className: "bg-white/[0.05] text-[#94a3b8] border-white/[0.08]" },
};

const changeConfig = {
  new: { label: "Nuevo", dot: "bg-green-400" },
  improve: { label: "Mejora", dot: "bg-[#6366f1]" },
  fix: { label: "Fix", dot: "bg-amber-400" },
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="pt-12 mb-12">
            <div className="badge mb-4 inline-flex">
              <span className="badge-dot" aria-hidden="true" />
              Changelog
            </div>
            <h1 className="text-4xl font-black tracking-tight mb-3">
              Historial de <span className="gradient-text">versiones</span>
            </h1>
            <p className="text-[#64748b] text-lg">
              Todas las actualizaciones de Stock Sync Pro. Nuevas funcionalidades, mejoras y correcciones.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {releases.map((release) => {
              const tc = typeConfig[release.type as keyof typeof typeConfig];
              return (
                <div key={release.version} className="glass-card rounded-2xl p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xl font-black text-[#f1f5f9]">v{release.version}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tc.className}`}>
                      {tc.label}
                    </span>
                    <span className="text-xs text-[#475569] ml-auto">{release.date}</span>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {release.changes.map((change, i) => {
                      const cc = changeConfig[change.type as keyof typeof changeConfig];
                      return (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                          <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${cc.dot}`} aria-hidden="true" />
                            <span className="text-xs font-semibold text-[#475569] w-12">{cc.label}</span>
                          </div>
                          {change.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
