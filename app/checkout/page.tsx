"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, CreditCard, Truck, Shield } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    department: "",
    postalCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    clearCart();
    // Redirect to success page
    window.location.href = "/checkout/success";
  };

  const subtotal = getTotal();
  const shipping = subtotal >= 400 ? 0 : 15;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              TU CARRITO ESTÁ VACÍO
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-none mb-8">
              CHECKOUT
            </h1>
            <Button asChild size="lg" className="h-14 text-[11px] tracking-[0.3em]">
              <Link href="/shop">
                IR AL SHOP
                <ShoppingBag className="w-4 h-4 ml-3" />
              </Link>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ScrollReveal>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/cart"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              VOLVER AL CARRITO
            </Link>

            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              FINALIZAR COMPRA
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
              CHECKOUT
            </h1>
          </div>
        </section>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border mb-16" />
      </div>

      <ScrollReveal direction="up">
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="glass p-8">
                    <h2 className="font-[family-name:var(--font-display)] text-2xl mb-6">
                      INFORMACIÓN PERSONAL
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2 block">
                          NOMBRE
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-card/50 border border-border px-4 py-3 text-sm focus:border-foreground/50 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2 block">
                          APELLIDO
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-card/50 border border-border px-4 py-3 text-sm focus:border-foreground/50 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2 block">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-card/50 border border-border px-4 py-3 text-sm focus:border-foreground/50 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2 block">
                          TELÉFONO
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-card/50 border border-border px-4 py-3 text-sm focus:border-foreground/50 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="glass p-8">
                    <h2 className="font-[family-name:var(--font-display)] text-2xl mb-6">
                      DIRECCIÓN DE ENVÍO
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2 block">
                          DIRECCIÓN
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-card/50 border border-border px-4 py-3 text-sm focus:border-foreground/50 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2 block">
                            CIUDAD
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card/50 border border-border px-4 py-3 text-sm focus:border-foreground/50 focus:outline-none transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2 block">
                            DEPARTAMENTO
                          </label>
                          <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card/50 border border-border px-4 py-3 text-sm focus:border-foreground/50 focus:outline-none transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2 block">
                          CÓDIGO POSTAL
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full bg-card/50 border border-border px-4 py-3 text-sm focus:border-foreground/50 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isProcessing}
                    size="lg"
                    className="w-full h-16 text-[11px] tracking-[0.3em] disabled:opacity-50"
                  >
                    {isProcessing ? (
                      "PROCESANDO..."
                    ) : (
                      "CONFIRMAR PEDIDO"
                    )}
                  </Button>
                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="glass p-8 sticky top-32">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl mb-8">
                    RESUMEN DEL PEDIDO
                  </h3>

                  {/* Items */}
                  <div className="space-y-4 mb-8">
                    {items.map((item) => (
                      <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                        <div className="w-16 h-20 bg-card/50 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-muted-foreground mb-1">
                            Talla: {item.size} | Cantidad: {item.quantity}
                          </p>
                          <p className="text-sm">
                            ${(item.product.price * item.quantity).toFixed(2)} USD
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="space-y-4 mb-8 pt-8 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)} USD</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Envío</span>
                      <span>{shipping === 0 ? "Gratis" : `$${shipping.toFixed(2)} USD`}</span>
                    </div>
                    <div className="h-px border-t border-border my-4" />
                    <div className="flex justify-between text-lg font-medium">
                      <span>Total</span>
                      <span className="font-[family-name:var(--font-display)]">
                        ${total.toFixed(2)} USD
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 pt-8 border-t border-border">
                    <div className="flex items-center gap-3 text-sm">
                      <Truck className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Envío 3-5 días hábiles</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Shield className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Pago seguro</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CreditCard className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Múltiples métodos de pago</span>
                    </div>
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
