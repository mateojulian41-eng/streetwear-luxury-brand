import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SocialLinks } from "@/components/social-links";
import { ArrowRight, MapPin, Award, Infinity } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <ScrollReveal>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-foreground/30" />
              <p className="text-[10px] tracking-[0.5em] text-muted-foreground">
                SOBRE NOSOTROS
              </p>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
              NOIR URBANO
            </h1>
            <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
              Nacida en Cartagena, NOIR URBANO es una marca nativa de streetwear
              premium que fusiona la crudeza de la cultura callejera con la
              calidad del negro absoluto.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground tracking-[0.2em]">
                CARTAGENA, COLOMBIA
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Story */}
      <ScrollReveal direction="up">
        <section className="py-24 px-6 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6 text-center">
              NUESTRA HISTORIA
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-center mb-12">
              DEL CAOS A LA ELEGANCIA
            </h2>
            <div className="space-y-8 text-muted-foreground leading-relaxed text-lg">
              <p className="first-letter:text-5xl first-letter:font-[family-name:var(--font-display)] first-letter:text-foreground first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px]">
                NOIR URBANO nació de la necesidad de expresar una identidad
                única en el panorama del streetwear colombiano. Fundada en
                Cartagena, nuestra marca representa la convergencia entre la
                energía cruda de las calles y la sofisticación del diseño
                contemporáneo.
              </p>
              <p>
                Cada pieza que creamos es una declaración de identidad. No
                seguimos tendencias; las definimos. Nuestro enfoque en el negro
                absoluto no es estético, es filosófico: representa la ausencia
                de distracciones, la pureza de la forma, la esencia del diseño.
              </p>
              <p>
                Trabajamos con materiales premium y técnicas de producción
                artesanales para garantizar que cada prenda sea una obra de arte
                funcional. Ediciones limitadas de 100 unidades por pieza
                aseguran la exclusividad y el valor de cada artículo.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Values */}
      <ScrollReveal>
        <section className="py-24 px-6 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6 text-center">
              NUESTROS VALORES
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-center mb-16">
              LO QUE NOS DEFINE
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 border border-border/30 hover:border-foreground/30 transition-all duration-300 group hover:shadow-premium">
                <div className="w-16 h-16 mx-auto mb-6 border border-border/30 rounded-full flex items-center justify-center group-hover:border-foreground/50 transition-colors">
                  <Award className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                  AUTENTICIDAD
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No imitamos, creamos. Cada diseño es una expresión genuina de
                  nuestra visión del streetwear.
                </p>
              </div>
              <div className="text-center p-8 border border-border/30 hover:border-foreground/30 transition-all duration-300 group hover:shadow-premium">
                <div className="w-16 h-16 mx-auto mb-6 border border-border/30 rounded-full flex items-center justify-center group-hover:border-foreground/50 transition-colors">
                  <Infinity className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                  CALIDAD
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Materiales premium, producción artesanal, atención al detalle
                  en cada costura.
                </p>
              </div>
              <div className="text-center p-8 border border-border/30 hover:border-foreground/30 transition-all duration-300 group hover:shadow-premium">
                <div className="w-16 h-16 mx-auto mb-6 border border-border/30 rounded-full flex items-center justify-center group-hover:border-foreground/50 transition-colors">
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                  EXCLUSIVIDAD
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ediciones limitadas de 100 unidades. Cuando se agotan, no
                  vuelven.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats */}
      <ScrollReveal direction="up">
        <section className="py-28 px-6 border-t border-border/30 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 border border-border/30 hover:border-foreground/30 transition-all duration-300 group">
                <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  100
                </p>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  UNIDADES POR PIEZA
                </p>
              </div>
              <div className="p-6 border border-border/30 hover:border-foreground/30 transition-all duration-300 group">
                <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </p>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  HECHO EN COLOMBIA
                </p>
              </div>
              <div className="p-6 border border-border/30 hover:border-foreground/30 transition-all duration-300 group">
                <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  450gsm
                </p>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  ALGODÓN PREMIUM
                </p>
              </div>
              <div className="p-6 border border-border/30 hover:border-foreground/30 transition-all duration-300 group">
                <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  ∞
                </p>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  NEGRO ABSOLUTO
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-24 px-6 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              ÚNETE AL MOVIMIENTO
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl leading-tight mb-6">
              SÉ PARTE DE NOIR URBANO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Síguenos en redes sociales para estar al tanto de nuevos drops,
              contenido exclusivo y detrás de cámaras.
            </p>
            <div className="flex items-center justify-center gap-6">
              <SocialLinks />
            </div>
            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground">
                ¿Tienes preguntas?{" "}
                <a
                  href="mailto:noirurbano1@gmail.com"
                  className="text-foreground hover:underline underline-offset-4"
                >
                  Contáctanos
                </a>
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
