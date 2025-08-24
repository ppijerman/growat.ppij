"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <div className="h-full lg:px-10 lg:py-5 p-5">
      <div className="relative h-full flex flex-col bg-landing bg-cover bg-center rounded-xl">
      {/* Logo and text */}
      <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 justify-items-center text-center text-5xl md:text-6xl lg:text-8xl font-bold grow">
        <h1 className="">
          Grow at
          <br />
          PPI Jerman
        </h1>
        <h3 className="font-normal text-xl leading-relaxed md:text-2xl lg:text-3xl">
          Let&apos;s Grow, Glow and Go!
        </h3>
      </div>
      {/* arrow */}
        {/* <div className="w-full flex justify-center mt-auto mb-10 landscape:mb-1">
          <Link
            href="#event-timeline"
            className="hover:bg-transparent focus:bg-transparent"
          >
            <Arrow className="animate-bounce transform not-hover:scale-60 not-hover:duration-300 hover:scale-70 landscape:not-hover:scale-50 landscape:hover:scale-60 hover:duration-400" />
          </Link>
        </div> */}
      </div>
    </div>
  )
}

function Arrow(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      width="44"
      height="75"
      viewBox="0 0 22 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="17" r="11" fill="#1B4A49" />
      <path
        d="M10.2929 34.7071C10.6834 35.0976 11.3166 35.0976 11.7071 34.7071L18.0711 28.3431C18.4616 27.9526 18.4616 27.3195 18.0711 26.9289C17.6805 26.5384 17.0474 26.5384 16.6569 26.9289L11 32.5858L5.34315 26.9289C4.95262 26.5384 4.31946 26.5384 3.92893 26.9289C3.53841 27.3195 3.53841 27.9526 3.92893 28.3431L10.2929 34.7071ZM10 0L10 34H12L12 0L10 0Z"
        fill="#222222"
      />
    </svg>
  )
}
