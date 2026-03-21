import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description:
    "Términos y condiciones de uso de Stock Sync Pro — plugin WordPress y Sync Engine.",
};

export default function TerminosPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-36 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black tracking-tight mb-2">
            Términos de{" "}
            <span className="gradient-text">Uso</span>
          </h1>
          <p className="text-sm text-[#475569] mb-12">
            Última actualización: 20 de marzo de 2026
          </p>

          <div className="prose-wevica">
            <h2>1. Objeto y aceptación</h2>
            <p>
              Los presentes Términos de Uso (en adelante, &ldquo;Términos&rdquo;)
              regulan el acceso y la utilización del software Stock Sync Pro
              (plugin de WordPress) y del servicio Sync Engine (en
              adelante, los &ldquo;Servicios&rdquo;), propiedad de{" "}
              <strong>Stock Sync Pro</strong>. El acceso o uso de los Servicios implica
              la aceptación íntegra de estos Términos.
            </p>

            <h2>2. Licencia de uso</h2>
            <p>
              Stock Sync Pro concede al usuario una licencia no exclusiva, no
              transferible y revocable para instalar y utilizar el plugin Stock
              Sync Pro en el número de sitios WordPress indicado en el plan
              contratado, exclusivamente para los usos descritos en la
              documentación oficial.
            </p>
            <p>
              Queda expresamente prohibido:
            </p>
            <ul>
              <li>Redistribuir, revender o sublicenciar el software.</li>
              <li>
                Realizar ingeniería inversa o intentar extraer el código fuente.
              </li>
              <li>
                Usar el software para actividades ilegales o que infrinjan
                derechos de terceros.
              </li>
            </ul>

            <h2>3. Registro y cuentas</h2>
            <p>
              Para acceder a los Servicios es necesario adquirir una licencia a
              través de Lemon Squeezy. El usuario es responsable de mantener la
              confidencialidad de su clave de licencia y de todas las
              actividades realizadas con ella.
            </p>

            <h2>4. Pagos y facturación</h2>
            <p>
              Los precios se expresan en euros (€) e incluyen IVA cuando
              corresponda según la legislación aplicable. Los pagos son
              procesados por <strong>Lemon Squeezy</strong> (Lemon Squeezy LLC),
              que actúa como Merchant of Record y emite las facturas
              correspondientes.
            </p>
            <p>
              Las suscripciones se renuevan automáticamente al inicio de cada
              período. El usuario puede cancelar en cualquier momento desde su
              panel de cliente en Lemon Squeezy; la cancelación surte efecto al
              final del período en curso.
            </p>

            <h2>5. Política de reembolso</h2>
            <p>
              Ofrecemos 7 días de prueba gratuita sin cargo. Si durante los
              primeros 7 días tras la primera compra el producto no funciona
              conforme a lo descrito, ofrecemos reembolso completo previa
              solicitud a{" "}
              <a href="mailto:hola@wevica.com">hola@wevica.com</a>. No se
              realizan reembolsos pasados 7 días desde la compra, ni por
              renovaciones de suscripción.
            </p>

            <h2>6. Disponibilidad del servicio</h2>
            <p>
              Stock Sync Pro se compromete a mantener una disponibilidad del servicio
              del 99,5% mensual (excluyendo mantenimientos programados notificados
              con al menos 24 horas de antelación). En caso de incumplimiento, el
              usuario podrá solicitar un crédito proporcional en su próxima
              factura.
            </p>

            <h2>7. Limitación de responsabilidad</h2>
            <p>
              En la máxima medida permitida por la ley aplicable, Stock Sync Pro no será
              responsable de pérdidas de datos, pérdidas de beneficios ni daños
              indirectos o consecuentes derivados del uso o imposibilidad de uso
              de los Servicios. La responsabilidad máxima de Stock Sync Pro en cualquier
              circunstancia no excederá el importe abonado por el usuario en los
              12 meses anteriores al hecho causante.
            </p>

            <h2>8. Propiedad intelectual</h2>
            <p>
              Todos los derechos de propiedad intelectual sobre los Servicios
              (código, diseño, marcas, documentación) pertenecen a Stock Sync Pro o a
              sus licenciantes. Nada en estos Términos otorga al usuario
              derechos sobre dichos elementos más allá de lo estrictamente
              necesario para el uso del Servicio.
            </p>

            <h2>9. Modificaciones</h2>
            <p>
              Stock Sync Pro se reserva el derecho a modificar estos Términos. Los
              cambios materiales se notificarán con al menos 15 días de
              antelación por email. El uso continuado de los Servicios tras la
              fecha de entrada en vigor de los nuevos Términos implica su
              aceptación.
            </p>

            <h2>10. Ley aplicable y jurisdicción</h2>
            <p>
              Estos Términos se rigen por la legislación española. Para cualquier
              controversia, las partes se someten a la jurisdicción de los
              juzgados y tribunales de España, con renuncia expresa a cualquier
              otro fuero que pudiera corresponderles.
            </p>

            <h2>11. Contacto</h2>
            <p>
              Para cualquier consulta sobre estos Términos:{" "}
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
