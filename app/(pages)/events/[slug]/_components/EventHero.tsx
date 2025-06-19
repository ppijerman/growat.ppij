import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Countdown } from "./Countdown"

import { Card } from "@/components/ui/card"
import { GrowatEvent } from "@/lib/models/growat-event"
import Link from "next/link"

type EventHeroProps = {
  event: GrowatEvent
}

export default function EventHero({ event }: EventHeroProps) {
  const backgroundImageUrl =
    event.heroBackground?.url || "'/assets/herosum.png'"

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center md:py-4 bg-white bg-cover bg-center px-5 lg:px-10 py-5 space-y-5 xl:mx-20">
      <Card
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
        className={`bg-cover bg-center h-full w-full  
      text-white rounded-3xl p-4 md:p-6 lg:p-8 
      space-y-4 shadow-lg`}
      >
        <div className="text-left space-y-2">
          {event.logo ? (
            <Image
              src={event.logo.formats.small.url}
              alt="Event Logo"
              width={150}
              height={40}
              className="mb-2"
            />
          ) : (
            <h1 className="text-3xl md:text-4xl font-bold">{event.title}</h1>
          )}
          <p className="text-lg md:text-xl font-semibold">
            {event.startDate.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {event.endDate &&
              ` - ${event.endDate.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}`}
          </p>
        </div>

        <div className="flex justify-left gap-2 md:gap-4">
          <Countdown date={event.startDate} />
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col justify-between items-baseline gap-4">
            <div className="text-left py-[2%] space-y-2 space-x-2">
              {event.linkButtons.map((button, index) => (
                <Button
                  key={index}
                  className="bg-white text-black font-bold text-lg px-6 rounded-full"
                  asChild
                >
                  <Link href={button.url} target="_blank">
                    {button.label}
                  </Link>
                </Button>
              ))}
            </div>
            {/* Left-aligned logos */}
            <div className="grid grid-cols-5 gap-2 items-stretch">
              {event.partnerLogos.map((logo, i) => (
                <Image
                  key={i}
                  src={logo.formats.thumbnail.url}
                  alt={logo.name}
                  width={logo.formats.thumbnail.width}
                  height={logo.formats.thumbnail.height}
                  className="grow object-contain"
                />
              ))}
            </div>
          </div>
          {/* Right-aligned Puma logo */}
          {event.mainPartnerLogo && (
            <div className="flex justify-end">
              <Image
                src={event.mainPartnerLogo.formats.small.url}
                alt="logo Puma"
                height={event.mainPartnerLogo.formats.small.height}
                width={event.mainPartnerLogo.formats.small.width}
                className="object-contain"
              />
            </div>
          )}
        </div>
      </Card>

      <div className=" w-full">
        <div className="flex flex-col items-center justify-center p-5 bg-ga-light h-3/4">
          <p className="leading-7 lg:mb-5 sm:text-lg lg:text-2xl text-center">
            <b>{event.description}</b>
          </p>
        </div>
      </div>
    </div>
  )
}
