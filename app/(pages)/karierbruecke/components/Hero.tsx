import { Card } from "@/components/ui/card"

export default function Hero() {
  const backgroundImageUrl = "'/assets/KarierHero.jpeg'"
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center md:py-4 bg-cover bg-center px-5 lg:px-10 py-5 space-y-5 space-x-5 xl:mx-20">
      <Card
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        className="bg-cover bg-center h-[50vh] lg:h-[70vh] w-full rounded-3xl shadow-lg flex justify-center items-center "
      />
      <div className="flex flex-col items-center lg:items-start justify-center p-5 h-3/4 w-full">
        <p className="lg:mb-5 text-xl lg:text-7xl text-center flex flex-col">
          <b>KarierBrücke</b>
          <b className="sm:text-lg lg:text-2xl text-start">
            by Grow at PPI Jerman
          </b>
        </p>
        <p className="lg:mb-5 sm:text-lg lg:text-2xl text-center flex flex-col">
          <b>Subheading Here</b>
          <b>Subheading Here</b>
          <b>Subheading Here</b>
        </p>
      </div>
    </div>
  )
}
