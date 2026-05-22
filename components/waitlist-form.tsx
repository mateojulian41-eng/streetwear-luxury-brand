"use client"

import { useState } from "react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required
          className="flex-1 bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-foreground text-background px-8 py-3 text-xs tracking-[0.2em] hover:bg-foreground/90 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "..." : "UNIRME"}
        </button>
      </div>
      {status === "success" && (
        <p className="mt-3 text-xs tracking-wider text-accent">
          Bienvenido a la lista. Te contactaremos pronto.
        </p>
      )}
    </form>
  )
}
