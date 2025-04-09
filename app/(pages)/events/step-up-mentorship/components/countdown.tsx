"use client"

import { useState, useEffect } from "react"

export function Countdown() {
  // Event date is now initialized inside the useEffect
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const currentTime = new Date().getTime()
      const eventDate = new Date("2025-04-13T00:00:00Z")
      const timeLeft = eventDate.getTime() - currentTime

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

        setCountdown({ days, hours, minutes, seconds })
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }
    const intervalChange = setInterval(updateCountdown, 1000)
    return () => clearInterval(intervalChange)
  }, [])

  return (
    <section className="flex flex-col justify-center items-center text-primary bg-ga-light-green py-5">
      <div className="flex flex-col text-ga-green w-full px-18 max-w-6xl mx-auto">
        <h1 className="m-0 text-1xl sm:text-1xl md:text-3xl lg:text-4xl text-left">
          Your Mentorship Journey Begins Soon!
        </h1>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl">
            <h1 className="m-0 text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide">
              Registration closes in
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-5 lg:gap-10 py-5">
        {Object.entries(countdown).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <strong
              aria-label={key}
              className="text-6xl md:text-8xl lg:text-10xl font-bold text-ga-blue"
            >
              {value}
            </strong>
            <span className="text-md md:text-lg lg:text-xl font-bold text-ga-green">
              {key.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
