import { GrowatEventRepository } from "@/lib/repositories/growat-event-repository"

export default async function Page({ params }: { params: { slug: string } }) {
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
      <h1 className="flex text-3xl md:text-5xl font-bold">{event.title}</h1>
      <div className="flex flex-col items-center justify-center mt-4">
        <p className="mt-4 text-lg">{event.description}</p>
      </div>
    </main>
  )
}
