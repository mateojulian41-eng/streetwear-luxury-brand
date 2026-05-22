"use client"

import { useState, useEffect } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  name: string
  location: string
  text: string
  rating: number
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
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial Card */}
      <div className="glass p-8 md:p-12 relative overflow-hidden">
        {/* Quote icon */}
        <div className="absolute top-8 left-8 opacity-10">
          <Quote className="w-16 h-16" />
        </div>

        <div className="relative z-10">
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
            ))}
          </div>

          {/* Text */}
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            {testimonials[currentIndex].text}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
              <span className="font-[family-name:var(--font-display)] text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goToPrevious}
          className="p-3 border border-border/50 hover:border-foreground/50 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-foreground w-6" : "bg-border/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-3 border border-border/50 hover:border-foreground/50 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
