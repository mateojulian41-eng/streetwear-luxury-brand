"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  slug?: string;
  isNew?: boolean;
  inStock?: boolean;
}

export function ProductCard({
  name,
  category,
  price,
  image,
  slug,
  isNew = false,
  inStock = true,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -5;
    const rotateYValue = ((x - centerX) / centerX) * 5;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleTouchStart = () => {
    setIsTouch(true);
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsTouch(false);
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const content = (
    <div
      ref={cardRef}
      className="group relative cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: isTouch
          ? "none"
          : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.5s ease-out",
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-card border border-border/30 shadow-premium group-hover:shadow-premium-lg transition-all duration-500">
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover transition-all duration-700 ease-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          quality={85}
          sizes="(max-width: 768px) 50vw, 33vw"
        />

        {/* Subtle gradient overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Glow effect */}
        <div
          className={`absolute inset-0 bg-foreground/10 blur-xl transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Quick View Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ease-out ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] tracking-[0.3em] text-white uppercase font-medium">
              Quick View
            </span>
            <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center bg-background/60 backdrop-blur-md group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-premium">
              <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1.5 bg-background/90 backdrop-blur-md border border-border/50 text-[9px] tracking-[0.25em] text-muted-foreground uppercase shadow-sm">
            {category}
          </span>
          {isNew && (
            <span className="px-3 py-1.5 bg-foreground/90 backdrop-blur-md border border-foreground/50 text-[9px] tracking-[0.25em] text-background uppercase shadow-sm">
              NUEVO
            </span>
          )}
        </div>

        {/* Stock Indicator */}
        {!inStock && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 bg-destructive/90 backdrop-blur-md border border-destructive/50 text-[9px] tracking-[0.25em] text-background uppercase shadow-sm">
              AGOTADO
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-5 space-y-3">
        <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl text-foreground leading-tight tracking-tight group-hover:text-foreground/90 transition-colors">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            {price} COP
          </p>
          {!inStock && (
            <span className="text-[10px] text-destructive tracking-[0.2em] uppercase">
              Sin stock
            </span>
          )}
        </div>
        {inStock && <div className="h-px bg-border/30" />}
      </div>
    </div>
  );

  if (slug) {
    return <Link href={`/shop/${slug}`}>{content}</Link>;
  }

  return content;
}
