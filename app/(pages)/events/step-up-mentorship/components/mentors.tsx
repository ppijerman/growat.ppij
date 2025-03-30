"use client"
import * as React from "react"
import Image from "next/image"
import { MentorsList } from "@/public/assets/stepUpMentors/mentors"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MentorsCarousel() {
  const mentors = MentorsList

  return (
    <section className="bg-gradient-to-r from-ga-blue to-ga-light-green flex flex-col items-center justify-center gap-10 py-10 px-10">
      <h1 className="text-3xl md:text-5xl text-white font-bold pt-10">
        Our Mentors
      </h1>
      <div className="w-full max-w-screen-2xl mx-auto">
        <Carousel
          orientation="horizontal"
          opts={{ align: "center", loop: true }}
          className="relative"
        >
          <CarouselContent className="flex gap-3 ml-1">
            {mentors.map((mentor, index) => (
              <CarouselItem
                key={index}
                className="-pl-3 md:basis-1/2 lg:basis-1/3 xl:basis-1/5 text-center"
              >
                <Card className="flex flex-col items-center my-2 bg-transparent border-0 shadow-none">
                  <CardHeader className="flex justify-center py-4">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-48 h-48 rounded-full object-cover object-top drop-shadow-lg"
                    />
                  </CardHeader>
                  <CardContent className="px-1 text-white bg-transparent">
                    <CardTitle className="text-2xl font-bold">
                      {mentor.name}
                    </CardTitle>
                    <p className="text-xl">{mentor.title}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-15px] top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-[-15px] top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  )
}
