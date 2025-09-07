import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import sideImage from "@/public/assets/teamwork.jpg"
export default function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row mx-5 lg:mx-15 py-5 items-center gap-5">
      <div className="md:basis-2/3 gap-5 lg:pr-4 flex flex-col">
        <p className="text-5xl text-shadow-lg font-bold text-center md:text-start">
          About Us
        </p>
        <p className="font-md text-lg text-justify">
          <b className="font-semibold">Grow at PPI Jerman</b> is a professional
          development initiative by PPI Jerman, empowering Indonesian students
          to thrive in Germany’s job market. Through webinars, workshops,
          mentorship, and networking events, we equip participants with
          essential hard and soft skills while connecting them to Indonesian
          professionals in Germany.
        </p>
        <p className="font-medium text-lg text-justify">
          Ready to take the next step? Explore opportunities on{" "}
          <b className="font-semibold">KarierBrücke—</b>your gateway to
          internships, working student roles, and full-time positions across
          Germany.
        </p>
        <Button
          className="bg-ga-green text-white font-semibold rounded-lg self-center lg:self-start mb-7"
          size={"lg"}
          asChild
        >
          <Link href={"/bursakerja"}>
            <p>Visit Job Board</p>
          </Link>
        </Button>
      </div>
      <div className="md:basis-1/3">
        <Image
          src={sideImage}
          alt="Sample Image"
          className="rounded-[18]"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  )
}
