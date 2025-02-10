import Backdrop from "@/public/assets/backdrop.png"
import Hero from "@/app/hero"
import { Header } from "@/components/Navbar/header"
import Timeline from "@/app/timeline"

export default function Home() {
  return (
    <main className="w-screen">
      <Hero />
      <Header heroHeight={Backdrop.height} />
      <Timeline isVisible={true} />
      <div className="h-screen"></div>
    </main>
  )
}
