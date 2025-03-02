

import { Countdown } from "@/app/(pages)/events/step-up-mentorship/components/countdown";
import { Home } from "@/app/(pages)/events/step-up-mentorship/components/home";

export default function Page() {
  return (
    <main className="w-screen">
        <Home />
        <Countdown />
    </main>
  );
}

