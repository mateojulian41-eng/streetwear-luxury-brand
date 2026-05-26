"use client"

import { useState, useRef } from "react"
import Image from "next/image"

interface ImageZoomProps {
  src: string
  alt: string
  width: number
  height: number
  zoomLevel?: number
}

export function ImageZoom({ src, alt, width, height, zoomLevel = 2 }: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => setIsZoomed(true)
  const handleMouseLeave = () => {
    setIsZoomed(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden cursor-zoom-in"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="transition-transform duration-300 ease-out"
        style={{
          transform: isZoomed ? `scale(${zoomLevel})` : "scale(1)",
          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
      />
      {isZoomed && (
        <div className="absolute inset-0 pointer-events-none border-2 border-foreground/20" />
      )}
    </div>
  )
}
