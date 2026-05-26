import { create } from "zustand"
import { persist } from "zustand/middleware"

interface WishlistItem {
  id: string
  name: string
  price: string
  image: string
  slug: string
}

interface WishlistStore {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  isInWishlist: (id: string) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          if (state.items.some((i) => i.id === item.id)) {
            return state
          }
          return { items: [...state.items, item] }
        })
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
      },
      isInWishlist: (id) => {
        return get().items.some((item) => item.id === id)
      },
      clearWishlist: () => {
        set({ items: [] })
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
)
