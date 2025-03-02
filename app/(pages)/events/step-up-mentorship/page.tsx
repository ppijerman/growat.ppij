import EventInfo from "./components/eventInfo"
import Timeline from "./components/timeline"
import Hero from "./components/hero"
import { Countdown } from "./components/countdown"

export default function Page() {
  return (
    <main className="w-screen">
      <Hero />
      <Countdown />
      <EventInfo />
      <Timeline />
    </main>
  )
}
