import Header from "@/components/Navbar/header"
import Hero from "@/app/_components/Hero"
import Timeline from "@/app/_components/EventTimeline"
import StepUpMentorshipSection from "./_components/MentorshipSurvey"
// import Recap from "./_components/recap"
import WorkshopRegistration from "./_components/WorkshopRegistration"

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-dvh">
        <Header />
        <Hero />
      </div>
      <main className="px-7 lg:px-[8%]">
        <Timeline isVisible={true} />
        <WorkshopRegistration isVisible={false} />
        <StepUpMentorshipSection isVisible={true} />
        {/* <Recap isVisible={true} /> */}
      </main>
    </div>
  )
}
