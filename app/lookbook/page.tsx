import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function LookbookPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <ScrollReveal>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              LOOKBOOK
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
              COLECCIÓN 2024
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Explora nuestra primera colección. Piezas exclusivas diseñadas para
              quienes buscan autenticidad en el lujo urbano.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Lookbook Grid */}
      <ScrollReveal direction="up">
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ScrollReveal key={product.id} direction="up" delay={index * 100}>
                  <Link href={`/shop/${product.slug}`}>
                    <div className="group relative aspect-[3/4] overflow-hidden bg-card border border-border/50">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-[10px] tracking-[0.3em] text-white/80 mb-2">
                          {product.category}
                        </p>
                        <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-2">
                          {product.name}
                        </h3>
                        <p className="text-white/80 text-sm">Ver producto →</p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Statement */}
      <ScrollReveal>
        <section className="py-24 px-6 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              NOIR URBANO
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl leading-tight mb-6">
              EL NEGRO ES NUESTRO LIENZO
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cada pieza cuenta una historia. Cada look es una declaración.
              Descubre la identidad que define tu estilo.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
