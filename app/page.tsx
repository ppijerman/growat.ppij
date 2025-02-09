import Backdrop from "@/public/assets/backdrop.png"
import Hero from "@/app/hero"
import { Header } from "@/components/Navbar/header"
import Timeline from "@/app/timeline"
import MentorshipSurvey from "./mentorship-survey"

export default function Home() {
  return (
    <main className="w-screen">
      <Hero />
      <Header heroHeight={Backdrop.height} />
      <Timeline isVisible={true} />
      <MentorshipSurvey isVisible={true} />
    </main>
  )
}
