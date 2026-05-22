"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const rate = scrolled * speed;
          element.style.transform = `translateY(${rate}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
