import Image from "next/image"

import logoPPIJ from "@/public/assets/logoppij.png"
import logoGrowAt from "@/public/assets/logogrowat.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <main>
      <div className="bg-[url('/assets/herosum.png')] bg-cover bg-center bg-no-repeat pb-10">
        <div className="flex items-center py-10 px-5 lg:px-40 xl:px-72">
          {/* logo growat & ppij */}
          <div className="flex py-5 px-5 mx-auto opacity-0">
            <Image src={logoGrowAt} alt="logo growat" height={20} />
            <Image src={logoPPIJ} alt="logo PPIJ" height={20} />
          </div>
        </div>
        <div className="text-ga-green">
          <h1 className="text-center text-5xl/100 leading-12 font-bold lg:text-7xl lg:leading-11">
            Step Up Mentorship 3.0
          </h1>
          <h2 className="text-center pt-6 text-2xl lg:text-2xl lg:leading-7">
            19 April - 10 Mei 2025 | Online
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 md:mx-14 lg:px-30 lg:mx-30 lg:gap-x-20 xl:mx-72">
            {/* <button className={buttonClass}>
              Mentors: Start Here!
            </button>
            <button className={buttonClass}>
              Get your handbook here!
            </button> */}
            <Button variant="secondary" className="" asChild>
              <Link
                href="https://ppij.org/StepUp-MenteeRegistForm "
                className="text-xl py-5 px-4"
              >
                Mentees: Register here!
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
