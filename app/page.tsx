"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { products, formatPrice } from "@/lib/products";
import { ArrowRight, Star, Quote, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { MarqueeStrip } from "@/components/marquee-strip";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CursorFollower } from "@/components/cursor-follower";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { NewsletterForm } from "@/components/newsletter-form";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set drop date to a fixed date (June 1, 2026)
    const dropDate = new Date("2026-06-01T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = dropDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <Image
              src="/images/hero-model.jpg"
              alt="NOIR URBANO - Streetwear Luxury"
              fill
              className="object-cover opacity-25"
              priority
            />
          </div>
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-background/90" />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 via-transparent to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/40 to-transparent" />
          <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/40 to-transparent" />
          {/* Floating orbs */}
          <div
            className="absolute top-[20%] left-[20%] w-64 h-64 bg-foreground/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-[30%] right-[15%] w-96 h-96 bg-foreground/3 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "12s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.6em] text-muted-foreground mb-8 animate-fade-up">
            CARTAGENA, COLOMBIA — SS26
          </p>

          <h1 className="font-[family-name:var(--font-display)] leading-none tracking-tight mb-8">
            <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] animate-fade-up-delay-1">
              NOIR
            </span>
            <span
              className="block text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] animate-fade-up-delay-2"
              style={{
                WebkitTextStroke: "1px oklch(0.97 0 0)",
                color: "transparent",
              }}
            >
              URBANO
            </span>
          </h1>

          {/* Animated separator line */}
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-up-delay-3">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-border" />
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
              STREETWEAR LUXURY
            </p>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-border" />
          </div>

          <p className="text-sm md:text-base text-muted-foreground max-w-sm mx-auto mb-12 leading-relaxed animate-fade-up-delay-3">
            La crudeza de la calle.
            <br />
            La elegancia del negro absoluto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-10 text-[11px] tracking-[0.3em] shadow-premium hover:shadow-premium-lg transition-all duration-300"
            >
              <Link href="/shop">
                EXPLORAR COLECCIÓN
                <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
            </Button>
            <Link
              href="/nosotros"
              className="text-[11px] tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-3"
            >
              NOSOTROS
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-4">
          <span className="text-[9px] tracking-[0.4em] text-muted-foreground/60">
            SCROLL
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        </div>
      </section>

      {/* Marquee Strip */}
      <MarqueeStrip />

      {/* Countdown Section */}
      <ScrollReveal>
        <section className="py-24 md:py-32 px-6 border-t border-border bg-card">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
                PROXIMO DROP
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl leading-tight mb-4">
                COLECCION V2
              </h2>
              <p className="text-muted-foreground">
                Edicion limitada de 100 unidades por pieza
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center group">
                <div className="aspect-square border border-border/50 flex items-center justify-center mb-3 bg-card/30 backdrop-blur-sm relative overflow-hidden shadow-premium transition-all duration-300 group-hover:shadow-premium-lg group-hover:border-foreground/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="font-[family-name:var(--font-display)] text-4xl md:text-6xl relative z-10">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  DIAS
                </p>
              </div>
              <div className="text-center group">
                <div className="aspect-square border border-border/50 flex items-center justify-center mb-3 bg-card/30 backdrop-blur-sm relative overflow-hidden shadow-premium transition-all duration-300 group-hover:shadow-premium-lg group-hover:border-foreground/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="font-[family-name:var(--font-display)] text-4xl md:text-6xl relative z-10">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  HORAS
                </p>
              </div>
              <div className="text-center group">
                <div className="aspect-square border border-border/50 flex items-center justify-center mb-3 bg-card/30 backdrop-blur-sm relative overflow-hidden shadow-premium transition-all duration-300 group-hover:shadow-premium-lg group-hover:border-foreground/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="font-[family-name:var(--font-display)] text-4xl md:text-6xl relative z-10">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  MIN
                </p>
              </div>
              <div className="text-center group">
                <div className="aspect-square border border-border/50 flex items-center justify-center mb-3 bg-card/30 backdrop-blur-sm relative overflow-hidden shadow-premium transition-all duration-300 group-hover:shadow-premium-lg group-hover:border-foreground/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="font-[family-name:var(--font-display)] text-4xl md:text-6xl relative z-10">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  SEG
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="h-14 px-10 text-[11px] tracking-[0.3em]"
              >
                <Link href="/shop">
                  VER COLECCION ACTUAL
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Manifesto Section */}
      <ScrollReveal>
        <section className="py-28 md:py-44 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-center">
              <div>
                <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
                  MANIFIESTO
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-0">
                  NACIDOS
                  <br />
                  EN LA
                  <br />
                  <span
                    style={{
                      WebkitTextStroke: "1px oklch(0.40 0 0)",
                      color: "transparent",
                    }}
                  >
                    OSCURIDAD
                  </span>
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  Somos una marca nativa de streetwear luxury nacida en
                  Cartagena, creada por y para jovenes que viven el flow urbano
                  a traves de una estetica dark y rebelde.
                </p>
                <p>
                  Fusionamos la crudeza de la cultura callejera, el arte del
                  grafiti americano y la elegancia del negro absoluto en una
                  linea exclusiva de prendas premium.
                </p>
                <p>
                  Nuestro proposito es vestir a una generacion transgresora pero
                  sofisticada, ofreciendo prendas con una identidad oscura y un
                  caracter premium que desafia lo convencional.
                </p>

                {/* Stats inline */}
                <div className="flex items-center gap-10 pt-6 border-t border-border">
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-3xl">
                      100%
                    </p>
                    <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-1">
                      COLOMBIANO
                    </p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-3xl">
                      450GSM
                    </p>
                    <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-1">
                      GRAMAJE PREMIUM
                    </p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-3xl">
                      SS26
                    </p>
                    <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-1">
                      TEMPORADA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Products Section */}
      <ScrollReveal>
        <section className="py-28 md:py-44 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
              <div>
                <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-4">
                  COLECCIÓN INAUGURAL
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-9xl leading-none">
                  PRIMERA
                  <br />
                  <span
                    style={{
                      WebkitTextStroke: "1px oklch(0.40 0 0)",
                      color: "transparent",
                    }}
                  >
                    ENTREGA
                  </span>
                </h2>
              </div>
              <div className="flex gap-6 pb-2">
                <div className="text-center">
                  <p className="font-[family-name:var(--font-display)] text-4xl">
                    07
                  </p>
                  <p className="text-[9px] tracking-[0.2em] text-muted-foreground mt-1">
                    PIEZAS
                  </p>
                </div>
                <div className="h-12 w-px bg-border self-center" />
                <div className="text-center">
                  <p className="font-[family-name:var(--font-display)] text-4xl">
                    100
                  </p>
                  <p className="text-[9px] tracking-[0.2em] text-muted-foreground mt-1">
                    UNIDADES
                  </p>
                </div>
                <div className="h-12 w-px bg-border self-center" />
                <div className="text-center">
                  <p className="font-[family-name:var(--font-display)] text-4xl">
                    01
                  </p>
                  <p className="text-[9px] tracking-[0.2em] text-muted-foreground mt-1">
                    DROP
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 120}>
                  <ProductCard
                    name={product.name}
                    category={product.category}
                    price={formatPrice(product.price)}
                    image={product.images[0]}
                    slug={product.slug}
                  />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="text-center mt-16">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 px-10 text-[11px] tracking-[0.3em]"
                >
                  <Link href="/shop">
                    VER TODA LA COLECCIÓN
                    <ArrowRight className="w-4 h-4 ml-3" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* Lookbook Section */}
      <ScrollReveal>
        <section className="py-28 md:py-44 px-6 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
                LOOKBOOK
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl leading-none">
                ESTETICA
                <br />
                <span
                  style={{
                    WebkitTextStroke: "1px oklch(0.40 0 0)",
                    color: "transparent",
                  }}
                >
                  URBANA
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="aspect-[3/4] bg-card overflow-hidden relative group">
                <Image
                  src="/images/product-hoodie.jpg"
                  alt="Lookbook 1"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group md:row-span-2">
                <Image
                  src="/images/hero-model.jpg"
                  alt="Lookbook 2"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group">
                <Image
                  src="/images/product-pants.jpg"
                  alt="Lookbook 3"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group">
                <Image
                  src="/images/product-shoes.jpg"
                  alt="Lookbook 4"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group">
                <Image
                  src="/images/product-hoodie.jpg"
                  alt="Lookbook 5"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group">
                <Image
                  src="/images/product-pants.jpg"
                  alt="Lookbook 6"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal>
        <section className="py-28 md:py-44 px-6 border-t border-border bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
                TESTIMONIOS
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl leading-none">
                LO QUE DICEN
                <br />
                <span
                  style={{
                    WebkitTextStroke: "1px oklch(0.40 0 0)",
                    color: "transparent",
                  }}
                >
                  LOS NUESTROS
                </span>
              </h2>
            </div>
            <TestimonialCarousel />
          </div>
        </section>
      </ScrollReveal>

      {/* Newsletter Section */}
      <ScrollReveal>
        <section className="py-28 md:py-44 px-6 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              NEWSLETTER
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-6xl leading-tight mb-6">
              UNETE AL MOVIMIENTO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
              Recibe acceso anticipado a nuevos drops, ofertas exclusivas y
              contenido detrás de cámaras. Sin spam, solo streetwear.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </ScrollReveal>

      {/* Statement Section */}
      <ScrollReveal>
        <section className="py-28 md:py-44 px-6 border-t border-border relative overflow-hidden">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <p className="font-[family-name:var(--font-display)] text-[clamp(5rem,18vw,16rem)] leading-none text-border/20 select-none whitespace-nowrap">
              LUJO URBANO
            </p>
          </div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-12">
              "EL LUJO NO ES
              <br className="hidden md:block" />
              LO QUE LLEVAS,
              <br className="hidden md:block" />
              <span
                style={{
                  WebkitTextStroke: "1px oklch(0.50 0 0)",
                  color: "transparent",
                }}
              >
                ES QUIEN ERES"
              </span>
            </h2>
            <Button
              asChild
              size="lg"
              className="h-14 px-10 text-[11px] tracking-[0.3em]"
            >
              <Link href="/shop">
                COMPRAR AHORA
                <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
            </Button>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
