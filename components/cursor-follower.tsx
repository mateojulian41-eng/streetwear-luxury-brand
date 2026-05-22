"use client";

import { useRef, useEffect, useState } from "react";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef<number | undefined>(undefined);
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animate = () => {
      setPosition((prev) => {
        const lerp = (start: number, end: number, factor: number) => {
          return start + (end - start) * factor;
        };

        return {
          x: lerp(prev.x, targetPosition.current.x, 0.12),
          y: lerp(prev.y, targetPosition.current.y, 0.12),
        };
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`w-8 h-8 rounded-full border border-foreground/30 transition-all duration-300 ${
          isHovering ? "w-12 h-12 bg-foreground/10 border-foreground/50" : ""
        }`}
      />
      <div
        className={`absolute top-1/2 left-1/2 w-1 h-1 bg-foreground rounded-full transition-all duration-300 ${
          isHovering ? "w-2 h-2 bg-foreground" : ""
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
