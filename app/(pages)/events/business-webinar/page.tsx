import Image from "next/image"
import Link from "next/link"

//logos
import fotoNarsum_1 from "@/public/assets/Narsum_2_Andru_Thifaldy.png"
import fotoNarsum_2 from "@/public/assets/Narasumber_1.png"
import fotoMod from "@/public/assets/Moderator_Candra_Saigustia.jpg"
import { Button } from "@/components/ui/button"

const narasumber = [
  {
    name: "Andru Thifaldy",
    role: "Speaker",
    description: "Co-Founder Meramanis Coffee",
    img: fotoNarsum_1,
  },
  {
    name: "Muhammad Ihsan H Sukmana",
    role: "Speaker",
    description: "CPO & Co-Founder Mitigant GmbH",
    img: fotoNarsum_2,
  },
  {
    name: "Candra Saigustia",
    role: "Moderator",
    description: "",
    img: fotoMod,
  },
]

export default function Page() {
  return (
    <div className="bg-ga-light">
      {/* Header & Speakers Section */}
      <div className="py-10 bg-[#a9e5bb]">
        <div className="px-5 lg:px-40 xl:px-72">
          <h1 className="text-center text-[32px] leading-[40px] font-bold tracking-wider text-[#1b4a49] lg:text-5xl lg:leading-[72px]">
            Talkshow: A to Z Entrepreneurship and Business: Indonesian Business
            Owners in Germany
          </h1>
          <h2 className="text-center text-lg pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
            March 15 | Online
          </h2>
          <p className="text-center text-lg pt-8 text-[#36485C] lg:text-[20px] lg:leading-7">
            📢 Calling all aspiring entrepreneurs! 📢
            <br />
            Learn from successful Indonesian business owners in Germany and get
            the insights you need to kickstart your own venture! 🌱💼
          </p>
        </div>

        <div className="w-full flex flex-wrap md:pt-5 justify-center">
          {narasumber.map((narsum, index) => (
            <div key={index} className="text-center p-4 ">
              <div className="flex flex-col items-center justify-center mb-5">
                <div className="font-bold text-lg lg:text-2xl text-[#36485C]">
                  {narsum.role}: {narsum.name}
                </div>
                <div>{narsum.description}</div>
              </div>
              <div className="w-[80%] mx-auto overflow-hidden rounded-full border-10 border-[#fefefe]">
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
        <div className="sticky bottom-0 z-50 bg-[#fefefe] py-4 shadow">
          <div className="flex justify-center">
            <Link href="https://ppij.org/talkshow-entrepreneurship-growatppij">
              <Button variant="secondary" size="lg">
                Register now!
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Event Information Section */}
      <div className="w-full pb-10 pt-5 md:pt-20 px-6 max-w-7xl mx-auto flex flex-col gap-10">
        <div>
          <h2 className="text-2xl text-[#36485C] lg:leading-6">When?</h2>
          <div className="pl-5 lg:text-[24px]">
            <p className="pt-8">🗓️ 15 March 2025</p>
            <p>⏰ 13:00-14:30 CET | 19:00-20:30 WIB</p>
            <p>📍 Zoom Meeting</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-[#36485C] leading-6 pb-1">
            About event
          </h2>
          <div className="pl-5 lg:text-[18px]">
            <p>
              <span className="font-semibold underline">Our Speakers:</span>
            </p>
            <p>
              <span className="font-bold">Andru Thifaldy</span>
              <br />
              Co-Founder Meramanis Coffee <br />
            </p>
            <p>
              <span className="font-bold">Muhammad Ihsan H Sukmana</span>
              <br />
              CPO & Co-Founder Mitigant GmbH <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
