"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  Trash2,
  ShoppingBag,
  ArrowRight,
  Package,
  Check,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/products";
import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } =
    useCartStore();
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleQuantityChange = (
    productId: string,
    size: string,
    newQuantity: number,
  ) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, size, newQuantity);
  };

  const handleApplyDiscount = () => {
    // Simple discount logic for demo
    if (discountCode.toUpperCase() === "NOIR10") {
      setDiscountAmount(getTotal() * 0.1);
      setDiscountApplied(true);
    } else if (discountCode.toUpperCase() === "NOIR20") {
      setDiscountAmount(getTotal() * 0.2);
      setDiscountApplied(true);
    } else {
      setDiscountAmount(0);
      setDiscountApplied(false);
    }
  };

  const subtotal = getTotal();
  const shipping = subtotal >= 800000 ? 0 : 25000;
  const total = subtotal + shipping - discountAmount;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ScrollReveal>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-foreground/30" />
              <p className="text-[10px] tracking-[0.5em] text-muted-foreground">
                TU CARRITO
              </p>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
              CARRITO
            </h1>
            <p className="text-muted-foreground max-w-xl">
              {items.length > 0
                ? `${items.length} ${items.length === 1 ? "producto" : "productos"} en tu carrito`
                : "Tu carrito está vacío"}
            </p>
          </div>
        </section>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border mb-16" />
      </div>

      {items.length === 0 ? (
        <ScrollReveal>
          <section className="py-24 px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 border border-border/50 flex items-center justify-center mx-auto mb-8 rounded-full group hover:border-foreground/50 transition-colors">
                <ShoppingBag className="w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-4">
                TU CARRITO ESTÁ VACÍO
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Parece que aún no has agregado productos a tu carrito. Explora
                nuestra colección exclusiva.
              </p>
              <Button
                asChild
                size="lg"
                className="h-16 text-[11px] tracking-[0.3em] shadow-premium hover:shadow-premium-lg transition-all duration-300"
              >
                <Link href="/shop">
                  IR AL SHOP
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </Button>
              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="text-[10px] tracking-[0.2em] text-muted-foreground">
                  ¿Necesitas ayuda?{" "}
                  <Link
                    href="/contacto"
                    className="text-foreground hover:underline underline-offset-4"
                  >
                    Contáctanos
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      ) : (
        <ScrollReveal direction="up">
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {items.map((item, index) => (
                    <ScrollReveal
                      key={`${item.product.id}-${item.size}`}
                      direction="up"
                      delay={index * 50}
                    >
                      <div className="flex gap-6 p-6 border border-border/50 hover:border-foreground/30 transition-all duration-300 group hover:shadow-premium">
                        {/* Product Image */}
                        <div className="relative w-24 h-32 flex-shrink-0 bg-card overflow-hidden rounded-sm">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {!item.product.inStock && (
                            <div className="absolute inset-0 bg-destructive/80 flex items-center justify-center">
                              <span className="text-[10px] tracking-[0.2em] text-white font-medium">
                                AGOTADO
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <div>
                              <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-1">
                                {item.product.category}
                              </p>
                              <Link
                                href={`/shop/${item.product.slug}`}
                                className="font-[family-name:var(--font-display)] text-lg mb-1 hover:text-foreground/80 transition-colors"
                              >
                                {item.product.name}
                              </Link>
                              <p className="text-sm text-muted-foreground">
                                Talla:{" "}
                                <span className="text-foreground">
                                  {item.size}
                                </span>
                              </p>
                            </div>
                            <button
                              onClick={() =>
                                removeItem(item.product.id, item.size)
                              }
                              className="p-2 hover:bg-card transition-colors group-hover:bg-card/50"
                              aria-label="Eliminar producto"
                            >
                              <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            {/* Quantity */}
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.product.id,
                                    item.size,
                                    item.quantity - 1,
                                  )
                                }
                                disabled={item.quantity <= 1}
                                className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Reducir cantidad"
                              >
                                -
                              </button>
                              <span className="w-10 text-center font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.product.id,
                                    item.size,
                                    item.quantity + 1,
                                  )
                                }
                                disabled={!item.product.inStock}
                                className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Aumentar cantidad"
                              >
                                +
                              </button>
                            </div>

                            {/* Price */}
                            <p className="font-[family-name:var(--font-display)] text-lg">
                              {formatPrice(item.product.price * item.quantity)}
                            </p>
                          </div>

                          {/* Stock Warning */}
                          {!item.product.inStock && (
                            <div className="mt-3 p-2 bg-destructive/10 border border-destructive/30 flex items-center gap-2">
                              <AlertCircle className="w-4 h-4 text-destructive" />
                              <p className="text-[10px] text-destructive">
                                Este producto está agotado
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-card/30 border border-border/50 p-8 sticky top-32 backdrop-blur-sm hover:shadow-premium transition-all duration-300">
                    <div className="flex items-center gap-3 mb-8">
                      <Package className="w-5 h-5 text-muted-foreground" />
                      <h3 className="font-[family-name:var(--font-display)] text-2xl">
                        RESUMEN
                      </h3>
                    </div>

                    {/* Discount Code */}
                    <div className="mb-6">
                      <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
                        CÓDIGO DE DESCUENTO
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                          placeholder="NOIR10 o NOIR20"
                          className="flex-1 px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                        />
                        <button
                          onClick={handleApplyDiscount}
                          className="px-6 py-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-[10px] tracking-[0.2em]"
                        >
                          APLICAR
                        </button>
                      </div>
                      {discountApplied && (
                        <div className="mt-3 p-2 bg-green-500/10 border border-green-500/30 flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <p className="text-[10px] text-green-500">
                            Descuento aplicado exitosamente
                          </p>
                        </div>
                      )}
                      {discountCode && !discountApplied && (
                        <p className="text-[9px] text-destructive mt-2">
                          Código inválido. Prueba NOIR10 o NOIR20
                        </p>
                      )}
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">
                          {formatPrice(subtotal)}
                        </span>
                      </div>
                      {discountApplied && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Descuento
                          </span>
                          <span className="text-green-500 font-medium">
                            -{formatPrice(discountAmount)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Envío</span>
                        <span
                          className={
                            subtotal >= 800000
                              ? "text-green-500 font-medium"
                              : "font-medium"
                          }
                        >
                          {subtotal >= 800000
                            ? "Gratis"
                            : formatPrice(shipping)}
                        </span>
                      </div>
                      <div className="h-px border-t border-border my-4" />
                      <div className="flex justify-between text-lg font-medium">
                        <span>Total</span>
                        <span className="font-[family-name:var(--font-display)] text-xl">
                          {formatPrice(total)}
                        </span>
                      </div>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="w-full h-16 text-[11px] tracking-[0.3em] mb-4 shadow-premium hover:shadow-premium-lg transition-all duration-300"
                    >
                      <Link href="/checkout">
                        PROCEDER AL PAGO
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </Link>
                    </Button>

                    <button
                      onClick={clearCart}
                      className="w-full text-[10px] tracking-[0.2em] text-muted-foreground hover:text-destructive transition-colors py-2"
                    >
                      VACIAR CARRITO
                    </button>

                    <div className="mt-8 pt-8 border-t border-border/50">
                      <div className="flex items-center gap-2 mb-4">
                        <Check className="w-4 h-4 text-green-500" />
                        <p className="text-[10px] tracking-[0.2em] text-muted-foreground">
                          ENVÍO GRATIS
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        En compras superiores a $1,600,000 COP
                      </p>
                      {subtotal < 800000 && (
                        <p className="text-[10px] text-muted-foreground mt-2">
                          Te faltan {formatPrice(800000 - subtotal)} para envío
                          gratis
                        </p>
                      )}
                    </div>

                    <div className="mt-8 pt-8 border-t border-border/50">
                      <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-4">
                        SEGURIDAD
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Pagos seguros con Stripe</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Envíos asegurados</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Devoluciones fáciles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      <Footer />
    </main>
  );
}
