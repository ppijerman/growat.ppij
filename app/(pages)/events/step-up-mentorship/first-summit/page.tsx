import Image from "next/image"
import Link from "next/link"

//assets
import logoPPIJ from "@/public/assets/logoppij.png"
import logoGrowAt from "@/public/assets/logogrowat.png"
import logoIPA from "@/public/assets/IPA_LogoBlack.png"
import fotoNarsum_1 from "@/public/assets/Narsum_2_Andru_Thifaldy.png"
import fotoMod from "@/public/assets/Moderator_Candra_Saigustia.jpg"
import { Button } from "@/components/ui/button"
import Timeline from "./timeline"

const narasumber = [
  {
    name: "Malsa Nirmala Rusli",
    role: "Speaker",
    description: "Social Media Strategist & Illustrator at e.Consult AG",
    socmed: "IG: malsanirmala",
    img: fotoNarsum_1,
  },
  {
    name: "Muhammad Rafi Aziz Dzakwan",
    role: "Moderator",
    description: "Bachelor Student | HAW Hamburg Logistik/Technical Business Administration",
    socmed: "IG: razizdz",
    img: fotoMod,
  },
]

export default function Page() {
  return (
    <div className="bg-ga-light bg-cover">
        
      {/* Header & Speakers Section */}
      <div className="py-10 bg-gradient-to-br bg-cover from-ga-blue to-ga-light-green"
        >
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

        <div className="px-5 lg:px-40 xl:px-72">
          <h1 className="text-center text-[32px] leading-[40px] font-bold tracking-wider text-ga-dark lg:text-5xl lg:leading-[72px]">
          Summit #1: AI as Your Career Co-Pilot: Strategies for Students and Professionals
          </h1>
          <h2 className="text-center text-lg pt-6 text-ga-dark lg:text-[20px] lg:leading-7">
          19 April | Online
          </h2>
          <p className="text-center text-lg pt-8 text-ga-dark text-bold lg:text-[20px] lg:leading-7">
          Bergabunglah bersama kami dalam sesi pembukaan SUM 3.0, di mana kami akan mengeksplorasi cara mencari dan melamar pekerjaan secara efektif menggunakan AI. <br/>
          Topik-topik yang akan dibahas mencakupi pembuatan CV dan menulis surat lamaran yang menarik serta persiapan interview menggunakan alat bantu AI dan prompt engineering. 
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
                {/*add insta logo here?*/}
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
            <Link href="https://ppij.org/SUM)">
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
            <p className="pt-8">🗓️ 19 April 2025</p>
            <p>⏰ 13:00 s.d. 15:55 CET | 18:00 s.d. 20:55 WIB</p>
            <p>📍 Zoom Meeting</p>
            <p>FREE Entry, no registration required.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-ga-green leading-6 pb-1">
            About event
          </h2>
          
                <div className="pl-5 lg:text-[18px]">
                    <div className="pt-4">
                        <p className="font-bold">What you will learn:</p>
                        <p>
                        1. Bagaimana AI dapat membantu dalam proses melamar kerja: <br/>
                            1.1. Dalam pembuatan CV dan cover letter?<br/>
                            1.2. Dalam persiapan wawancara kerja?<br/>
                            1.3.  AI Tools yang bisa digunakan untuk membuat CV dan cover letter dan bagaimana cara untuk prompt<br/>
                        2. Apa tantangan dalam penggunaan AI untuk melamar kerja dan bagaimana cara mengatasinya? <br/>
                        3. Apa pertimbangan etika dalam penggunaan AI untuk aplikasi kerja?
                        </p>
                </div>

            </div>

        </div>
      </div>

      <Timeline/>
    </div>
  )
}
