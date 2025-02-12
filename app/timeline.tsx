"use client"

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
import React, { ReactElement } from "react"
import {
  BrainCircuit,
  Building2,
  Globe,
  Rocket,
  Sparkles,
  Users,
  BatteryCharging,
} from "lucide-react"

type TimelineData = {
  date: string
  event: string
  icon: ReactElement
}

const iconClasses =
  "w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px]"

const timelineData: TimelineData[] = [
  {
    date: "February 2025",
    event: "IT Online Workshop",
    icon: <BrainCircuit className={iconClasses} />,
  },
  {
    date: "March 2025",
    event: "1st Inspiring Webinar",
    icon: <Sparkles className={iconClasses} />,
  },
  {
    date: "April-May 2025",
    event: "Step Up Mentorship 3.0",
    icon: <Rocket className={iconClasses} />,
  },
  {
    date: "June 2025",
    event: "SEA Career Fair",
    icon: <Globe className={iconClasses} />,
  },
  {
    date: "June 2025",
    event: "Indonesian Networking Night",
    icon: <Users className={iconClasses} />,
  },
  {
    date: "June 2025",
    event: "Company Visit",
    icon: <Building2 size={120} className={iconClasses} />,
  },
  {
    date: "August 2025",
    event: "2nd Power-Packed Webinar",
    icon: <BatteryCharging size={120} className={iconClasses} />,
  },
]

interface TimelineProps {
  isVisible: boolean
}

const Timeline: React.FC<TimelineProps> = ({ isVisible }) => {
  return (
    <div
      id="event-timeline"
      className={`container my-10 pt-5 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-ga-green text-4xl lg:text-5xl font-bold text-center w-full underline">
        Upcoming Events
      </h2>
      <Carousel className="mx-3 my-4">
        <CarouselContent className="-ml-2">
          {timelineData.map((item, index) => (
            <CarouselItem
              key={index}
              className="px-2 sm:basis-1/2 md:basis-1/4 lg:basis-1/5 text-center"
            >
              <Card
                className={`flex flex-col h-96 text-xl justify-between text-center my-2 ${
                  index % 2 === 0
                    ? "bg-ga-light text-ga-green"
                    : "bg-ga-green text-ga-beige"
                }`}
              >
                <CardHeader className="h-[25%]">
                  <CardTitle>{item.event}</CardTitle>
                </CardHeader>
                <CardContent className="grow flex items-stretch">
                  <div
                    className={`grow flex rounded-lg border-2 border-dashed font-bold items-center justify-center px-2 ${
                      index % 2 === 0 ? "border-ga-green" : "border-ga-beige"
                    }`}
                  >
                    {item.icon}
                  </div>
                </CardContent>
                <CardFooter className="self-center justify-center h-[15%]">
                  {item.date}
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
