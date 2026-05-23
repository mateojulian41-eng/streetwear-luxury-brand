"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { SocialLinks } from "./social-links";
import { useCartStore } from "@/lib/cart-store";
import { CartDrawer } from "./cart-drawer";
import { SearchBar } from "./search-bar";

const navLinks = [
  { href: "/", label: "INICIO" },
  { href: "/shop", label: "SHOP" },
  { href: "/contacto", label: "CONTACTO" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { openCart, getItemCount } = useCartStore();
  const itemCount = getItemCount();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-[0.15em] hover:text-foreground/80 transition-all duration-300"
            >
              NOIR URBANO
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] tracking-[0.35em] transition-all duration-300 group ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {/* Active indicator */}
                  <span
                    className={`absolute -bottom-2 left-0 right-0 h-px bg-foreground transition-all duration-300 ${
                      pathname === link.href
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              <SearchBar />
              <div className="hidden md:block">
                <SocialLinks />
              </div>

              {/* Cart Button */}
              <button
                onClick={openCart}
                className="relative p-3 hover:bg-card transition-all duration-300 group"
                aria-label="Abrir carrito"
              >
                <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
                {mounted && itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-[10px] font-medium flex items-center justify-center rounded-full border-2 border-background">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-3 hover:bg-card transition-all duration-300"
                aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 transition-transform hover:rotate-90" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="pt-6 pb-4 border-t border-border/50 mt-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm tracking-[0.25em] transition-all duration-300 py-3 ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-6 border-t border-border/50">
              <SocialLinks />
            </div>
          </div>
        </div>
      </header>

      <CartDrawer />
    </>
  );
}
