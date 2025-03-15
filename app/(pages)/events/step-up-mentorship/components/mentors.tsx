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
} from "@/components/ui/card"; 

export function MentorsCarousel() {
 
  const mentors = MentorsList;

  return (
    
    <section className="bg-gradient-to-r from-ga-blue to-ga-light-green flex flex-col items-center justify-center gap-10 py-10">

      <h1 className="text-3xl md:text-5xl text-white font-bold pt-10">
        Our Mentors
      </h1>
      <div className="w-full max-w-screen-2xl bg-transparent mx-auto sm:px-8 md:px-8 lg:px-8 xl:px-0 xxl:px-0">
        <Carousel className="relative">
          <CarouselContent className="flex gap-1">
            {mentors.map((mentor, index) => (
              <CarouselItem
                key={index}
                className="px-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/5 text-center"
              >
                {/* Card component for displaying mentor info */}
                <Card className="flex flex-col items-center my-2 bg-transparent border-0 shadow-none">
                  {/* CardHeader contains the mentor image */}
                  <CardHeader className="flex justify-center py-4">
                    <Image
                      src={mentor.image} // Mentor image URL.
                      alt={mentor.name} // Alt text for the image.
                      className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                    />
                  </CardHeader>
                  <CardContent className="px-1 text-white bg-transparent">
                    <CardTitle className="text-md md:text-lg font-bold">
                      {mentor.name}
                    </CardTitle>
                    <p className="text-sm">{mentor.title}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Navigation buttons are positioned absolutely in the carousel container */}
          <CarouselPrevious className="absolute left-4 sm:left-8 md:left-4 lg:left-0 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-4 sm:right-8 md:right-4 lg:right-0 top-1/2 transform -translate-y-1/2" />
          {/* Similar positioning for the next button on the right side */}
        </Carousel>
      </div>
    </section>
  );
}
