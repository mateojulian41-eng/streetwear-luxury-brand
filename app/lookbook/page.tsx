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
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-foreground/5 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-foreground/3 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-foreground/40" />
              <p className="text-[10px] tracking-[0.5em] text-foreground/80 font-medium">
                LOOKBOOK
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-foreground/40" />
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
              COLECCIÓN
              <span
                className="block text-foreground/50"
                style={{
                  WebkitTextStroke: "2px oklch(0.40 0 0)",
                  color: "transparent",
                }}
              >
                2024
              </span>
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed text-sm md:text-base">
              Explora nuestra primera colección. Piezas exclusivas diseñadas
              para quienes buscan autenticidad en el lujo urbano.
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
        <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  direction="up"
                  delay={index * 100}
                >
                  <Link href={`/shop/${product.slug}`}>
                    <div className="group relative aspect-[3/4] overflow-hidden bg-card border border-border/30 shadow-premium hover:shadow-premium-lg transition-all duration-500">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-background/90 backdrop-blur-md border border-border/30 text-[9px] tracking-[0.25em] text-muted-foreground uppercase shadow-sm">
                          {product.category}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-2">
                          {product.name}
                        </h3>
                        <p className="text-white/80 text-sm flex items-center gap-2">
                          Ver producto
                          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </p>
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
        <section className="py-24 px-6 border-t border-border bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[30%] left-[20%] w-72 h-72 bg-foreground/5 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-[30%] right-[20%] w-56 h-56 bg-foreground/3 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "3s" }}
            />
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-foreground/40" />
              <p className="text-[10px] tracking-[0.5em] text-foreground/80 font-medium">
                NOIR URBANO
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-foreground/40" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl leading-tight mb-6">
              EL NEGRO ES
              <span
                className="block text-foreground/50"
                style={{
                  WebkitTextStroke: "2px oklch(0.40 0 0)",
                  color: "transparent",
                }}
              >
                NUESTRO LIENZO
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-lg mx-auto">
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
