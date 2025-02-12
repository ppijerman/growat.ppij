import Header from "@/components/Navbar/header"
import Hero from "@/app/hero"
import Timeline from "@/app/timeline"
import MentorshipSurvey from "./mentorship-survey"

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-dvh">
        <Header />
        <Hero />
      </div>
      <main className="px-7 lg:px-[8%]">
        <Timeline isVisible={true} />
        <MentorshipSurvey isVisible={true} />
      </main>
    </div>
  )
}
