"use client"

import Image from "next/image"
import Link from "next/link"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import { formatPrice } from "@/lib/products"
import { Button } from "./ui/button"

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal } = useCartStore()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-[family-name:var(--font-display)] text-xl tracking-wider">
              CARRITO
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-secondary transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-2">Tu carrito esta vacio</p>
              <Link 
                href="/shop" 
                onClick={closeCart}
                className="text-[11px] tracking-[0.2em] underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                EXPLORAR PRODUCTOS
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div 
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 pb-6 border-b border-border"
                >
                  <div className="relative w-24 h-24 bg-card flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link 
                      href={`/shop/${item.product.slug}`}
                      onClick={closeCart}
                      className="font-[family-name:var(--font-display)] text-lg tracking-wider hover:text-muted-foreground transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">
                      Talla: {item.size}
                    </p>
                    <p className="text-sm mt-2">{formatPrice(item.product.price)}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="p-2 hover:bg-secondary transition-colors"
                          aria-label="Reducir cantidad"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="p-2 hover:bg-secondary transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                      >
                        ELIMINAR
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
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] tracking-[0.2em] text-muted-foreground">SUBTOTAL</span>
              <span className="font-[family-name:var(--font-display)] text-xl">{formatPrice(getTotal())}</span>
            </div>
            <p className="text-[10px] text-muted-foreground">
              Impuestos y envio calculados en el checkout
            </p>
            <Button asChild className="w-full h-14 text-[11px] tracking-[0.3em]">
              <Link href="/checkout" onClick={closeCart}>
                PROCEDER AL PAGO
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
  )
}
