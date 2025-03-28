"use server"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { events } from "@/lib/events"
import React from "react"

const iconClasses =
  "w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px]"

interface TimelineProps {
  isVisible: boolean
}

const Timeline: React.FC<TimelineProps> = ({ isVisible }) => {
  return (
    <div
      className={`container my-5 py-5 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-ga-green text-4xl lg:text-5xl font-bold text-center w-full">
        Upcoming Events
      </h2>
      <Carousel className="mx-3 my-4">
        <CarouselContent className="-ml-2">
          {events
            .filter((event) => event.startDate > new Date())
            .map((item, index) => (
              <CarouselItem
                key={index}
                className="px-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 text-center"
              >
                <Card
                  className={`flex flex-col h-96 text-xl justify-between text-center my-2 ${
                    index % 2 === 0
                      ? "bg-ga-light text-ga-green"
                      : "bg-ga-green text-ga-beige"
                  }`}
                >
                  <CardHeader className="h-[25%] justify-center">
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="grow flex items-stretch">
                    <div
                      className={`grow flex rounded-lg border-2 font-bold items-center justify-center px-2 ${
                        index % 2 === 0 ? "border-ga-green" : "border-ga-beige"
                      }`}
                    >
                      {item.icon &&
                        React.cloneElement(item.icon, {
                          className: iconClasses,
                        })}
                    </div>
                  </CardContent>
                  <CardFooter className="self-center justify-center h-[15%]">
                    {item.startDate.toLocaleDateString(undefined, {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                    {item.endDate && (
                      <>
                        {" "}
                        -<br />
                        {item.endDate.toLocaleDateString(undefined, {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </>
                    )}
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Timeline
