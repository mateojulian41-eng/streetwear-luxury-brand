import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SocialLinks } from "@/components/social-links";
import { Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Contacto | NOIR URBANO",
  description:
    "Contactanos para cualquier consulta sobre productos, envios o colaboraciones. Cartagena, Colombia.",
};

const WHATSAPP_NUMBER = "573135859810";
const WHATSAPP_MESSAGE = "Hola! Me interesa conocer más sobre NOIR URBANO.";

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ScrollReveal>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-foreground/30" />
              <p className="text-[10px] tracking-[0.5em] text-muted-foreground">
                CONTACTO
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left - Info */}
              <div>
                <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
                  HABLEMOS
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-md">
                  Para consultas sobre productos, tallas, envíos, colaboraciones
                  o cualquier otra pregunta, estamos aquí para ayudarte.
                </p>

                {/* Contact Methods */}
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-foreground/50 transition-colors group-hover:shadow-premium">
                      <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
                        WHATSAPP
                      </p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:text-foreground transition-colors"
                      >
                        +57 313 585 9810
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Respuesta inmediata
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-foreground/50 transition-colors group-hover:shadow-premium">
                      <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
                        EMAIL
                      </p>
                      <a
                        href="mailto:info@noirurbano.com"
                        className="text-lg hover:text-foreground transition-colors"
                      >
                        info@noirurbano.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Respuesta en 24-48 horas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-foreground/50 transition-colors group-hover:shadow-premium">
                      <MapPin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
                        UBICACIÓN
                      </p>
                      <p className="text-lg">Cartagena, Colombia</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Envíos a todo el país
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                    SÍGUENOS
                  </p>
                  <SocialLinks />
                </div>
              </div>

              {/* Right - WhatsApp CTA */}
              <div className="flex flex-col justify-center">
                <div className="bg-card/30 border border-border/50 p-10 md:p-16 backdrop-blur-sm hover:shadow-premium transition-all duration-300">
                  <div className="w-16 h-16 border border-border/50 flex items-center justify-center mb-8 mx-auto">
                    <MessageCircle className="w-8 h-8 text-foreground" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-6 text-center">
                    CONTACTO DIRECTO
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-center">
                    La forma más rápida de comunicarte con nosotros es vía
                    WhatsApp. Responderemos todas tus consultas de manera
                    inmediata.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full h-16 text-[11px] tracking-[0.3em] shadow-premium hover:shadow-premium-lg transition-all duration-300"
                  >
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      ESCRÍBENOS POR WHATSAPP
                    </a>
                  </Button>

                  <div className="mt-10 pt-10 border-t border-border/50">
                    <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                      HORARIO DE ATENCIÓN
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          Lunes - Viernes
                        </span>
                        <span className="font-medium">9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Sábados</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Domingos</span>
                        <span className="font-medium text-destructive">
                          Cerrado
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal direction="up">
        <section className="py-24 px-6 border-t border-border bg-card/30">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6 text-center">
              PREGUNTAS FRECUENTES
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-center mb-16">
              FAQ
            </h2>

            <div className="space-y-8">
              <div className="pb-8 border-b border-border/50 group">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 border border-border/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-foreground/50 transition-colors">
                    <span className="text-sm font-[family-name:var(--font-display)]">
                      1
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl group-hover:text-foreground/80 transition-colors">
                    ¿CÓMO ELIJO MI TALLA?
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-12">
                  Nuestras prendas tienen corte oversize. Recomendamos elegir tu
                  talla habitual para un fit droopy auténtico, o una talla menos
                  si prefieres un ajuste más ceñido. Contáctanos por WhatsApp
                  para asesorarte personalmente.
                </p>
              </div>

              <div className="pb-8 border-b border-border/50 group">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 border border-border/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-foreground/50 transition-colors">
                    <span className="text-sm font-[family-name:var(--font-display)]">
                      2
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl group-hover:text-foreground/80 transition-colors">
                    ¿CUÁNTO TARDA EL ENVÍO?
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-12">
                  Los envíos dentro de Colombia tardan entre 3-5 días hábiles.
                  Enviamos por Servientrega con número de seguimiento. Envío
                  gratis en compras superiores a $1,600,000 COP.
                </p>
              </div>

              <div className="pb-8 border-b border-border/50 group">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 border border-border/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-foreground/50 transition-colors">
                    <span className="text-sm font-[family-name:var(--font-display)]">
                      3
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl group-hover:text-foreground/80 transition-colors">
                    ¿ACEPTAN CAMBIOS O DEVOLUCIONES?
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-12">
                  Sí, aceptamos cambios de talla dentro de los primeros 7 días
                  después de recibir tu pedido, siempre que el producto esté en
                  perfectas condiciones y con sus etiquetas originales.
                </p>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 border border-border/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-foreground/50 transition-colors">
                    <span className="text-sm font-[family-name:var(--font-display)]">
                      4
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl group-hover:text-foreground/80 transition-colors">
                    ¿SON EDICIONES LIMITADAS?
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-12">
                  Sí, cada pieza de nuestra primera entrega está limitada a 100
                  unidades. Una vez agotadas, no se volverán a fabricar. Cada
                  prenda es numerada y viene con certificado de autenticidad.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-border/50 text-center">
              <p className="text-muted-foreground mb-4">
                ¿Tienes más preguntas?
              </p>
              <Button
                asChild
                size="lg"
                className="h-14 text-[11px] tracking-[0.3em]"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  CONTÁCTANOS POR WHATSAPP
                </a>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
