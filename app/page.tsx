import NavBar from "@/components/Navbar/NavBar"
import Hero from "@/app/_components/Hero"
import EventTimeline from "@/app/_components/EventTimeline"
import WorkshopRegistration from "./_components/WorkshopRegistration"
import { GrowatEventRepository } from "@/lib/repositories/growat-event-repository"

export const revalidate = 60

export default async function Home() {
  const eventsRepository = new GrowatEventRepository()

  const events = await eventsRepository.getAllEvents()

  return (
    <div>
      <div className="flex flex-col h-dvh">
        <NavBar events={events} />
        <Hero />
      </div>
      <main>
        <EventTimeline events={events} />
        <WorkshopRegistration isVisible={false} />
      </main>
    </div>
  )
}
