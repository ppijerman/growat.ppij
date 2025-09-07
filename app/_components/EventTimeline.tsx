import { GrowatEvent } from "@/lib/models/GrowatEvent"
import React from "react"
import Link from "next/link"
import ContentCard from "@/components/ContentCard/ContentCard"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

interface EventTimelineProps {
  events: GrowatEvent[]
}

export default function EventTimeline({ events }: EventTimelineProps) {
  const filteredEvents = events.filter((event) => {
    const now = new Date()
    const startDate = event.startDate ? new Date(event.startDate) : null
    const endDate = event.endDate ? new Date(event.endDate) : null
    return (
      (startDate && startDate >= now) ||
      (endDate && endDate >= now) ||
      (!startDate && !endDate)
    )
  })

  return (
    <>
      <h2 className="text-4xl lg:text-5xl font-bold mt-10 mx-5 md:mx-20">
        Upcoming Events
      </h2>
      <div className="flex flex-col my-4 gap-4 py-4">
        {filteredEvents.map((event, index) => (
          <ContentCard
            borderEffect={true}
            hoverable={false}
            className="flex md:flex-row items-center gap-4 mx-4 md:mx-20"
            color={
              event.eventType === "workshop" || event.eventType === "webinar"
                ? "ga-green"
                : event.eventType === "offline"
                ? "ga-dark"
                : "ga-blue"
            }
            key={index}
          >
            {/* left side text */}
            <div className="grow flex-col gap-2 text-xl text-center md:text-left space-y-3">
              <div className="text-3xl font-bold">{event.title}</div>
              <div className="hidden md:flex">{event.description}</div>
              <div>
                {!event.hideDate
                  ? (() => {
                      const start = new Date(event.startDate)
                      const end = event.endDate ? new Date(event.endDate) : null
                      const optionsStart: Intl.DateTimeFormatOptions = end
                        ? { day: "numeric", month: "long" }
                        : { day: "numeric", month: "long", year: "numeric" }
                      const startStr = start.toLocaleDateString(
                        "en-GB",
                        optionsStart
                      )
                      if (end) {
                        const endStr = end.toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                        return `${startStr} - ${endStr}`
                      }
                      return startStr
                    })()
                  : "Date to be announced"}
              </div>
            </div>
            {/* right side button */}
            <Button
              className={clsx(
                "shrink-0 mx-10 text-xl font-bold basis-1/6",
                (event.eventType === "workshop" ||
                  event.eventType === "webinar") &&
                  "bg-ga-green hover:bg-ga-green/80",
                event.eventType === "offline" &&
                  "bg-ga-dark hover:bg-ga-dark/80",
                event.eventType === "other" && "bg-ga-blue hover:bg-ga-blue/80"
              )}
              asChild
            >
              <Link href={`/events/${event.slug}`}>Learn more</Link>
            </Button>
          </ContentCard>
        ))}
      </div>
    </>
  )
}
