

import { Countdown } from "@/app/(pages)/events/step-up-mentorship/components/countdown";
import { Home } from "@/app/(pages)/events/step-up-mentorship/components/home";
import { MentorsCarousel } from "./components/mentors";

export default function Page() {
  return (
    <main className="w-screen">
        <Home />
        <Countdown />
        <MentorsCarousel />
    </main>
  );
}

