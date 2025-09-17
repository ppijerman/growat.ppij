import { Metadata } from "next"
import EventHero from "./_components/EventHero"
import { GrowatEventRepository } from "@/lib/repositories/growat-event-repository"
import EventTimetable from "./_components/EventTimetable"
import WhatSection from "./_components/WhatSection"
import ResponsiveGrid from "./_components/BulletSection"
import SpeakerList from "./_components/SpeakersList"

export const revalidate = 60 // Revalidate every 60 seconds

type Params = {
  slug: string
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const eventRepository = new GrowatEventRepository()
  const event = await eventRepository.getEventBySlug(slug)

  if (!event) {
    return {
      title: "Event Not Found | Grow at PPI Jerman",
      description: "The requested event could not be found.",
    }
  }

  return {
    title: `${event.title} | Grow at PPI Jerman`,
    description: event.description || "",
  }
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params

  const eventRepository = new GrowatEventRepository()
  let event = await eventRepository.getEventBySlug(slug)
  if (event?.contents) {
    event = await eventRepository.populateContent(event)
  }

  if (!event) {
    return (
      <main className="flex flex-col items-center justify-center grow my-auto">
        <h1 className="flex text-3xl md:text-5xl font-bold">Event Not Found</h1>
      </main>
    )
  }

  return (
    <main className="flex flex-col items-center justify-center grow">
      <EventHero event={event} />
      {event.contents?.map((content, index) => {
        switch (content.__component) {
          case "event-content.event-timeline":
            return (
              <div key={index} className="w-full">
                <EventTimetable eventAgenda={content} />
              </div>
            )
          case "event-content.rich-text":
            return (
              <div className="w-full" key={index}>
                {/* {JSON.stringify(content.image?.url)} */}
                <WhatSection richTextContent={content} />
              </div>
            )
          case "event-content.bullets-section":
            return (
              <div key={index} className="w-full">
                <ResponsiveGrid bulletSection={content} />
              </div>
            )
          case "event-content.speakers-list":
            return (
              <div key={index} className="w-full">
                <SpeakerList speakersList={content} />
              </div>
            )
          default:
            return null
        }})}
    </main>
  )
}
