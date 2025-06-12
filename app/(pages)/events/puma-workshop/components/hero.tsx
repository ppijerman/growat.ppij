import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Countdown } from "./countdown"
import { pumaVisit } from "@/lib/types/event"
import logo_puma from "@/public/assets/pumawhite.png"


import {
  Card
} from "@/components/ui/card"


export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center 
    md:gap-4 l:gap-8 xl:gap-14 md:py-4 border-black border-5
    bg-white bg-cover bg-center px-5 lg:px-[5%] py-5 space-y-5">

      <Card className="bg-[url('/assets/puma_hero.png')] 
      bg-cover bg-center h-full w-full  
      text-white rounded-3xl p-4 md:p-6 lg:p-8 w-full 
      md:w-2/3 lg:w-1/2 space-y-6 shadow-lg
      border-black border-5 ">
        <div className="text-left space-y-2">
          {pumaVisit.title.split("–").map((line, i) => (
            <h1 key={i} className="text-3xl md:text-4xl font-bold">
              {line.trim()}
            </h1>
          ))}
          <p className="text-lg md:text-xl font-semibold">
            {pumaVisit.eventInfo.startDate.toLocaleDateString("en-GB", {
              day: "numeric", month: "long", year: "numeric"
            })}
          </p>
        </div>

        <div className="flex justify-left gap-2 md:gap-4">
          <Countdown />
        </div>

        <div className="text-left py-[2%]">
          <Button className="bg-white text-black font-bold text-lg px-6 rounded-full" asChild>
            <a href={pumaVisit.link}>Register here</a>
          </Button>
        </div>
        
        <div className="flex justify-between items-baseline -mt-22 gap-4">

        {/* Left-aligned logos */}
        <div className="flex">
          {pumaVisit.logos.map((logo, i) => (
            <Image key={i} src={logo.src} alt={logo.alt} width={70} height={30} />
          ))}
        </div>

        {/* Right-aligned Puma logo */}
        <div className="border-white border-1">
          <Image
            src={logo_puma}
            alt="logo Puma"
            height={40}
            width={150}
          />
        </div>
        </div>
      </Card>

      <div className="lg:w-1/3 w-full">
        <div className="flex flex-col items-center justify-center p-5 bg-ga-light h-3/4">
          <p className="leading-7 lg:mb-5 sm:text-lg lg:text-2xl text-center">
            <b>{pumaVisit.description}</b>
          </p>
        </div>
      </div>
    </div>
  )
}
