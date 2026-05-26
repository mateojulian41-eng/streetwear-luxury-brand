"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Por favor ingresa un email válido");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");

    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-md mx-auto">
      {isSubmitted ? (
        <div className="glass p-10 text-center animate-scale-in shadow-premium border border-border/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-foreground/3 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-foreground/20 to-foreground/5 flex items-center justify-center mx-auto mb-6 border border-border/30 shadow-premium">
              <CheckCircle className="w-10 h-10 text-foreground" />
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-3xl mb-3">
              ¡Suscrito!
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Gracias por unirte a NOIR URBANO. Recibirás actualizaciones
              exclusivas.
            </p>
            <div className="mt-6 inline-block px-6 py-3 bg-foreground/5 border border-border/30 rounded-full">
              <p className="text-[10px] tracking-[0.2em] text-foreground/80 font-medium">
                Código de descuento: NOIR10
              </p>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Tu email"
              required
              className={`flex-1 bg-card/50 border px-6 py-4 text-sm focus:outline-none transition-all duration-300 rounded-full shadow-sm ${
                error
                  ? "border-red-500/50 focus:border-red-500 focus:shadow-premium"
                  : "border-border/50 focus:border-foreground/50 focus:shadow-premium"
              }`}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-premium hover:shadow-premium-lg group"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              ) : (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
              )}
            </button>
          </div>
          {error && (
            <div className="flex items-center gap-2 text-red-500 text-[10px] tracking-[0.1em]">
              <AlertCircle className="w-3 h-3" />
              {error}
            </div>
          )}
          <p className="text-[10px] text-muted-foreground tracking-[0.1em] leading-relaxed">
            Al suscribirte, aceptas recibir actualizaciones exclusivas y ofertas
            especiales.
          </p>
        </form>
      )}
    </div>
  );
}
