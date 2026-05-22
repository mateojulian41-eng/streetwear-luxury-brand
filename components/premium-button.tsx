"use client"

import { useRef, useState, MouseEvent, ReactNode } from "react"
import { ArrowRight } from "lucide-react"

interface PremiumButtonProps {
  children: ReactNode
  href?: string
  className?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  icon?: boolean
}

export function PremiumButton({
  children,
  href,
  className = "",
  variant = "primary",
  size = "lg",
  icon = true,
}: PremiumButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setPosition({
      x: x / 15,
      y: y / 15,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300"
  
  const variantStyles = {
    primary: "bg-foreground text-background hover:bg-foreground/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
    secondary: "bg-card text-foreground border border-border hover:bg-card/80 hover:border-foreground/50",
    outline: "bg-transparent text-foreground border border-border hover:bg-foreground/10",
  }

  const sizeStyles = {
    sm: "h-10 px-6 text-[10px] tracking-[0.25em]",
    md: "h-12 px-8 text-[11px] tracking-[0.3em]",
    lg: "h-14 px-10 text-[11px] tracking-[0.3em]",
  }

  const content = (
    <div
      ref={ref}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 && position.y === 0 ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
      }}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {/* Glow effect on hover */}
      {variant === "primary" && (
        <div
          className={`absolute inset-0 bg-foreground/20 blur-xl transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return <button>{content}</button>
}
