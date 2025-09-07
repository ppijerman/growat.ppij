"use client"

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
      </div>
    </div>
  )
}
