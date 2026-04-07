import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Stock Sync Pro. Información sobre el tratamiento de datos personales conforme al RGPD y la LOPD-GDD.",
};

export default function PrivacidadPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-36 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black tracking-tight mb-2">
            Política de{" "}
            <span className="gradient-text">Privacidad</span>
          </h1>
          <p className="text-sm text-[#475569] mb-12">
            Última actualización: 20 de marzo de 2026
          </p>

          <div className="prose-wevica">
            <h2>1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recabados a
              través de este sitio web es <strong>Stock Sync Pro</strong> (en adelante,
              &ldquo;Stock Sync Pro&rdquo; o &ldquo;nosotros&rdquo;), con dirección de
              contacto:{" "}
              <a href="mailto:hola@wevica.com">hola@wevica.com</a>.
            </p>

            <h2>2. Datos que recogemos</h2>
            <p>Podemos recoger los siguientes datos personales:</p>
            <ul>
              <li>
                <strong>Datos de contacto</strong>: nombre, dirección de correo
                electrónico, cuando nos escribes o te registras.
              </li>
              <li>
                <strong>Datos de pago y licencia</strong>: las transacciones son
                procesadas íntegramente por Lemon Squeezy (
                <a
                  href="https://www.lemonsqueezy.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  política de privacidad
                </a>
                ). Stock Sync Pro no almacena datos de tarjeta de crédito.
              </li>
              <li>
                <strong>Datos de uso</strong>: cuando el plugin valida su
                licencia, se registran la URL del sitio WordPress y la versión
                del plugin con fines técnicos y antifraude.
              </li>
              <li>
                <strong>Datos de navegación</strong>: dirección IP, tipo de
                navegador y páginas visitadas, a través de herramientas de
                analítica anónima.
              </li>
            </ul>

            <h2>3. Finalidad y base legal</h2>
            <table>
              <thead>
                <tr>
                  <th>Finalidad</th>
                  <th>Base legal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gestionar la compra y la licencia del producto</td>
                  <td>Ejecución de contrato (art. 6.1.b RGPD)</td>
                </tr>
                <tr>
                  <td>Responder consultas de soporte</td>
                  <td>Interés legítimo (art. 6.1.f RGPD)</td>
                </tr>
                <tr>
                  <td>Envío de comunicaciones comerciales</td>
                  <td>Consentimiento expreso (art. 6.1.a RGPD)</td>
                </tr>
                <tr>
                  <td>Cumplir obligaciones legales y fiscales</td>
                  <td>Obligación legal (art. 6.1.c RGPD)</td>
                </tr>
              </tbody>
            </table>

            <h2>4. Conservación de datos</h2>
            <p>
              Los datos se conservan mientras dure la relación contractual y,
              una vez finalizada, durante los plazos legales aplicables (mínimo
              5 años para datos de facturación según la normativa tributaria
              española).
            </p>

            <h2>5. Destinatarios</h2>
            <p>
              Podemos compartir datos con los siguientes terceros encargados del
              tratamiento:
            </p>
            <ul>
              <li>
                <strong>Lemon Squeezy</strong>: procesador de pagos y gestión
                de licencias.
              </li>
              <li>
                <strong>Vercel</strong>: infraestructura de alojamiento de la
                API de licencias.
              </li>
              <li>
                <strong>Resend</strong>: envío transaccional de correos
                electrónicos (solo si has dado consentimiento).
              </li>
            </ul>
            <p>
              Todos los encargados del tratamiento están ubicados en la UE o
              cuentan con mecanismos de transferencia internacional adecuados
              (Cláusulas Contractuales Tipo).
            </p>

            <h2>6. Derechos del interesado</h2>
            <p>
              Conforme al RGPD y la LOPD-GDD, puedes ejercer los siguientes
              derechos dirigiendo un correo a{" "}
              <a href="mailto:hola@wevica.com">hola@wevica.com</a>:
            </p>
            <ul>
              <li>Acceso a tus datos personales</li>
              <li>Rectificación de datos inexactos</li>
              <li>Supresión (&ldquo;derecho al olvido&rdquo;)</li>
              <li>Limitación del tratamiento</li>
              <li>Portabilidad de los datos</li>
              <li>Oposición al tratamiento</li>
            </ul>
            <p>
              También tienes derecho a presentar una reclamación ante la Agencia
              Española de Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aepd.es
              </a>
              ).
            </p>

            <h2>7. Cookies</h2>
            <p>
              Este sitio web utiliza únicamente cookies técnicas estrictamente
              necesarias para el funcionamiento de la web. No utilizamos cookies
              de seguimiento de terceros ni publicidad comportamental.
            </p>

            <h2>8. Cambios en esta política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política. Los cambios
              materiales se comunicarán por email a los clientes activos con al
              menos 15 días de antelación.
            </p>

            <h2>9. Contacto</h2>
            <p>
              Para cualquier consulta sobre privacidad:{" "}
              <a href="mailto:hola@wevica.com">hola@wevica.com</a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <Link
              href="/"
              className="text-sm text-[#6366f1] hover:text-[#8b5cf6] transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
