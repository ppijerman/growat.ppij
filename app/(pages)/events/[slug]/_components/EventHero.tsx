"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Countdown } from "./Countdown"

import { Card } from "@/components/ui/card"
import { GrowatEvent } from "@/lib/models/GrowatEvent"
import Link from "next/link"
import clsx from "clsx"
import { FastAverageColor } from "fast-average-color"
import React, { useState } from "react"
type EventHeroProps = {
  event: GrowatEvent
}

export default function EventHero({ event }: EventHeroProps) {
  const [isBgDark, setIsBgDark] = useState(false)

  const backgroundImageUrl =
    event.heroBackground?.url ||
    (event.eventType === "workshop"
      ? "/assets/heroBackground/DARKGREEN.png"
      : event.eventType === "webinar"
      ? "/assets/heroBackground/BEIGE.png"
      : event.eventType === "offline"
      ? "/assets/heroBackground/BLACK.png"
      : "/assets/heroBackground/BLUE.png")

  return (
    <div className="flex flex-col lg:flex-row w-full items-center justify-center md:py-4 bg-white bg-cover bg-center px-5 lg:px-10 py-5 space-y-5 xl:mx-20">
      <Card className="relative grow basis-1/2 h-full rounded-3xl shadow-lg overflow-hidden md:min-h-60">
        <Image
          src={backgroundImageUrl}
          alt="Event background"
          fill
          priority
          className="object-cover object-center absolute inset-0 z-0 rounded-3xl pointer-events-none"
          onLoad={async (e) => {
            const fac = new FastAverageColor()
            const img = e.target as HTMLImageElement
            const color = await fac.getColorAsync(img)
            setIsBgDark(color.isDark)
          }}
        />

        <div
          className={clsx(
            "relative z-10 space-y-4 p-4 md:p-6 flex flex-col",
            isBgDark ? "text-white" : "text-black"
          )}
        >
          <div
            className={clsx(
              "flex flex-col grow text-left space-y-2 ",
              event.hideDate ? "justify-between" : ""
            )}
          >
            {event.logo ? (
              <Image
                src={
                  event.logo.formats.small?.url ||
                  event.logo.formats.medium?.url ||
                  event.logo.url
                }
                alt="Event Logo"
                width={150}
                height={40}
                className="mb-2"
              />
            ) : (
              <h1 className="text-3xl md:text-4xl font-bold">{event.title}</h1>
            )}
            <p className="text-lg md:text-xl font-semibold">
              {event.hideDate ? null : (
                <>
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
                </>
              )}
            </p>
          </div>

          {!event.hideDate ? (
            <div className="flex justify-left gap-2 md:gap-4">
              <Countdown date={event.startDate} />
            </div>
          ) : (
            <div className="text-lg md:text-2xl">
              Date to be announced soon!
            </div>
          )}

          <div className="flex flex-row">
            <div className="flex flex-col justify-between items-baseline gap-4">
              <div className="text-left py-[2%] space-y-2 space-x-2">
                {event.linkButtons?.map((button, index) => (
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
                {event.partnerLogos?.map((logo, i) => (
                  <Image
                    key={i}
                    src={logo.formats.thumbnail?.url || logo.url}
                    alt={logo.name}
                    width={logo.formats.thumbnail?.width}
                    height={logo.formats.thumbnail?.height}
                    className="grow object-contain"
                  />
                ))}
              </div>
            </div>
            {/* Right-aligned logo */}
            {event.mainPartnerLogo && (
              <div className="flex justify-end">
                <Image
                  src={
                    event.mainPartnerLogo.formats.small?.url ||
                    event.mainPartnerLogo.url
                  }
                  alt="partner logo"
                  height={event.mainPartnerLogo.formats.small?.height}
                  width={event.mainPartnerLogo.formats.small?.width}
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="basis-1/2">
        <div className="flex flex-col items-center justify-center p-5 bg-ga-light h-3/4">
          <p className="leading-7 lg:mb-5 sm:text-lg lg:text-2xl text-center">
            <b>{event.description}</b>
          </p>
        </div>
      </div>
    </div>
  )
}
