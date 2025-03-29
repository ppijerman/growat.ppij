import Image from "next/image"

import logoPPIJ from "@/public/assets/logoppij.png"
import logoGrowAt from "@/public/assets/logogrowat.png"
import logoIPA from "@/public/assets/IPA_LogoBlack.png"
import logoStepUp from "@/public/assets/StepUp_LogoWhite.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <main>
      <div className="bg-[url('/assets/herosum.png')] bg-cover bg-center bg-no-repeat pb-10">
        <div className="flex items-center pt-15 pb-0 px-5 lg:px-40 xl:px-72">
            <div className="flex flex-wrap items-center justify-center space-x-1 md:space-x-6 w-full mb-1">
              <Image 
                src={logoGrowAt} 
                alt="logo growat" 
                width={150} 
                height={60} 
                className="object-contain w-30 md:w-40"
              />
              <Image 
                src={logoPPIJ} 
                alt="logo PPIJ" 
                width={150} 
                height={60} 
                className="object-contain w-30 md:w-40"
              />
              <Image 
                src={logoIPA} 
                alt="logo IPA" 
                width={150} 
                height={60} 
                className="object-contain w-30 md:w-40"
              />
            </div>
          </div>

        <div className="text-ga-green">
          <div className="flex items-center mx-auto px-1 w-full h-[180px] lg:pb-10 sm:w-[400px] md:w-[500px] md:h-[200px] lg:w-[600px] lg:h-[240px] overflow-hidden">
          <Image 
              src={logoStepUp} 
              alt="logo Step Up" 
              className="object-cover"
            />
          </div>
          <h2 className="text-center pt-6 text-2xl lg:text-2xl lg:leading-7">
            19 April - 10 Mei 2025 | Online
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 md:mx-14 lg:px-30 lg:mx-30 lg:gap-x-20 xl:mx-72">
          <Button variant="secondary" className="" asChild>
              <Link
                href="https://drive.google.com/file/d/1GG782N4FSumClSg6XyVnOFDtcGOJJolW/view"
                className="text-xl py-5 px-4"
              >
                Get your Handbook Here!
              </Link>
            </Button>
            <Button variant="secondary" className="" asChild>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfBkzNgoEKN4sDz6am2Kfn56G__4RHPKxSax0OBgeW4DBHzvQ/viewform"
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
