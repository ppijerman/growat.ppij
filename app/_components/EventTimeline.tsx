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
  isVisible: boolean
}

export default function EventTimeline({
  events,
  isVisible,
}: EventTimelineProps) {
  const filteredEvents = events.filter((event) => event.startDate > new Date())

  return (
    <div
      className={`container my-5 py-5 transition-opacity duration-500 overflow-visible ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-ga-green text-4xl lg:text-5xl font-bold text-center w-full">
        Upcoming Events
      </h2>
      <div className="w-full flex justify-center my-4">
        <div className="flex gap-6 overflow-x-visible px-2">
          {filteredEvents.map((event, index) => (
            <Link href={`/events/${event.slug}`} key={index}>
              <Card
                className={`flex flex-col min-w-[230px] max-w-[230px] w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw] h-96 text-xl justify-between text-center my-2 shadow-lg/20 border-none ${
                  index % 2 === 0
                    ? "bg-ga-beige text-ga-green"
                    : "bg-ga-green text-ga-beige"
                }`}
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
      </div>
    </div>
  )
}
