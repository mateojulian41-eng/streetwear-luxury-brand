"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: "DIAS", value: timeLeft.days },
    { label: "HORAS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEG", value: timeLeft.seconds },
  ]

  return (
    <div className="flex items-center justify-center gap-3 md:gap-6">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-3 md:gap-6">
          <div className="flex flex-col items-center">
            <span className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground mt-2">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-muted-foreground/30">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
