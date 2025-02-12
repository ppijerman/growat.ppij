"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <div className="h-full flex flex-col bg-landing bg-cover bg-center px-5 items-center pb-5">
      {/* Logo and text */}
      <div className="my-auto landscape:mb-0 landscape:mt-auto landscape:md:my-auto items-end text-center text-4xl md:text-5xl lg:text-6xl font-bold">
        Grow at PPI Jerman <br />
        Let&apos;s Grow, Glow and Go!
      </div>
      <div className="flex-row justify-items-center text-center text-black mb-10 landscape:mb-0 landscape:md:inline">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-medium">
          Coming soon
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-normal">
          Scroll for more information
        </p>
      </div>

      {/* arrow */}
      <div className="row-start-3 w-full flex justify-center mb-10 landscape:mb-1">
        <Link href="#event-timeline" className="hover:bg-transparent">
          <Arrow className="transform not-hover:scale-80 not-hover:duration-300 hover:scale-100 landscape:not-hover:scale-70 hover:duration-400" />
        </Link>
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
      <circle cx="11" cy="17" r="11" fill="#1B4A49" />
      <path
        d="M10.2929 34.7071C10.6834 35.0976 11.3166 35.0976 11.7071 34.7071L18.0711 28.3431C18.4616 27.9526 18.4616 27.3195 18.0711 26.9289C17.6805 26.5384 17.0474 26.5384 16.6569 26.9289L11 32.5858L5.34315 26.9289C4.95262 26.5384 4.31946 26.5384 3.92893 26.9289C3.53841 27.3195 3.53841 27.9526 3.92893 28.3431L10.2929 34.7071ZM10 0L10 34H12L12 0L10 0Z"
        fill="#222222"
      />
    </svg>
  )
}
