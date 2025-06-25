import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GrowatEvent } from "@/lib/models/growat-event"
import React from "react"
import { DynamicIcon, IconName } from "lucide-react/dynamic"
import Link from "next/link"

const iconClasses =
  "w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px]"

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
      <h2 className="text-ga-green text-4xl lg:text-5xl font-bold text-center w-full my-4">
        Upcoming Events
      </h2>
      <div className="flex my-4 gap-4 overflow-x-auto py-4 mx-10">
        {filteredEvents.map((event, index) => (
          <Link
            href={`/events/${event.slug}`}
            key={index}
            className="hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Card
              className={[
                "flex flex-col min-w-[230px] max-w-[230px] w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw] h-96 text-xl justify-between text-center my-2 drop-shadow-lg/20 border-none",
                index % 2 === 0
                  ? "bg-ga-beige text-ga-green"
                  : "bg-ga-green text-ga-beige",
                (event.endDate && event.endDate < new Date()) ||
                (!event.endDate && event.startDate < new Date())
                  ? "opacity-50"
                  : "",
              ].join(" ")}
              style={{
                flex: "0 0 auto",
              }}
            >
              <CardHeader className="h-[25%] justify-center">
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="grow flex items-stretch">
                <div
                  className={`grow flex rounded-lg border-2 font-bold items-center justify-center px-2 ${
                    index % 2 === 0 ? "border-ga-green" : "border-ga-beige"
                  }`}
                >
                  <DynamicIcon
                    name={
                      event.iconName ? (event.iconName as IconName) : "rocket"
                    }
                    className={iconClasses}
                  />
                </div>
              </CardContent>
              <CardFooter className="self-center justify-center h-[15%]">
                {event.startDate.toLocaleDateString(undefined, {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
                {event.endDate && (
                  <>
                    {" "}
                    -<br />
                    {event.endDate.toLocaleDateString(undefined, {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </>
                )}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
