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
              alt="NOIR URBANO - Streetwear Premium"
              fill
              className="object-cover opacity-25 scale-110"
              priority
              quality={85}
              sizes="100vw"
            />
          </div>
          {/* Enhanced multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/70 to-background/98" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/60 to-background/98" />
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-foreground/15 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-bl from-foreground/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent" />
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-[5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/40 to-transparent animate-pulse" />
          <div
            className="absolute right-[5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/40 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-[10%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
          <div className="absolute bottom-[10%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
          {/* Enhanced floating orbs with different animations */}
          <div
            className="absolute top-[15%] left-[15%] w-72 h-72 bg-foreground/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "8s", animationDelay: "0s" }}
          />
          <div
            className="absolute top-[25%] right-[20%] w-48 h-48 bg-foreground/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-[25%] left-[25%] w-64 h-64 bg-foreground/12 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "12s", animationDelay: "4s" }}
          />
          <div
            className="absolute bottom-[35%] right-[10%] w-80 h-80 bg-foreground/8 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "14s", animationDelay: "1s" }}
          />
          {/* Additional subtle orbs */}
          <div
            className="absolute top-[40%] left-[40%] w-32 h-32 bg-foreground/5 rounded-full blur-2xl animate-pulse"
            style={{ animationDuration: "9s", animationDelay: "3s" }}
          />
          <div
            className="absolute top-[60%] right-[30%] w-40 h-40 bg-foreground/6 rounded-full blur-2xl animate-pulse"
            style={{ animationDuration: "11s", animationDelay: "5s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <p
            className="text-[10px] md:text-xs tracking-[0.6em] text-muted-foreground mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            CARTAGENA, COLOMBIA — SS26
          </p>

          <h1 className="font-[family-name:var(--font-display)] leading-none tracking-tight mb-8">
            <span
              className="block text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] animate-fade-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              NOIR
            </span>
            <span
              className="block text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] animate-fade-up opacity-0"
              style={{
                WebkitTextStroke: "2px oklch(0.97 0 0)",
                color: "transparent",
                animationDelay: "0.6s",
                animationFillMode: "forwards",
              }}
            >
              URBANO
            </span>
          </h1>

          {/* Enhanced animated separator line */}
          <div
            className="flex items-center justify-center gap-6 mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent via-foreground/60 to-transparent" />
            <p className="text-[10px] tracking-[0.4em] text-foreground/90 font-medium">
              STREETWEAR PREMIUM
            </p>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent via-foreground/60 to-transparent" />
          </div>

          <p
            className="text-sm md:text-base text-muted-foreground max-w-sm mx-auto mb-12 leading-relaxed animate-fade-up opacity-0"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            La crudeza de la calle.
            <br />
            La calidad del negro absoluto.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-10 text-[11px] tracking-[0.3em] shadow-premium hover:shadow-premium-lg transition-all duration-300 bg-foreground text-background hover:bg-foreground/90"
            >
              <Link href="/shop">
                EXPLORAR COLECCIÓN
                <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
            </Button>
            <Link
              href="/nosotros"
              className="text-[11px] tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-3 border border-transparent hover:border-border/30 px-6 rounded-full"
            >
              NOSOTROS
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up opacity-0"
          style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
        >
          <span className="text-[9px] tracking-[0.4em] text-foreground/60">
            SCROLL
          </span>
          <div className="w-px h-24 bg-gradient-to-b from-foreground/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Marquee Strip */}
      <MarqueeStrip />

      {/* Countdown Section */}
      <ScrollReveal>
        <section className="py-28 md:py-36 px-6 border-t border-border/30 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-foreground/5 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-foreground/3 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-foreground/40" />
                <p className="text-[10px] tracking-[0.5em] text-foreground/80 font-medium">
                  LANZAMIENTO OFICIAL
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-foreground/40" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl leading-tight mb-4">
                COLECCION
                <span
                  className="block text-foreground/50"
                  style={{
                    WebkitTextStroke: "1px oklch(0.40 0 0)",
                    color: "transparent",
                  }}
                >
                  INAUGURAL
                </span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
                Producción limitada de 100 unidades por pieza
              </p>
            </div>

            {/* Enhanced Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-16">
              <div className="text-center group">
                <div className="aspect-square border border-border/30 flex items-center justify-center mb-4 bg-gradient-to-br from-foreground/8 to-transparent backdrop-blur-sm relative overflow-hidden shadow-premium transition-all duration-500 group-hover:shadow-premium-lg group-hover:border-foreground/50 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-2 left-2 w-2 h-2 bg-foreground/40 rounded-full animate-pulse" />
                  <span className="font-[family-name:var(--font-display)] text-5xl md:text-7xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  DIAS
                </p>
              </div>
              <div className="text-center group">
                <div className="aspect-square border border-border/30 flex items-center justify-center mb-4 bg-gradient-to-br from-foreground/8 to-transparent backdrop-blur-sm relative overflow-hidden shadow-premium transition-all duration-500 group-hover:shadow-premium-lg group-hover:border-foreground/50 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="absolute top-2 left-2 w-2 h-2 bg-foreground/40 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <span className="font-[family-name:var(--font-display)] text-5xl md:text-7xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  HORAS
                </p>
              </div>
              <div className="text-center group">
                <div className="aspect-square border border-border/30 flex items-center justify-center mb-4 bg-gradient-to-br from-foreground/8 to-transparent backdrop-blur-sm relative overflow-hidden shadow-premium transition-all duration-500 group-hover:shadow-premium-lg group-hover:border-foreground/50 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="absolute top-2 left-2 w-2 h-2 bg-foreground/40 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <span className="font-[family-name:var(--font-display)] text-5xl md:text-7xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  MIN
                </p>
              </div>
              <div className="text-center group">
                <div className="aspect-square border border-border/30 flex items-center justify-center mb-4 bg-gradient-to-br from-foreground/8 to-transparent backdrop-blur-sm relative overflow-hidden shadow-premium transition-all duration-500 group-hover:shadow-premium-lg group-hover:border-foreground/50 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="absolute top-2 left-2 w-2 h-2 bg-foreground/40 rounded-full animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <span className="font-[family-name:var(--font-display)] text-5xl md:text-7xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  SEG
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="h-14 px-10 text-[11px] tracking-[0.3em] shadow-premium hover:shadow-premium-lg transition-all duration-300 bg-foreground text-background hover:bg-foreground/90"
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
        <section className="py-28 md:py-44 px-6 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-foreground/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-foreground/3 rounded-full blur-3xl" />
                <p className="text-[10px] tracking-[0.5em] text-foreground/70 mb-6">
                  MANIFIESTO
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-0 relative z-10">
                  NACIDOS
                  <br />
                  DEL
                  <br />
                  <span
                    className="block"
                    style={{
                      WebkitTextStroke: "2px oklch(0.40 0 0)",
                      color: "transparent",
                    }}
                  >
                    CAOS URBANO
                  </span>
                </h2>
              </div>
              <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base relative">
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent hidden md:block" />
                <p className="relative z-10 pl-8">
                  Somos una marca nativa de streetwear premium nacida en
                  Cartagena, creada por y para jóvenes que viven el flow urbano
                  a través de una estética dark y rebelde.
                </p>
                <p className="relative z-10 pl-8">
                  Fusionamos la crudeza de la cultura callejera, el arte del
                  grafiti americano y la elegancia del negro absoluto en una
                  línea exclusiva de prendas premium.
                </p>
                <p className="relative z-10 pl-8">
                  Nuestro propósito es vestir a una generación transgresora pero
                  sofisticada, ofreciendo prendas con una identidad oscura y un
                  carácter premium que desafía lo convencional.
                </p>

                {/* Enhanced Stats inline */}
                <div className="flex items-center gap-8 md:gap-12 pt-8 border-t border-border/30 pl-8">
                  <div className="text-center group">
                    <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                      100%
                    </p>
                    <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-2 group-hover:text-foreground/80 transition-colors">
                      COLOMBIANO
                    </p>
                  </div>
                  <div className="h-12 w-px bg-border/30" />
                  <div className="text-center group">
                    <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                      450GSM
                    </p>
                    <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-2 group-hover:text-foreground/80 transition-colors">
                      GRAMAJE PREMIUM
                    </p>
                  </div>
                  <div className="h-12 w-px bg-border/30" />
                  <div className="text-center group">
                    <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                      SS26
                    </p>
                    <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-2 group-hover:text-foreground/80 transition-colors">
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
        <section className="py-28 md:py-44 px-6 bg-gradient-to-b from-background to-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
              <div>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-foreground/40" />
                  <p className="text-[10px] tracking-[0.5em] text-foreground/80 font-medium">
                    COLECCIÓN INAUGURAL
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-foreground/40" />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-9xl leading-none">
                  PRIMERA
                  <br />
                  <span
                    className="block"
                    style={{
                      WebkitTextStroke: "2px oklch(0.40 0 0)",
                      color: "transparent",
                    }}
                  >
                    ENTREGA
                  </span>
                </h2>
              </div>
              <div className="flex gap-6 md:gap-8 pb-2">
                <div className="text-center group">
                  <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                    07
                  </p>
                  <p className="text-[9px] tracking-[0.2em] text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors">
                    PIEZAS
                  </p>
                </div>
                <div className="h-12 w-px bg-border/50 self-center" />
                <div className="text-center group">
                  <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                    100
                  </p>
                  <p className="text-[9px] tracking-[0.2em] text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors">
                    UNIDADES
                  </p>
                </div>
                <div className="h-12 w-px bg-border/50 self-center" />
                <div className="text-center group">
                  <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                    01
                  </p>
                  <p className="text-[9px] tracking-[0.2em] text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors">
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
                  className="h-14 px-10 text-[11px] tracking-[0.3em] shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:bg-foreground hover:text-background"
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
        <section className="py-28 md:py-44 px-6 border-t border-border bg-gradient-to-b from-background to-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-foreground/40" />
                <p className="text-[10px] tracking-[0.5em] text-foreground/80 font-medium">
                  LOOKBOOK
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-foreground/40" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl leading-none">
                ESTETICA
                <br />
                <span
                  className="block"
                  style={{
                    WebkitTextStroke: "2px oklch(0.40 0 0)",
                    color: "transparent",
                  }}
                >
                  URBANA
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="aspect-[3/4] bg-card overflow-hidden relative group shadow-premium hover:shadow-premium-lg transition-all duration-500">
                <Image
                  src="/images/product-hoodie.jpg"
                  alt="SHADOW HOODIE"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-[10px] tracking-[0.25em] font-medium">
                    SHADOW HOODIE
                  </p>
                </div>
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group md:row-span-2 shadow-premium hover:shadow-premium-lg transition-all duration-500">
                <Image
                  src="/images/phantom-jacket.png"
                  alt="PHANTOM JACKET"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-[10px] tracking-[0.25em] font-medium">
                    PHANTOM JACKET
                  </p>
                </div>
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group shadow-premium hover:shadow-premium-lg transition-all duration-500">
                <Image
                  src="/images/product-pants.jpg"
                  alt="HEAVY CARGO"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-[10px] tracking-[0.25em] font-medium">
                    HEAVY CARGO
                  </p>
                </div>
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group shadow-premium hover:shadow-premium-lg transition-all duration-500">
                <Image
                  src="/images/product-shoes.jpg"
                  alt="URBAN STOMPERS"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-[10px] tracking-[0.25em] font-medium">
                    URBAN STOMPERS
                  </p>
                </div>
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group shadow-premium hover:shadow-premium-lg transition-all duration-500">
                <Image
                  src="/images/void-tee.png"
                  alt="VOID TEE"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-[10px] tracking-[0.25em] font-medium">
                    VOID TEE
                  </p>
                </div>
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group shadow-premium hover:shadow-premium-lg transition-all duration-500">
                <Image
                  src="/images/stealth-tee.jpg"
                  alt="STEALTH TEE"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-[10px] tracking-[0.25em] font-medium">
                    STEALTH TEE
                  </p>
                </div>
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group shadow-premium hover:shadow-premium-lg transition-all duration-500">
                <Image
                  src="/images/tactical-shorts.png"
                  alt="TACTICAL SHORTS"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-[10px] tracking-[0.25em] font-medium">
                    TACTICAL SHORTS
                  </p>
                </div>
              </div>
              <div className="aspect-[3/4] bg-card overflow-hidden relative group shadow-premium hover:shadow-premium-lg transition-all duration-500">
                <Image
                  src="/images/night-runner.png"
                  alt="NIGHT RUNNER"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-[10px] tracking-[0.25em] font-medium">
                    NIGHT RUNNER
                  </p>
                </div>
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
        <section className="py-28 md:py-44 px-6 border-t border-border bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-foreground/5 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-foreground/3 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-foreground/40" />
              <p className="text-[10px] tracking-[0.5em] text-foreground/80 font-medium">
                NEWSLETTER
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-foreground/40" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-6xl leading-tight mb-6">
              UNETE AL
              <span
                className="block text-foreground/50"
                style={{
                  WebkitTextStroke: "2px oklch(0.40 0 0)",
                  color: "transparent",
                }}
              >
                MOVIMIENTO
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto text-sm md:text-base">
              Recibe acceso anticipado a nuevos drops, ofertas exclusivas y
              contenido detrás de cámaras. Sin spam, solo streetwear.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </ScrollReveal>

      {/* Statement Section */}
      <ScrollReveal>
        <section className="py-28 md:py-44 px-6 border-t border-border bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <p className="font-[family-name:var(--font-display)] text-[clamp(5rem,18vw,16rem)] leading-none text-border/20 select-none whitespace-nowrap">
              LUJO URBANO
            </p>
          </div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-3 mb-12">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-foreground/40" />
              <p className="text-[10px] tracking-[0.5em] text-foreground/80 font-medium">
                MANIFIESTO
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-foreground/40" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-12">
              "EL LUJO NO ES
              <br className="hidden md:block" />
              LO QUE LLEVAS,
              <br className="hidden md:block" />
              <span
                className="block"
                style={{
                  WebkitTextStroke: "2px oklch(0.50 0 0)",
                  color: "transparent",
                }}
              >
                ES QUIEN ERES"
              </span>
            </h2>
            <Button
              asChild
              size="lg"
              className="h-14 px-10 text-[11px] tracking-[0.3em] shadow-premium hover:shadow-premium-lg transition-all duration-300 bg-foreground text-background hover:bg-foreground/90"
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
