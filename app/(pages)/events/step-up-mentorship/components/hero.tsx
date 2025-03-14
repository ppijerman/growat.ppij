import Image from "next/image"
// import Link from "next/link"

import logoPPIJ from "@/public/assets/logoppij.png"
import logoGrowAt from "@/public/assets/logogrowat.png"

const buttonClass = "bg-ga-light-green hover:cursor-pointer hover:bg-ga-light-green/80 text-ga-dark py-2 px-4 rounded drop-shadow-lg shadow-ga-light-green/50"

export default function Hero() {
  return (
    <main>
      <div className="bg-[url('/assets/herosum.png')] bg-cover bg-center bg-no-repeat pb-10">
        <div className="flex items-center py-10 px-5 lg:px-40 xl:px-72">
          {/* logo growat & ppij */}
          <div className="flex py-5 px-5 mx-auto">
            <Image src={logoGrowAt} alt="logo growat" height={20}/>
            <Image src={logoPPIJ} alt="logo PPIJ" height={20}/>
          </div>
        </div>
        <div className="text-ga-green">
          <h1 className="text-center text-5xl leading-6 font-bold lg:text-7xl lg:leading-11">
            Step Up Mentorship 3.0
          </h1>
          <h2 className="text-center pt-6 text-2xl lg:text-2xl lg:leading-7">
            19 April - 10 Mei 2025 | Online
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 px-5 md:mx-14 lg:px-30 lg:mx-30 lg:gap-x-20 xl:mx-72">
            <button className={buttonClass}>
              Mentors: Start Here!
            </button>
            <button className={buttonClass}>
              Get your handbook here!
            </button>
            <button className={buttonClass}>
              Mentees: Register Here!
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}