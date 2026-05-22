"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { NewsletterForm } from "@/components/newsletter-form";
import { products } from "@/lib/products";
import { useState } from "react";

type FilterType = "all" | "ropa" | "calzado";

export default function ShopPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProducts = products.filter((product) => {
    if (filter === "all") return true;
    if (filter === "ropa") {
      return (
        product.category.toLowerCase().includes("oversize") ||
        product.category.toLowerCase().includes("pants")
      );
    }
    if (filter === "calzado") {
      return product.category.toLowerCase().includes("footwear");
    }
    return true;
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <ScrollReveal>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              COLECCION COMPLETA
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
              SHOP
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Piezas exclusivas disenadas para quienes buscan autenticidad en el
              lujo urbano. Cada prenda es una declaracion de identidad.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Products Grid */}
      <ScrollReveal direction="up">
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} productos
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
                  FILTRAR:
                </span>
                <button
                  onClick={() => setFilter("all")}
                  className={`text-[11px] tracking-[0.2em] px-4 py-2 border transition-all duration-300 ${
                    filter === "all"
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  TODOS
                </button>
                <button
                  onClick={() => setFilter("ropa")}
                  className={`text-[11px] tracking-[0.2em] px-4 py-2 border transition-all duration-300 ${
                    filter === "ropa"
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  ROPA
                </button>
                <button
                  onClick={() => setFilter("calzado")}
                  className={`text-[11px] tracking-[0.2em] px-4 py-2 border transition-all duration-300 ${
                    filter === "calzado"
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  CALZADO
                </button>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredProducts.map((product, index) => (
                  <ScrollReveal
                    key={product.id}
                    direction="up"
                    delay={index * 100}
                  >
                    <ProductCard
                      name={product.name}
                      category={product.category}
                      price={`$${product.price} USD`}
                      image={product.images[0]}
                      slug={product.slug}
                    />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">
                  No se encontraron productos con este filtro.
                </p>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <section className="py-24 px-6 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6 text-center">
              LO QUE DICEN
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-center mb-16">
              TESTIMONIOS
            </h2>
            <TestimonialCarousel />
          </div>
        </section>
      </ScrollReveal>

      {/* Newsletter */}
      <ScrollReveal>
        <section className="py-24 px-6 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              NEWSLETTER
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl leading-tight mb-6">
              MANTENTE ACTUALIZADO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
              Recibe actualizaciones exclusivas sobre nuevos lanzamientos,
              descuentos especiales y contenido exclusivo de NOIR URBANO.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </ScrollReveal>

      {/* Bottom CTA */}
      <ScrollReveal>
        <section className="py-24 px-6 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              EDICION LIMITADA
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl leading-tight mb-6">
              SOLO 100 UNIDADES POR PIEZA
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cada prenda de nuestra primera entrega esta numerada y es
              irrepetible. Una vez agotada, no volvera a fabricarse.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
