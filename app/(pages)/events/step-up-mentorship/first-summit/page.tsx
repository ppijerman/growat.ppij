import Image from "next/image"
import Link from "next/link"
import { summitContent } from "@/app/(pages)/events/step-up-mentorship/first-summit/data"
import { Button } from "@/components/ui/button"
import Timeline from "./timeline"

export default function Page() {
  return (
    <div className="bg-ga-light bg-cover">
      {/* Header & Logos */}
      <div className="py-10 bg-gradient-to-br bg-cover from-ga-blue to-ga-light-green">
        <div className="flex flex-wrap justify-center space-x-2 mx-auto py-2">
          {summitContent.logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={60}
              className="object-contain w-1/3 md:w-1/6 lg:w-[10%]"
            />
          ))}
        </div>

        <div className="px-5 lg:px-40 xl:px-72">
          <h1 className="text-center text-[32px] leading-[40px] font-bold tracking-wider text-ga-dark lg:text-5xl lg:leading-[72px]">
            {summitContent.title}
          </h1>
          <h2 className="text-center text-lg pt-6 text-ga-dark lg:text-[20px] lg:leading-7">
            {summitContent.date} | Online
          </h2>
          <p className="text-center text-lg pt-8 text-ga-dark text-bold lg:text-[20px] lg:leading-7">
            {summitContent.description}
          </p>
        </div>

        <div className="w-full sm:flex md:pt-5 justify-center">
          {summitContent.speakers.map((narsum, index) => (
            <div key={index} className="text-center p-4">
              <div className="flex flex-col items-center justify-center mb-5">
                <div className="font-bold text-ga-dark text-lg lg:text-xl">
                  {narsum.role}: {narsum.name}
                </div>
                <div>{narsum.description}</div>
                <div>{narsum.socmed}</div>
              </div>
              <div className="w-[60%] mx-auto overflow-hidden rounded-full border-0 drop-shadow-lg">
                <Image
                  src={narsum.img}
                  alt={narsum.name}
                  width={500}
                  height={500}
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative">
        <div className="sticky bottom-0 z-50 bg-ga-light py-4 shadow">
          <div className="flex justify-center">
            <Link href={summitContent.ctaLink}>
              <Button variant="secondary" size="lg">
                Join here!
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Event Info */}
      <div className="w-full pb-10 pt-5 md:pt-20 px-6 max-w-7xl mx-auto flex flex-col gap-10">
        <div>
          <h2 className="text-2xl text-ga-green lg:leading-6">When?</h2>
          <div className="pl-5 lg:text-[24px] pt-8">
            <p>{summitContent.eventInfo.date}</p>
            <p>{summitContent.eventInfo.time}</p>
            <p>{summitContent.eventInfo.location}</p>
            <p>{summitContent.eventInfo.note}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-ga-green leading-6 pb-1">About event</h2>
          <div className="pl-5 lg:text-[18px] pt-4">
            <p className="font-bold">What you will learn:</p>
            {summitContent.learningPoints.map((point, idx) => (
              <p key={idx}>{point}</p>
            ))}
          </div>
        </div>
      </div>

      <Timeline />
    </div>
  )
}
