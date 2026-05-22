"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
    setEmail("")

    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="max-w-md mx-auto">
      {isSubmitted ? (
        <div className="glass p-8 text-center animate-scale-in">
          <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-foreground" />
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-2xl mb-2">
            ¡Suscrito!
          </h3>
          <p className="text-muted-foreground">
            Gracias por unirte a NOIR URBANO
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              required
              className="flex-1 bg-card/50 border border-border/50 px-6 py-4 text-sm focus:border-foreground/50 focus:outline-none transition-all duration-300"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </div>
          <p className="text-[10px] text-muted-foreground tracking-wider">
            Al suscribirte, aceptas recibir actualizaciones exclusivas
          </p>
        </form>
      )}
    </div>
  )
}
