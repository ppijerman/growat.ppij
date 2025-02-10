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
      className={`container pt-20 pb-10 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-5">What to Expect</h2>
      <Carousel>
        <CarouselContent>
          {timelineData.map((item, index) => (
            <CarouselItem key={index} className="basis-1/4 text-center">
              <Card
                className={`flex-col h-40 items-center justify-center content-center my-4 ${
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
