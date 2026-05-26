"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Check, ShoppingBag, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { useEffect, useState } from "react";

interface Order {
  id: string;
  reference: string;
  amountInCents: number;
  currency: string;
  status: string;
  customerEmail: string | null;
  customerName: string | null;
  createdAt: Date;
  updatedAt: Date;
  items: any;
}

export default function CheckoutSuccessPage() {
  const { clearCart } = useCartStore();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Obtener referencia de la URL
    const params = new URLSearchParams(window.location.search);
    const reference = params.get("reference");

    if (!reference) {
      setError("REFERENCIA_INVÁLIDA");
      setLoading(false);
      return;
    }

    console.log("fetching order...", reference);

    // Obtener orden de la API
    fetch(`/api/orders/${reference}`)
      .then((res) => {
        if (!res.ok) throw new Error("Pedido no encontrado");
        return res.json();
      })
      .then((data) => {
        console.log("order loaded", data);
        setOrder(data);
        // Limpiar carrito solo después de cargar la orden exitosamente
        clearCart();
        setLoading(false);
      })
      .catch((err) => {
        console.log("fetch failed", err);
        console.error("Error fetching order:", err);
        setError("PEDIDO_NO_ENCONTRADO");
        setLoading(false);
      });
  }, [clearCart]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p>Cargando...</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (error === "REFERENCIA_INVÁLIDA") {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              REFERENCIA INVÁLIDA
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-none mb-8">
              ERROR
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
              No se encontró la referencia del pedido. Por favor verifica tu correo o contacta a soporte.
            </p>
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

  if (error === "PEDIDO_NO_ENCONTRADO" || !order) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              PEDIDO NO ENCONTRADO
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-none mb-8">
              ERROR
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
              No se encontró el pedido. Por favor verifica tu correo o contacta a soporte.
            </p>
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

      {/* ScrollReveal removido temporalmente para depuración */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 border-2 border-foreground rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-12 h-12" />
          </div>

          <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
            PEDIDO CONFIRMADO
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-none mb-8">
            ¡GRACIAS POR TU COMPRA!
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
            Tu pedido ha sido confirmado exitosamente. Recibirás un correo de
            confirmación con los detalles de tu pedido y el número de seguimiento.
          </p>

          {/* Order Info */}
          <div className="glass p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">
                  NÚMERO DE PEDIDO
                </p>
                <p className="font-[family-name:var(--font-display)] text-xl">
                  {order.reference}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">
                  FECHA
                </p>
                <p className="font-[family-name:var(--font-display)] text-xl">
                  {new Date(order.createdAt).toLocaleDateString("es-CO")}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">
                  ESTADO
                </p>
                <p className="font-[family-name:var(--font-display)] text-xl">
                  {order.status}
                </p>
              </div>
            </div>
          </div>

            {/* Next Steps */}
            <div className="text-left mb-12">
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-6">
                PRÓXIMOS PASOS
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-border flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Correo de confirmación</p>
                    <p className="text-sm text-muted-foreground">
                      Revisa tu correo para ver los detalles del pedido
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-border flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Contacto por WhatsApp</p>
                    <p className="text-sm text-muted-foreground">
                      Te contactaremos para coordinar el envío
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-border flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Entrega en 3-5 días</p>
                    <p className="text-sm text-muted-foreground">
                      Tu pedido será entregado en tu dirección
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 text-[11px] tracking-[0.3em]">
                <Link href="/shop">
                  <ShoppingBag className="w-4 h-4 mr-3" />
                  SEGUIR COMPRANDO
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 text-[11px] tracking-[0.3em]"
              >
                <Link href="/contacto">
                  CONTACTAR SOPORTE
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

      <Footer />
    </main>
  );
}
