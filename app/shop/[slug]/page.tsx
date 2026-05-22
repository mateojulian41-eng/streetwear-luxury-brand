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

                <p className="font-[family-name:var(--font-display)] text-3xl mb-8">
                  {formatPrice(product.price)}
                </p>

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
                      className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      GUÍA DE TALLAS
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-14 h-14 border text-sm tracking-wider transition-all duration-300 ${
                          selectedSize === size
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
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
                  disabled={!selectedSize}
                  className="w-full h-16 text-[11px] tracking-[0.3em] disabled:opacity-50 transition-all duration-300"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      AGREGADO AL CARRITO
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      AGREGAR AL CARRITO
                    </>
                  )}
                </Button>

                {!selectedSize && (
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Selecciona una talla para continuar
                  </p>
                )}

                {/* Details List */}
                <div className="mt-12 pt-10 border-t border-border">
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-6">
                    DETALLES DEL PRODUCTO
                  </p>
                  <ul className="space-y-3">
                    {product.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mt-10 flex flex-wrap gap-3">
                  <span className="px-4 py-2 border border-border text-[9px] tracking-[0.2em] text-muted-foreground">
                    EDICION LIMITADA
                  </span>
                  <span className="px-4 py-2 border border-border text-[9px] tracking-[0.2em] text-muted-foreground">
                    HECHO EN COLOMBIA
                  </span>
                </div>

                {/* Shipping Info */}
                <div className="mt-10 pt-10 border-t border-border">
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                    ENVÍO
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Envíos a todo Colombia</p>
                    <p>• 3-5 días hábiles</p>
                    <p>• Envío gratis en compras superiores a $1,600,000 COP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
