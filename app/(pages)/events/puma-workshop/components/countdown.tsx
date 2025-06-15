"use client"

import { useState, useEffect } from "react"

export function Countdown() {
  const [countdown, setCountdown] = useState({
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const currentTime = new Date().getTime()
      const eventDate = new Date("2025-07-04T00:00:00Z")
      const timeLeft = eventDate.getTime() - currentTime

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

        setCountdown({
          Days: days,
          Hours: hours,
          Minutes: minutes,
          Seconds: seconds,
        })
      } else {
        setCountdown({ Days: 0, Hours: 0, Minutes: 0, Seconds: 0 })
      }
    }

    updateCountdown() // initial call to avoid delay
    const intervalChange = setInterval(updateCountdown, 1000)
    return () => clearInterval(intervalChange)
  }, [])

  return (
    <div className="flex justify-center gap-2 md:gap-4">
      {Object.entries(countdown).map(([unit, value]) => (
        <div
          key={unit}
          className="bg-white text-black px-4 py-2 rounded-xl text-center min-w-[60px]"
        >
          <p className="text-2xl font-bold">{String(value).padStart(2, "0")}</p>
          <p className="text-xs font-semibold">{unit}</p>
        </div>
      ))}
    </div>
  )
}
