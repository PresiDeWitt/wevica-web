import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-lg mx-auto">
          <div className="text-8xl font-black gradient-text mb-4">404</div>
          <h1 className="text-2xl font-bold text-[#f1f5f9] mb-3">
            Página no encontrada
          </h1>
          <p className="text-[#64748b] mb-8 leading-relaxed">
            La página que buscas no existe o ha sido movida. Prueba desde la página principal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M10 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Ir al inicio
            </Link>
            <Link href="/docs" className="btn-secondary px-6 py-3 text-sm">
              Ver documentación
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
