import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contacto — Stock Sync Pro",
  description: "Contacta con el equipo de Stock Sync Pro. Soporte técnico, preguntas sobre planes y consultas de integración.",
};

const channels = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 5.5A1.5 1.5 0 014.5 4h13A1.5 1.5 0 0119 5.5v11a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 013 16.5v-11z" stroke="#6366f1" strokeWidth="1.5"/>
        <path d="M3 6l8 6 8-6" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Email general",
    description: "Para cualquier consulta sobre el producto, planes o colaboraciones.",
    action: "hola@wevica.com",
    href: "mailto:hola@wevica.com",
    label: "Enviar email",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8" stroke="#6366f1" strokeWidth="1.5"/>
        <path d="M11 7v4l2.5 2.5" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Soporte técnico",
    description: "Problemas con el plugin, errores de sincronización o configuración.",
    action: "hola@wevica.com",
    href: "mailto:hola@wevica.com?subject=Soporte%20técnico%20—%20Stock%20Sync%20Pro",
    label: "Abrir ticket",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2C6.03 2 2 6.03 2 11c0 1.62.43 3.14 1.19 4.45L2 20l4.72-1.17A9 9 0 1011 2z" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Sync Engine",
    description: "Consultas sobre el servicio gestionado de scraping para proveedores sin API.",
    action: "hola@wevica.com",
    href: "mailto:hola@wevica.com?subject=Consulta%20Sync%20Engine",
    label: "Consultar",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="pt-12 mb-12">
            <div className="badge mb-4 inline-flex">
              <span className="badge-dot" aria-hidden="true" />
              Contacto
            </div>
            <h1 className="text-4xl font-black tracking-tight mb-3">
              Estamos para <span className="gradient-text">ayudarte</span>
            </h1>
            <p className="text-[#64748b] text-lg max-w-xl">
              Soporte en español. Tiempo de respuesta habitual: menos de 24 horas en días laborables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {channels.map((ch) => (
              <div key={ch.title} className="glass-card rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] flex items-center justify-center">
                  {ch.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-sm font-bold text-[#f1f5f9] mb-1">{ch.title}</h2>
                  <p className="text-xs text-[#64748b] leading-relaxed">{ch.description}</p>
                </div>
                <Link
                  href={ch.href}
                  className="btn-secondary text-xs px-4 py-2 rounded-lg text-center font-medium"
                >
                  {ch.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-lg font-bold text-[#f1f5f9] mb-2">Antes de escribirnos</h2>
            <p className="text-[#64748b] text-sm mb-5">
              Puede que ya tengas la respuesta aquí:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/docs" className="btn-secondary px-5 py-2.5 text-sm text-center rounded-lg">
                Documentación →
              </Link>
              <Link href="/#faq" className="btn-secondary px-5 py-2.5 text-sm text-center rounded-lg">
                Preguntas frecuentes →
              </Link>
              <Link href="/changelog" className="btn-secondary px-5 py-2.5 text-sm text-center rounded-lg">
                Changelog →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
