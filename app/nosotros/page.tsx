import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SocialLinks } from "@/components/social-links";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <ScrollReveal>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              SOBRE NOSOTROS
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
              NOIR URBANO
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Nacida en Cartagena, NOIR URBANO es una marca nativa de streetwear
              luxury que fusiona la crudeza de la cultura callejera con la
              elegancia del negro absoluto.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Story */}
      <ScrollReveal direction="up">
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6 text-center">
              NUESTRA HISTORIA
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-center mb-12">
              DEL CAOS A LA ELEGANCIA
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                NOIR URBANO nació de la necesidad de expresar una identidad única
                en el panorama del streetwear colombiano. Fundada en Cartagena,
                nuestra marca representa la convergencia entre la energía cruda
                de las calles y la sofisticación del diseño contemporáneo.
              </p>
              <p>
                Cada pieza que creamos es una declaración de identidad. No
                seguimos tendencias; las definimos. Nuestro enfoque en el negro
                absoluto no es estético, es filosófico: representa la ausencia de
                distracciones, la pureza de la forma, la esencia del diseño.
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
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                  AUTENTICIDAD
                </h3>
                <p className="text-muted-foreground">
                  No imitamos, creamos. Cada diseño es una expresión genuina de
                  nuestra visión del streetwear.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                  CALIDAD
                </h3>
                <p className="text-muted-foreground">
                  Materiales premium, producción artesanal, atención al detalle
                  en cada costura.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                  EXCLUSIVIDAD
                </h3>
                <p className="text-muted-foreground">
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
        <section className="py-24 px-6 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-2">
                  100
                </p>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  UNIDADES POR PIEZA
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-2">
                  100%
                </p>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  HECHO EN COLOMBIA
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-2">
                  450gsm
                </p>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  ALGODÓN PREMIUM
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-2">
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
            <p className="text-muted-foreground leading-relaxed mb-8">
              Síguenos en redes sociales para estar al tanto de nuevos drops,
              contenido exclusivo y detrás de cámaras.
            </p>
            <div className="flex items-center justify-center gap-6">
              <SocialLinks />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
