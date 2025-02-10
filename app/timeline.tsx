"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React from "react"

const timelineData = [
  { date: "February 2025", event: "IT Online Workshop" },
  { date: "March 2025", event: "1st Inspiring Webinar" },
  { date: "April-May 2025", event: "Step Up Mentorship 3.0" },
  { date: "June 2025", event: "SEA Career Fair" },
  { date: "June 2025", event: "Indonesian Networking Night" },
  { date: "June 2025", event: "Company Visit" },
  { date: "August 2025", event: "2nd Power-Packed Webinar" },
]

interface TimelineProps {
  isVisible: boolean
}

const Timeline: React.FC<TimelineProps> = ({ isVisible }) => {
  return (
    <div
      id="event-timeline"
      className={`container my-6 md:pt-24 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-center w-full underline">
        What to Expect
      </h2>
      <Carousel className="mx-4 my-5">
        <CarouselContent className="-ml-2">
          {timelineData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 sm:basis-1/2 md:basis-1/4 lg:basis-1/5 text-center"
            >
              <Card
                className={`text-xl flex-col h-40 items-center justify-center content-center p-3 my-2 ${
                  index % 2 === 0
                    ? "bg-ga-light text-ga-green"
                    : "bg-ga-green text-ga-beige"
                }`}
              >
                <CardHeader className="m-0 p-0">
                  <CardTitle className="m-0 p-0">{item.event}</CardTitle>
                </CardHeader>
                <CardContent className="m-0 p-0">{item.date}</CardContent>
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
