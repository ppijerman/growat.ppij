import EventHero from "./_components/EventHero"
import { GrowatEventRepository } from "@/lib/repositories/growat-event-repository"
import EventTimetable from "./_components/EventTimetable"

export const revalidate = 60 // Revalidate every 60 seconds

type Params = {
  slug: string
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
          default:
            return null
        }
      })}
    </main>
  )
}
