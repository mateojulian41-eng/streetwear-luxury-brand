"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
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
  const shipping = subtotal >= 1600000 ? 0 : 60000;
  const total = subtotal + shipping - discountAmount;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ScrollReveal>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              TU CARRITO
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
              CARRITO
            </h1>
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
              <div className="w-20 h-20 border border-border flex items-center justify-center mx-auto mb-8">
                <ShoppingBag className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl mb-4">
                TU CARRITO ESTÁ VACÍO
              </h2>
              <p className="text-muted-foreground mb-8">
                Parece que aún no has agregado productos a tu carrito.
              </p>
              <Button
                asChild
                size="lg"
                className="h-14 text-[11px] tracking-[0.3em]"
              >
                <Link href="/shop">
                  IR AL SHOP
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Link>
              </Button>
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
                      <div className="flex gap-6 p-6 border border-border/50">
                        {/* Product Image */}
                        <div className="relative w-24 h-32 flex-shrink-0 bg-card overflow-hidden">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <div>
                              <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-1">
                                {item.product.category}
                              </p>
                              <h3 className="font-[family-name:var(--font-display)] text-lg mb-1">
                                {item.product.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Talla: {item.size}
                              </p>
                            </div>
                            <button
                              onClick={() =>
                                removeItem(item.product.id, item.size)
                              }
                              className="p-2 hover:bg-card transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-muted-foreground hover:text-foreground" />
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
                                className="w-8 h-8 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                              >
                                -
                              </button>
                              <span className="w-8 text-center">
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
                                className="w-8 h-8 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                              >
                                +
                              </button>
                            </div>

                            {/* Price */}
                            <p className="font-[family-name:var(--font-display)] text-lg">
                              ${(item.product.price * item.quantity).toFixed(2)}{" "}
                              USD
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="glass p-8 sticky top-32">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl mb-8">
                      RESUMEN
                    </h3>

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
                          className="flex-1 px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                        />
                        <button
                          onClick={handleApplyDiscount}
                          className="px-6 py-3 border border-border hover:border-foreground transition-colors text-[10px] tracking-[0.2em]"
                        >
                          APLICAR
                        </button>
                      </div>
                      {discountApplied && (
                        <p className="text-[9px] text-green-500 mt-2">
                          ✓ Descuento aplicado
                        </p>
                      )}
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      {discountApplied && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Descuento
                          </span>
                          <span className="text-green-500">
                            -{formatPrice(discountAmount)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Envío</span>
                        <span>
                          {subtotal >= 1600000
                            ? "Gratis"
                            : formatPrice(shipping)}
                        </span>
                      </div>
                      <div className="h-px border-t border-border my-4" />
                      <div className="flex justify-between text-lg font-medium">
                        <span>Total</span>
                        <span className="font-[family-name:var(--font-display)]">
                          {formatPrice(total)}
                        </span>
                      </div>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="w-full h-14 text-[11px] tracking-[0.3em] mb-4"
                    >
                      <Link href="/checkout">
                        PROCEDER AL PAGO
                        <ArrowRight className="w-4 h-4 ml-3" />
                      </Link>
                    </Button>

                    <button
                      onClick={clearCart}
                      className="w-full text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      VACIAR CARRITO
                    </button>

                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-4">
                        ENVÍO GRATIS
                      </p>
                      <p className="text-sm text-muted-foreground">
                        En compras superiores a $1,600,000 COP
                      </p>
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
