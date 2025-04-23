import Image from "next/image"
import Link from "next/link"

//assets
import logoPPIJ from "@/public/assets/logoppij.png"
import logoGrowAt from "@/public/assets/logogrowat.png"
import logoIPA from "@/public/assets/IPA_LogoBlack.png"
import fotoNarsum1 from "@/public/assets/stepUpMentors/summitPhoto/husainSpeaker.jpg"
import fotoNarsum2 from "@/public/assets/stepUpMentors/summitPhoto/mustikaSpeaker.jpg"
import fotoMod from "@/public/assets/stepUpMentors/summitPhoto/abyanMod.jpg"
import { Button } from "@/components/ui/button"
import Timeline from "./timeline"

const narasumber = [
  {
    name: "Mustika Rizki Fitriyanti",
    role: "Speaker",
    description: "Senior Data Product Owner at Zeiss Group",
    socmed: "IG: mustikarizki",
    img: fotoNarsum1,
  },
  {
    name: "Husain Yusuf",
    role: "Speaker",
    description: "Senior Consultant at Devoteam A Cloud",
    socmed: "IG: hsn3107",
    img: fotoNarsum2,
  },
  {
    name: "Abyan Raff",
    role: "Moderator",
    description:
      "ADAS System Architecture Werkstudent at Cariad",
    socmed: "IG: byanraff",
    img: fotoMod,
  },
]

export default function Page() {
  return (
    <div className="bg-ga-light bg-cover">
      {/* Header & Speakers Section */}
      <div className="py-10 bg-gradient-to-br bg-cover from-ga-blue to-ga-light-green">
        <div className="flex flex-wrap justify-center space-x-2 mx-auto py-2">
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

        <div className="px-5 lg:px-40 xl:px-72">
          <h1 className="text-center text-[32px] leading-[40px] font-bold tracking-wider text-ga-dark lg:text-5xl lg:leading-[72px]">
          Summit #3: Networking Strategies & Personal Branding as Indonesians in Germany
          </h1>
          <h2 className="text-center text-lg pt-6 text-ga-dark lg:text-[20px] lg:leading-7">
            03 Mei | Online
          </h2>
          <p className="text-center text-lg pt-8 text-ga-dark text-bold lg:text-[20px] lg:leading-7">
          Summit ini merupakan salah satu acara dari program SUM 3.0 dimana acara ini menjadi summit terakhir SUM 3.0. 
          Acara ini berjudul Networking Strategy & Personal Branding as Indonesians in Germany ini akan membahas perihal cara networking 
          dan membangun personal branding dengan baik yang akan berguna untuk networking dengan pekerja atau perusahaan. 
          Disini juga akan dijelaskan secara kultural networking di Jerman sebagai profesional Indonesia.
          </p>
        </div>

        <div className="w-full flex flex-wrap md:pt-5 justify-center">
          {narasumber.map((narsum, index) => (
            <div key={index} className="text-center p-4 ">
              <div className="flex flex-col items-center justify-center mb-5">
                <div className="font-bold text-ga-dark text-lg lg:text-2xl text">
                  {narsum.role}: {narsum.name}
                </div>
                <div>{narsum.description}</div>
                {/*add social media logo here?*/}
                <div>
                  {narsum.socmed}
                </div>
              </div>
              <div className="w-[80%] mx-auto overflow-hidden rounded-full border-0 drop-shadow-lg">
                <Image
                  src={narsum.img}
                  alt={narsum.name}
                  width={500}
                  height={500}
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="sticky bottom-0 z-50 bg-ga-light py-4 shadow">
          <div className="flex justify-center">
            <Link href="https://ppij.org/SUM">
              <Button variant="secondary" size="lg">
                Join here!
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Event Information Section */}
      <div className="w-full pb-10 pt-5 md:pt-20 px-6 max-w-7xl mx-auto flex flex-col gap-10">
        <div>
          <h2 className="text-2xl text-ga-green lg:leading-6">When?</h2>
          <div className="pl-5 lg:text-[24px]">
            <p className="pt-8">🗓️ 03 Mei 2025</p>
            <p>⏰ 13:00 s.d. 15:00 CET | 18:00 s.d. 20:00 WIB</p>
            <p>📍 Zoom Meeting</p>
            <p>FREE Entry, no registration required.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-ga-green leading-6 pb-1">About event</h2>

          <div className="pl-5 lg:text-[18px]">
            <div className="pt-4">
              <p className="font-bold">What you will learn:</p>
              <p>
                1. Personal Branding sebagai Profesional di Jerman (LinkedIn, XING, dll.)
                <br />
                2. Networking secara Praktis (bagaimana mendekati orang, job fair)
                <br />
                3. Networking sebagai Profesional di Jerman (Kultur Kerja, Asosiasi, dll.)
                <br />
                4. Networking sebagai Indonesia di Jerman (Perbedaan Kultur Indo-Jerman, Asosiasi Indo-Jerman, dll.)
              </p>
            </div>
          </div>
        </div>
      </div>

      <Timeline />
    </div>
  )
}
