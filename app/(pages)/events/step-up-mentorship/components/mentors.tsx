"use client";

import Image from "next/image";
import { MentorsList } from "@/public/assets/stepUpMentors/mentors";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export function MentorsCarousel() {
  const mentors = MentorsList;

  return (
    <section className="bg-gradient-to-r from-ga-blue to-ga-light-green flex flex-col items-center justify-center gap-10 py-10">
      {/* Section header */}
      <h1 className="text-3xl md:text-5xl text-white font-bold pt-10">Our Mentors</h1>

      <div className="w-full max-w-screen-2xl bg-transparent mx-auto">
        <Carousel className="relative">
          <CarouselContent className="flex gap-4 md:gap-8">
            {mentors.map((mentor, index) => (
              <CarouselItem
                key={index}
                className="px-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 text-center"
              >
                <Card className="flex flex-col items-center justify-between my-2 bg-transparent border-0 shadow-none">
                  <CardHeader className="flex justify-center py-4">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                    />
                  </CardHeader>
                  <CardContent className="px-2 text-white bg-transparent">
                    <CardTitle className="text-md md:text-lg font-bold">
                      {mentor.name}
                    </CardTitle>
                    <p className="text-sm">{mentor.title}</p>
                  </CardContent>
                  <CardFooter className="py-2">
                    {/* Additional information if needed */}
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Navigation buttons positioned absolutely */}
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
