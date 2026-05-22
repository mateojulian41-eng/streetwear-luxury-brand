"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ShoppingBag, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuickViewModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    category: string
    price: string
    image: string
    description: string
    sizes: string[]
  }
}

export function QuickViewModal({ isOpen, onClose, product }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card border border-border/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-premium-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-card transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-card/30">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
                {product.category}
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
                {product.name}
              </h2>
              <p className="text-2xl mt-4">{product.price}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Size selection */}
            <div>
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
                TALLA
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border transition-all duration-300 ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border/50 hover:border-foreground/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 h-14 text-[11px] tracking-[0.3em]"
                disabled={!selectedSize}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                AGREGAR AL CARRITO
              </Button>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-4 border border-border/50 hover:border-foreground/50 transition-all duration-300"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    isLiked ? "fill-foreground text-foreground" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
