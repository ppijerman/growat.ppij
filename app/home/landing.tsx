"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import LogoGrowat from "@/assets/logogrowat.png"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight)
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const opacity = windowHeight ? Math.max(1 - scrollY / windowHeight, 0) : 1

  return (
    <div className="mb-20">
      <div className="relative w-full h-screen" style={{ opacity }}>
        <div className="top-0 left-0 w-full h-full bg-landing bg-cover bg-center">
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <Image
              src={LogoGrowat}
              alt="Logo Growat"
              className="mx-auto my-0 p-5 object-contain max-h-96"
            />
            <div className="flex-row justify-items-center text-center text-black">
              <h1 className="text-6xl font-bold">Coming soon</h1>
              <p className="text-2xl mt-4">Scroll for more information</p>
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex justify-center mb-10">
            <Arrow className="animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Arrow(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      width="44"
      height="70"
      viewBox="0 0 22 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="17" r="11" fill="#1B4A49" fillOpacity="0.78" />
      <path
        d="M10.2929 34.7071C10.6834 35.0976 11.3166 35.0976 11.7071 34.7071L18.0711 28.3431C18.4616 27.9526 18.4616 27.3195 18.0711 26.9289C17.6805 26.5384 17.0474 26.5384 16.6569 26.9289L11 32.5858L5.34315 26.9289C4.95262 26.5384 4.31946 26.5384 3.92893 26.9289C3.53841 27.3195 3.53841 27.9526 3.92893 28.3431L10.2929 34.7071ZM10 0L10 34H12L12 0L10 0Z"
        fill="#222222"
      />
    </svg>
  )
}
