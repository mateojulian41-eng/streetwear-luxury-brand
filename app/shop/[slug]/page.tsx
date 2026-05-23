"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Check, ShoppingBag } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ImageZoom } from "@/components/image-zoom";
import { WishlistButton } from "@/components/wishlist-button";
import { InteractiveSizeGuide } from "@/components/interactive-size-guide";
import { products, formatPrice } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const { addItem } = useCartStore();

  // Unwrap params
  const { slug } = require("react").use(params);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Determine category for size guide
  const getCategory = () => {
    const categoryLower = product.category.toLowerCase();
    if (
      categoryLower.includes("hoodie") ||
      categoryLower.includes("oversize")
    ) {
      return "hoodie" as const;
    }
    if (categoryLower.includes("pants")) {
      return "pants" as const;
    }
    return "tshirt" as const;
  };

  // Generate additional images for gallery (using same image for demo)
  const galleryImages = [
    product.images[0],
    product.images[0],
    product.images[0],
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ScrollReveal>
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back Link */}
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              VOLVER AL SHOP
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Image Gallery */}
              <div className="space-y-4">
                {/* Main Image with Zoom */}
                <div className="relative aspect-[3/4] bg-card overflow-hidden">
                  <ImageZoom
                    src={galleryImages[selectedImage]}
                    alt={product.name}
                    width={600}
                    height={800}
                    zoomLevel={2}
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square bg-card overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index
                          ? "border-foreground"
                          : "border-transparent hover:border-border"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="lg:py-8">
                <div className="flex items-start justify-between mb-4">
                  <p className="text-[10px] tracking-[0.5em] text-muted-foreground">
                    {product.category.toUpperCase()}
                  </p>
                  <WishlistButton
                    productId={product.id}
                    productName={product.name}
                    price={formatPrice(product.price)}
                    image={product.images[0]}
                    slug={product.slug}
                  />
                </div>

                <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-none mb-6">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-8">
                  <p className="font-[family-name:var(--font-display)] text-3xl">
                    {formatPrice(product.price)}
                  </p>
                  {!product.inStock && (
                    <span className="px-3 py-1 bg-destructive/10 border border-destructive/30 text-destructive text-[10px] tracking-[0.2em] uppercase">
                      Agotado
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-10">
                  {product.description}
                </p>

                {/* Size Selector */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                      SELECCIONAR TALLA
                    </p>
                    <button
                      onClick={() => setShowSizeGuide(!showSizeGuide)}
                      className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                    >
                      GUÍA DE TALLAS
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        disabled={!product.inStock}
                        className={`w-14 h-14 border text-sm tracking-wider transition-all duration-300 relative ${
                          selectedSize === size
                            ? "border-foreground bg-foreground text-background shadow-premium"
                            : !product.inStock
                              ? "border-border/30 text-muted-foreground/30 cursor-not-allowed"
                              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground hover:shadow-premium"
                        }`}
                      >
                        {size}
                        {selectedSize === size && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 bg-foreground rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                  {selectedSize && (
                    <p className="text-[10px] text-muted-foreground mt-3">
                      Talla seleccionada:{" "}
                      <span className="text-foreground">{selectedSize}</span>
                    </p>
                  )}
                </div>

                {/* Size Guide Modal */}
                {showSizeGuide && (
                  <div className="mb-10">
                    <InteractiveSizeGuide category={getCategory()} />
                  </div>
                )}

                {/* Add to Cart */}
                <Button
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !product.inStock}
                  className="w-full h-16 text-[11px] tracking-[0.3em] disabled:opacity-50 disabled:cursor-not-allowed shadow-premium hover:shadow-premium-lg transition-all duration-300"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      AGREGADO AL CARRITO
                    </>
                  ) : !product.inStock ? (
                    "AGOTADO"
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      AGREGAR AL CARRITO
                    </>
                  )}
                </Button>

                {!selectedSize && product.inStock && (
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Selecciona una talla para continuar
                  </p>
                )}

                {/* Details List */}
                <div className="mt-12 pt-10 border-t border-border">
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-6">
                    DETALLES DEL PRODUCTO
                  </p>
                  <ul className="space-y-4">
                    {product.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-muted-foreground group"
                      >
                        <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full mt-2 flex-shrink-0 group-hover:bg-foreground transition-colors" />
                        <span className="group-hover:text-foreground transition-colors">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mt-10 flex flex-wrap gap-3">
                  <span className="px-4 py-2 border border-border text-[9px] tracking-[0.2em] text-muted-foreground hover:border-foreground/50 hover:text-foreground transition-colors">
                    EDICIÓN LIMITADA
                  </span>
                  <span className="px-4 py-2 border border-border text-[9px] tracking-[0.2em] text-muted-foreground hover:border-foreground/50 hover:text-foreground transition-colors">
                    HECHO EN COLOMBIA
                  </span>
                  {product.inStock && (
                    <span className="px-4 py-2 border border-border text-[9px] tracking-[0.2em] text-foreground hover:border-foreground transition-colors">
                      EN STOCK
                    </span>
                  )}
                </div>

                {/* Stock Counter */}
                <div className="mt-8 p-5 bg-card/30 border border-border/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
                      STOCK DISPONIBLE
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {product.inStock
                        ? `${product.id.length * 3 + 12} / 100`
                        : "0 / 100"}
                    </span>
                  </div>
                  <div className="h-2 bg-border/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        product.inStock ? "bg-foreground" : "bg-destructive"
                      }`}
                      style={{
                        width: product.inStock
                          ? `${product.id.length * 3 + 12}%`
                          : "0%",
                      }}
                    />
                  </div>
                  <p className="text-[9px] text-muted-foreground mt-3 leading-relaxed">
                    Solo 100 unidades por pieza. Cuando se agoten, no volverán.
                  </p>
                </div>

                {/* Shipping Info */}
                <div className="mt-10 pt-10 border-t border-border">
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                    ENVÍO
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Envíos a todo Colombia</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>3-5 días hábiles</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>
                        Envío gratis en compras superiores a $800,000 COP
                      </span>
                    </div>
                  </div>
                </div>

                {/* Care Instructions */}
                <div className="mt-10 pt-10 border-t border-border">
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                    CUIDADO
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Lavar a máquina en frío (máx 30°C)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>No usar blanqueador</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Secar a temperatura baja</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Planchar a temperatura media</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>No lavar en seco</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sticky Add to Cart for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border p-4 md:hidden z-50">
        <Button
          size="lg"
          className="w-full h-14 text-[11px] tracking-[0.3em]"
          disabled={!selectedSize}
          onClick={handleAddToCart}
        >
          {added ? (
            "AGREGADO ✓"
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 mr-2" />
              AGREGAR AL CARRITO
            </>
          )}
        </Button>
      </div>

      <Footer />
    </main>
  );
}
