import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nosotros | NOIR URBANO",
  description: "Conoce la historia de NOIR URBANO, una marca de streetwear luxury nacida en Cartagena, Colombia."
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
            SOBRE NOSOTROS
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
            NUESTRA<br />
            <span className="text-muted-foreground/50">HISTORIA</span>
          </h1>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Story Section */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-muted-foreground leading-relaxed text-lg">
            <p>
              NOIR URBANO nacio en las calles de Cartagena, donde el calor tropical choca con la oscuridad del asfalto. 
              Donde el grafiti americano se mezcla con la herencia colonial, creando una estetica unica que no existe en ningun otro lugar del mundo.
            </p>
            <p>
              Somos una marca nativa de streetwear luxury, creada por y para jovenes que viven el flow urbano a traves de una estetica dark y rebelde. 
              No seguimos tendencias - las creamos.
            </p>
            <p>
              Fusionamos la crudeza de la cultura callejera, el arte del grafiti americano y la elegancia del negro absoluto en una linea exclusiva de prendas premium. 
              Cada pieza es una declaracion de identidad, confeccionada con materiales de la mas alta calidad y detalles que reflejan nuestra vision oscura y rebelde.
            </p>
            <p>
              Nuestro proposito es vestir a una generacion transgresora pero sofisticada, ofreciendo prendas con una identidad oscura y un caracter premium que desafia lo convencional. 
              Creemos que el verdadero lujo no esta en el precio, sino en la autenticidad.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-40 px-6 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              NUESTROS VALORES
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl leading-none">
              LO QUE<br />
              <span className="text-muted-foreground/50">DEFINIMOS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 border border-border mx-auto mb-6 flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-3xl">01</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl mb-4">AUTENTICIDAD</h3>
              <p className="text-muted-foreground leading-relaxed">
                No imitamos, creamos. Cada prenda es una expresion original de nuestra vision del streetwear.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 border border-border mx-auto mb-6 flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-3xl">02</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl mb-4">CALIDAD</h3>
              <p className="text-muted-foreground leading-relaxed">
                Materiales premium, confeccion artesanal y atencion al detalle en cada costura.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 border border-border mx-auto mb-6 flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-3xl">03</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl mb-4">EXCLUSIVIDAD</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ediciones limitadas de 100 unidades. Cuando se agotan, no vuelven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
            UNETE AL MOVIMIENTO
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-6xl leading-tight mb-8">
            SE PARTE DE<br />
            <span className="text-muted-foreground/50">LA GENERACION</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Descubre nuestra coleccion inaugural y encuentra la pieza que define tu identidad.
          </p>
          <Button asChild size="lg" className="h-14 px-10 text-[11px] tracking-[0.3em]">
            <Link href="/shop">
              EXPLORAR COLECCION
              <ArrowRight className="w-4 h-4 ml-3" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
