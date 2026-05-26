"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { products } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof products>([]);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 hover:bg-card transition-all duration-300 group"
        aria-label="Buscar"
      >
        <Search className="w-5 h-5 transition-transform group-hover:scale-110" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl">
      <div className="max-w-3xl mx-auto px-6 pt-32">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full bg-transparent border-b-2 border-border pb-4 text-2xl md:text-3xl font-[family-name:var(--font-display)] focus:outline-none focus:border-foreground transition-colors"
            autoFocus
          />
          <button
            onClick={handleClose}
            className="absolute right-0 top-0 p-3 hover:bg-card transition-all duration-300"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {results.length > 0 && (
          <div className="mt-8 space-y-4">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                onClick={handleClose}
                className="flex items-center gap-4 p-4 hover:bg-card transition-all duration-300 group"
              >
                <div className="relative w-20 h-24 overflow-hidden bg-card border border-border/50">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                    {product.category}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-foreground">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}

        {query.length > 0 && results.length === 0 && (
          <div className="mt-8 text-center text-muted-foreground">
            No se encontraron resultados para "{query}"
          </div>
        )}
      </div>
    </div>
  );
}
