import EventHero from "./_components/hero"
import { GrowatEventRepository } from "@/lib/repositories/growat-event-repository"

type Params = {
  slug: string
}
export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params

  const eventRepository = new GrowatEventRepository()
  const event = await eventRepository.getEventBySlug(slug)

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
    </main>
  )
}
