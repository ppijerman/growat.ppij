import { Card } from "@/components/ui/card"

export default function Hero() {
  const backgroundImageUrl = "'/assets/KarierHero.jpeg'"
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:py-4 bg-cover bg-center px-5 lg:px-10 py-5 space-y-5 md:space-x-5 xl:mx-20">
      <Card
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        className="bg-cover bg-center h-[50vh] lg:h-[70vh] w-full rounded-3xl shadow-lg flex justify-center items-center "
      />
      <div className="flex w-full md:justify-center">
        <div className="flex flex-col py-5 h-3/4">
          <p className="lg:mb-5 text-3xl md:text-7xl flex flex-col font-bold">
            KarierBrücke
          </p>
          <p className="text-xl md:text-2xl font-bold">by Grow at PPI Jerman</p>
          <p className="lg:mb-5 text-xl md:text-3xl flex flex-col">
            Bridging Talent to Opportunity
          </p>
        </div>
      </div>
    </div>
  )
}
