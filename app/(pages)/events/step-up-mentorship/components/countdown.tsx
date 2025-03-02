"use client";

import { useState, useEffect } from "react";

export function Countdown() {
  const eventDate = new Date("2025-04-19T00:00:00Z");
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const timeLeft = eventDate.getTime() - currentTime;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    const intervalChange = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalChange);
  }, [eventDate]);

  return (
    <section className="flex flex-col justify-center items-center text-primary bg-secondary min-h-[30rem] py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 items-center w-full lg:w-1/2 py-5">
        {Object.entries(countdown).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center space-y-1">
            <strong
              aria-label={key}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent"
            >
              {value}
            </strong>
            <span className="text-xl md:text-2xl lg:text-3xl font-medium">
              {key.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
