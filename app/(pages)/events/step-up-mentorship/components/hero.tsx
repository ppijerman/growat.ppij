import Image from "next/image"

import logoPPIJ from "@/public/assets/logoppij.png"
import logoGrowAt from "@/public/assets/logogrowat.png"
import logoIPA from "@/public/assets/IPA_LogoBlack.png"
import logoStepUp from "@/public/assets/StepUp_LogoBlack.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-[url('/assets/herosum.png')] bg-cover bg-center py-5 space-y-5">
      <div className="flex flex-wrap justify-center space-x-2 mx-auto">
        <Image
          src={logoGrowAt}
          alt="logo growat"
          width={150}
          height={60}
          className="object-contain w-1/3 md:w-1/6 lg:w-[10%]"
        />
        <Image
          src={logoPPIJ}
          alt="logo PPIJ"
          width={150}
          height={60}
          className="object-contain w-1/3 md:w-1/6 lg:w-[10%]"
        />
        <Image
          src={logoIPA}
          alt="logo IPA"
          width={150}
          height={60}
          className="object-contain w-1/3 md:w-1/6 lg:w-[10%]"
        />
      </div>

      <Image
        src={logoStepUp}
        alt="logo Step Up"
        className="object-cover w-[90%] md:w-[50%] mx-auto"
      />

      <div className="text-ga-green text-xl lg:text-2xl space-y-2 lg:space-y-5">
        <h2 className="text-center lg:leading-7">
          19 April - 10 Mei 2025 | Online
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-x-5 md:mx-14 lg:px-30 lg:mx-30 xl:mx-72">
          <Button variant="secondary" className="text-xl lg:text-2xl" asChild>
            <Link
              href="https://drive.google.com/file/d/1GG782N4FSumClSg6XyVnOFDtcGOJJolW/view"
              className=""
            >
              Mentee&apos;s Handbook
            </Link>
          </Button>
          <Button variant="secondary" className="text-xl lg:text-2xl" asChild>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfBkzNgoEKN4sDz6am2Kfn56G__4RHPKxSax0OBgeW4DBHzvQ/viewform"
              className=""
            >
              Mentees Free Registration!
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
