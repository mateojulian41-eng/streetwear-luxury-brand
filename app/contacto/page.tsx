import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SocialLinks } from "@/components/social-links";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | NOIR URBANO",
  description:
    "Contactanos para cualquier consulta sobre productos, envios o colaboraciones. Cartagena, Colombia.",
};

const WHATSAPP_NUMBER = "573135859810";
const WHATSAPP_MESSAGE = "Hola! Me interesa conocer mas sobre NOIR URBANO.";

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Info */}
            <div>
              <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
                CONTACTO
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
                HABLEMOS
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-md">
                Para consultas sobre productos, tallas, envios, colaboraciones o
                cualquier otra pregunta, estamos aqui para ayudarte.
              </p>

              {/* Contact Methods */}
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
                      WHATSAPP
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-muted-foreground transition-colors"
                    >
                      +57 313 585 9810
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Respuesta inmediata
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
                      EMAIL
                    </p>
                    <a
                      href="mailto:hola@noirurbano.com"
                      className="text-lg hover:text-muted-foreground transition-colors"
                    >
                      hola@noirurbano.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Respuesta en 24-48 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
                      UBICACION
                    </p>
                    <p className="text-lg">Cartagena, Colombia</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Envios a todo el pais
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                  SIGUENOS
                </p>
                <SocialLinks />
              </div>
            </div>

            {/* Right - WhatsApp CTA */}
            <div className="flex flex-col justify-center">
              <div className="bg-card border border-border p-10 md:p-16">
                <div className="w-16 h-16 border border-border flex items-center justify-center mb-8">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-6">
                  CONTACTO DIRECTO
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  La forma mas rapida de comunicarte con nosotros es via
                  WhatsApp. Responderemos todas tus consultas de manera
                  inmediata.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full h-16 text-[11px] tracking-[0.3em]"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    ESCRIBENOS POR WHATSAPP
                  </a>
                </Button>

                <div className="mt-10 pt-10 border-t border-border">
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                    HORARIO DE ATENCION
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Lunes - Viernes
                      </span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sabados</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domingos</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6 text-center">
            PREGUNTAS FRECUENTES
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-center mb-16">
            FAQ
          </h2>

          <div className="space-y-8">
            <div className="pb-8 border-b border-border">
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-3">
                COMO ELIJO MI TALLA?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nuestras prendas tienen corte oversize. Recomendamos elegir tu
                talla habitual para un fit droopy autentico, o una talla menos
                si prefieres un ajuste mas ceñido. Contactanos por WhatsApp para
                asesorarte personalmente.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-3">
                CUANTO TARDA EL ENVIO?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Los envios dentro de Colombia tardan entre 3-5 dias habiles.
                Enviamos por servientrega con numero de seguimiento. Envio
                gratis en compras superiores a $400 USD.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-3">
                ACEPTAN CAMBIOS O DEVOLUCIONES?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Si, aceptamos cambios de talla dentro de los primeros 7 dias
                despues de recibir tu pedido, siempre que el producto este en
                perfectas condiciones y con sus etiquetas originales.
              </p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-3">
                SON EDICIONES LIMITADAS?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Si, cada pieza de nuestra primera entrega esta limitada a 100
                unidades. Una vez agotadas, no se volveran a fabricar. Cada
                prenda es numerada y viene con certificado de autenticidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
