import Header from "@/components/Navbar/header"
import Hero from "@/app/_components/Hero"
import EventTimeline from "@/app/_components/EventTimeline"
// import Recap from "./_components/recap"
import WorkshopRegistration from "./_components/WorkshopRegistration"
import { GrowatEventRepository } from "@/lib/repositories/growat-event-repository"

export default async function Home() {
  const eventsRepository = new GrowatEventRepository()

  const events = await eventsRepository.getAllEvents()

  return (
    <div>
      <div className="flex flex-col h-dvh">
        <Header />
        <Hero />
      </div>
      <main className="px-7 lg:px-[8%]">
        <EventTimeline events={events} isVisible={true} />
        <WorkshopRegistration isVisible={false} />
        {/* <Recap isVisible={true} /> */}
      </main>
    </div>
  )
}
