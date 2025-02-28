import Image from "next/image"
import Link from "next/link"

//logos :)))))
import fotoNarsum_1 from "@/public/assets/Narsum_2_Andru_Thifaldy.png"
import fotoNarsum_2 from "@/public/assets/Narasumber_1.png"
import fotoMod from "@/public/assets/Moderator_Candra_Saigustia.jpg"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="bg-[#fefefe]">
      <div className="py-10 bg-[#a9e5bb]">
        <div className="px-5 lg:px-40 xl:px-72">
          <h1 className="text-center text-[32px] leading-[40px] font-bold font-stretch-condensed tracking-wider text-[#1b4a49] lg:text-5xl lg:leading-[72px]">
          Talkshow: A to Z Entrepreneurship and Business: Indonesian Business Owners in Germany
          </h1>
          <h2 className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          15 Maret | Online
          </h2>
          <p className="text-center pt-8 text-[#36485C] lg:text-[20px] lg:leading-7">
            Desc text here
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-x-6 pt-[50px]">
          <Link href="https://ppij.org/talkshow-entrepreneurship-growatppij" className="hover:bg-transparent">
            <Button variant="secondary" size="lg">
              Registrasi Sekarang
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-wrap md:pt-5 justify-center bg-linear-to-b from-ga-light-green from-50% to-ga-white to-50%">
        <div className=" text-center">
          <div className="h-12 flex items-center justify-center">
            <h2 className="text-md lg:text-2xl text-[#36485C]">
              Moderator: Candra Saigustia
            </h2>
          </div>
          <Image src={fotoMod} alt="fotoModerator" width={500} />
        </div>
        <div className=" text-center">
          <div className="h-12 flex items-center justify-center">
            <h2 className="text-md lg:text-2xl text-[#36485C]">
              Narasumber: Andru Thifaldy
            </h2>
          </div>
          <Image src={fotoNarsum_1} alt="fotoNarsum_1" width={500} />
        </div>
        <div className=" text-center">
          <div className="h-12 flex items-center justify-center">
            <h2 className="text-md lg:text-2xl text-[#36485C]">
              Narasumber: Muhammad Ihsan H Sukmana
            </h2>
          </div>
          <Image src={fotoNarsum_2} alt="fotoNarsum_2" width={500} />
        </div>
      </div>

      <div className="">
        <div className="w-full pb-10 pt-5 md:pt-20 px-6 max-w-7xl mx-auto flex-col flex gap-10">
          <div>
            <h2 className="text-2xl text-[#36485C] lg:leading-6">
              Tempat dan Waktu
            </h2>
            <div className="pl-5 lg:text-[24px]">
              <p className="pt-8">🗓️ 15 Maret 2025</p>
              <p>⏰ 13:00 s.d. 14:30 CET | 19:00 s.d. 20:30 WIB</p>
              <p>📍 Zoom Meeting</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl text-[#36485C] leading-6">Tentang Event</h2>
            <div className="pl-5 lg:text-[18px]">
              <div className="pt-10">
                <p>
                  <span className="font-bold">Our Speakers:</span>
                </p>
                <p>
                Muhammad Ihsan H Sukmana <br />
                  • CPO & Co-Founder Mitigant GmbH <br />
                </p>
                <p>
                Andru Thifaldy <br />
                  • Co-Founder Meramanis Coffee <br />
                </p>
              </div>

              <div className="pt-4">
                <p className="font-bold">What you will learn:</p>
                <p>
                  Something
                </p>
              </div>

              <div className="pt-4">
                <p className="font-bold">What you will get: </p>
                <p>
                  Something
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl text-[#36485C] leading-6">
              Biaya Pendaftaran
            </h2>
            <div className="pt-8">
              <div className="pl-5 lg:text-[18px]">
                <p className="font-bold">Free</p>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
