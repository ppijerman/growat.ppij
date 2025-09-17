import { SpeakersListContent } from "@/lib/models/GrowatEvent";
import { Speaker } from "@/lib/models/GrowatEvent";
import Image from "next/image";
import { mapImageMedia } from "@/lib/models/ImageMedia";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  speakersList: SpeakersListContent;
};

function SpeakerDiv({ speaker }: { speaker: Speaker }) {
  // Split name if more than 2 words
  const nameParts = speaker.name.split(" ");
  let firstName = speaker.name;
  let restName = "";
  if (nameParts.length > 2) {
    firstName = nameParts[0];
    restName = nameParts.slice(1).join(" ");
  }

  return (
    <div className="flex flex-col items-center justify-center text-center w-40 sm:w-50">
      {/* Role */}
      <p className="text-sm text-gray-500 mb-2">{speaker.role}</p>
      {/* Speaker Image */}
      <div className="rounded-full w-32 h-32 sm:w-40 sm:h-40 relative mb-3 overflow-hidden bg-ga-beige">
        {speaker.image && (
          <Image
            src={mapImageMedia(speaker.image).url}
            alt="SpeakerFoto"
            fill
            className="object-contain"
          />
        )}
      </div>
      {/* Name */}
      <p className="font-semibold text-base md:text-lg">{firstName}</p>
      {restName && (
        <p className="font-semibold text-base md:text-lg">{restName}</p>
      )}
      {/* Description */}
      <p className="text-xsw md:text-sm">{speaker.description}</p>
    </div>
  );
}

// Helper to chunk speakers into groups of n
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function SpeakersList({ speakersList }: Props) {
  if (speakersList.speakers.length === 0) {
    // No speakersList to show
    return null;
  } else if (speakersList.speakers.length <= 6) {
    // For testing duplicate speakers
    speakersList.speakers = [
      ...speakersList.speakers,
      ...speakersList.speakers,
    ];
  }

  let title = "";
  if (!speakersList.title) {
    title = "Speakers List";
  } else {
    title = speakersList.title;
  }

  // Chunk speakers into groups of 6 for carousel slides
  const speakerChunks = chunkArray(speakersList.speakers, 6);

  return (
    <>
      {/* Mobile: 2 columns, unlimited rows */}
      <div className="flex flex-col w-full items-center justify-center bg-white px-6 sm:px-10 lg:px-[6%] md:hidden">
        <p className="w-full text-2xl sm:text-3xl font-bold text-left mb-7">
          {title}
        </p>
        <div className="flex flex-wrap gap-5 w-full justify-center">
          {speakersList.speakers.map((speaker, idx) => (
            <div key={idx} className="sm:basis-1/4 flex justify-center mb-6">
              <SpeakerDiv speaker={speaker} />
            </div>
          ))}
        </div>
      </div>
      {/* Desktop: carousel */}
      <div className="hidden md:flex">
        <div className="flex flex-col items-center justify-center bg-white px-10 lg:px-[6%]">
          <p className="w-full text-2xl sm:text-3xl font-bold text-left mb-7">
            {title}
          </p>
          <div className="relative w-full flex items-center justify-center">
            <Carousel>
              <CarouselContent>
                {speakerChunks.map((chunk, idx) => (
                  <CarouselItem key={idx}>
                    <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-10">
                      {chunk.map((speaker, slideIndex) => (
                        <div
                          key={slideIndex}
                          className="basis-1/3 sm:basis-1/4 flex justify-center"
                        >
                          <SpeakerDiv speaker={speaker} />
                        </div>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 lg:left-10 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-0 lg:right-10 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
