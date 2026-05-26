"use client";

import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "María González",
    location: "Bogotá, Colombia",
    text: "La calidad de las prendas es excepcional. El negro absoluto es perfecto y el corte es impecable. Definitivamente volveré a comprar.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    location: "Medellín, Colombia",
    text: "Streetwear de lujo hecho en Colombia. La atención al detalle es increíble. Mis hoodies favoritos ahora son de NOIR URBANO.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    location: "Cali, Colombia",
    text: "El diseño es único y la calidad supera mis expectativas. Me encanta cómo cada pieza tiene su propia personalidad.",
    rating: 5,
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial Card */}
      <div className="glass p-10 md:p-16 relative overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500 border border-border/30">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-foreground/3 rounded-full blur-3xl" />

        {/* Quote icon */}
        <div className="absolute top-8 left-8 opacity-5">
          <Quote className="w-24 h-24" />
        </div>

        <div className="relative z-10">
          {/* Stars */}
          <div className="flex gap-2 mb-8">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-foreground text-foreground"
              />
            ))}
          </div>

          {/* Text */}
          <p className="text-lg md:text-2xl leading-relaxed mb-10 text-foreground/90">
            "{testimonials[currentIndex].text}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-foreground/20 to-foreground/5 flex items-center justify-center border border-border/30 shadow-premium">
              <span className="font-[family-name:var(--font-display)] text-2xl text-foreground">
                {testimonials[currentIndex].name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-muted-foreground tracking-[0.1em]">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={goToPrevious}
          className="p-4 border border-border/30 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 rounded-full shadow-sm hover:shadow-premium group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" />
        </button>

        {/* Dots */}
        <div className="flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-foreground w-8 shadow-premium"
                  : "bg-border/50 hover:bg-border/70 w-2"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-4 border border-border/30 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 rounded-full shadow-sm hover:shadow-premium group"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
