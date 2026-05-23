"use client";

import Image from "next/image";
import Link from "next/link";
import {
  X,
  Plus,
  Minus,
  ShoppingBag,
  Package,
  ArrowRight,
  Trash2,
} from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/products";
import { Button } from "./ui/button";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal } =
    useCartStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-premium">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-border/50 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <span className="font-[family-name:var(--font-display)] text-xl tracking-wider">
                CARRITO
              </span>
              <p className="text-[10px] text-muted-foreground">
                {items.length} {items.length === 1 ? "producto" : "productos"}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-card transition-colors rounded-full"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 border border-border/50 flex items-center justify-center mb-6 rounded-full">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">
                Tu carrito está vacío
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 h-12 text-[11px] tracking-[0.2em]"
              >
                <Link href="/shop" onClick={closeCart}>
                  EXPLORAR PRODUCTOS
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 pb-6 border-b border-border/50 group"
                >
                  <div className="relative w-24 h-24 bg-card flex-shrink-0 rounded-sm overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!item.product.inStock && (
                      <div className="absolute inset-0 bg-destructive/80 flex items-center justify-center">
                        <span className="text-[9px] tracking-[0.15em] text-white font-medium">
                          AGOTADO
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/shop/${item.product.slug}`}
                      onClick={closeCart}
                      className="font-[family-name:var(--font-display)] text-lg tracking-wider hover:text-foreground/80 transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">
                      Talla:{" "}
                      <span className="text-foreground">{item.size}</span>
                    </p>
                    <p className="text-sm mt-2 font-medium">
                      {formatPrice(item.product.price)}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border/50">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity - 1,
                            )
                          }
                          disabled={item.quantity <= 1}
                          className="p-2 hover:bg-card transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Reducir cantidad"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity + 1,
                            )
                          }
                          disabled={!item.product.inStock}
                          className="p-2 hover:bg-card transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="p-2 hover:bg-card/50 transition-colors rounded"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border/50 space-y-4 bg-card/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-muted-foreground" />
                <span className="text-[11px] tracking-[0.2em] text-muted-foreground">
                  SUBTOTAL
                </span>
              </div>
              <span className="font-[family-name:var(--font-display)] text-xl">
                {formatPrice(getTotal())} COP
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground">
              Impuestos y envío calculados en el checkout
            </p>
            <Button
              asChild
              className="w-full h-14 text-[11px] tracking-[0.3em] shadow-premium hover:shadow-premium-lg transition-all duration-300"
            >
              <Link href="/checkout" onClick={closeCart}>
                PROCEDER AL PAGO
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <button
              onClick={closeCart}
              className="w-full text-[11px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              CONTINUAR COMPRANDO
            </button>
          </div>
        )}
      </div>
    </>
  );
}
