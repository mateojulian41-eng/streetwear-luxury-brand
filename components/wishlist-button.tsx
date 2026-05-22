"use client"

import { Heart } from "lucide-react"
import { useWishlistStore } from "@/lib/wishlist-store"

interface WishlistButtonProps {
  productId: string
  productName: string
  price: string
  image: string
  slug: string
}

export function WishlistButton({
  productId,
  productName,
  price,
  image,
  slug,
}: WishlistButtonProps) {
  const { addItem, removeItem, isInWishlist } = useWishlistStore()
  const isLiked = isInWishlist(productId)

  const handleClick = () => {
    if (isLiked) {
      removeItem(productId)
    } else {
      addItem({
        id: productId,
        name: productName,
        price,
        image,
        slug,
      })
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`p-3 border transition-all duration-300 group ${
        isLiked
          ? "border-foreground bg-foreground text-background"
          : "border-border/50 hover:border-foreground/50"
      }`}
    >
      <Heart
        className={`w-5 h-5 transition-all duration-300 ${
          isLiked ? "fill-current" : "group-hover:scale-110"
        } ${isLiked ? "heart-burst" : ""}`}
      />
    </button>
  )
}
