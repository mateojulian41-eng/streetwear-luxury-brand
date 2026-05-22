import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | NOIR URBANO",
  description: "Política de privacidad de NOIR URBANO. Cómo protegemos tu información personal.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ScrollReveal>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              LEGAL
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-none mb-8">
              POLÍTICA DE PRIVACIDAD
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Última actualización: Mayo 2026
            </p>
          </div>
        </section>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-border mb-16" />
      </div>

      <ScrollReveal direction="up">
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                1. INFORMACIÓN QUE RECOLECTAMOS
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Recopilamos información personal que nos proporcionas
                voluntariamente:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Dirección de envío</li>
                <li>Información de pago (procesada de forma segura)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                2. CÓMO USAMOS TU INFORMACIÓN
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos tu información personal para:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>Procesar y enviar tus pedidos</li>
                <li>Comunicarnos contigo sobre tu pedido</li>
                <li>Enviar actualizaciones sobre nuevos productos y ofertas</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Prevenir fraudes y proteger nuestra plataforma</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                3. SEGURIDAD DE DATOS
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implementamos medidas de seguridad para proteger tu información:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  Cifrado SSL para todas las transacciones en línea
                </li>
                <li>
                  Procesamiento de pagos a través de pasarelas seguras
                </li>
                <li>
                  Acceso restringido a la información personal
                </li>
                <li>
                  Actualizaciones regulares de nuestros sistemas de seguridad
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                4. COMPARTIR INFORMACIÓN
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No vendemos tu información personal a terceros. Solo compartimos
                tu información con:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  Servicios de envío para entregar tu pedido (Servientrega)
                </li>
                <li>
                  Procesadores de pagos para procesar transacciones
                </li>
                <li>
                  Autoridades gubernamentales cuando sea requerido por ley
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                5. COOKIES
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos cookies para mejorar tu experiencia:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  Cookies esenciales para el funcionamiento del sitio
                </li>
                <li>
                  Cookies de análisis para entender el uso del sitio
                </li>
                <li>
                  Cookies de marketing para personalizar contenido
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Puedes configurar tu navegador para rechazar cookies, pero esto
                puede afectar la funcionalidad del sitio.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                6. TUS DERECHOS
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tienes derecho a:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  Acceder a tu información personal
                </li>
                <li>
                  Corregir información incorrecta
                </li>
                <li>
                  Eliminar tu información personal
                </li>
                <li>
                  Oponerte al procesamiento de tus datos
                </li>
                <li>
                  Retirar tu consentimiento en cualquier momento
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para ejercer estos derechos, contáctanos a hola@noirurbano.com
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                7. CONSERVACIÓN DE DATOS
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Conservamos tu información personal solo mientras sea necesario
                para los fines descritos en esta política. Los datos de pedidos se
                conservan por 5 años para cumplir con obligaciones legales y
                contables.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                8. CAMBIOS A ESTA POLÍTICA
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos actualizar esta política de privacidad periódicamente.
                Te notificaremos sobre cambios importantes mediante correo
                electrónico o mediante un aviso en nuestro sitio web.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                9. CONTACTO
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para cualquier pregunta sobre nuestra política de privacidad o
                para ejercer tus derechos, contáctanos a través de WhatsApp:
                +57 313 585 9810 o email: hola@noirurbano.com
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
