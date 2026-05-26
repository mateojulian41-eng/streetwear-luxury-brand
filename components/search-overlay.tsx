"use client"

import { useState, useEffect } from "react"
import { X, Search } from "lucide-react"

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-32 px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Search Container */}
      <div className="relative w-full max-w-3xl animate-scale-in">
        <div className="glass p-8">
          {/* Search Input */}
          <div className="flex items-center gap-4 mb-8">
            <Search className="w-6 h-6 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar productos..."
              className="flex-1 bg-transparent border-none outline-none text-2xl placeholder:text-muted-foreground/50"
              autoFocus
            />
            <button onClick={onClose} className="p-2 hover:bg-card transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Results */}
          <div className="space-y-4">
            {query ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Buscando "{query}"...
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                    BÚSQUEDAS POPULARES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Hoodie", "Pantalones", "Camiseta", "Accesorios"].map(
                      (term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-4 py-2 border border-border/50 hover:border-foreground/50 transition-all duration-300 text-sm"
                        >
                          {term}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                    CATEGORÍAS
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {["Hoodies", "Pantalones", "Camisetas", "Accesorios"].map(
                      (category) => (
                        <button
                          key={category}
                          className="text-left p-4 border border-border/50 hover:border-foreground/50 transition-all duration-300"
                        >
                          {category}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Keyboard shortcut hint */}
        <div className="text-center mt-4">
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground">
            Presiona <kbd className="px-2 py-1 bg-card border border-border/50 rounded">ESC</kbd> para cerrar
          </p>
        </div>
      </div>
    </div>
  )
}
