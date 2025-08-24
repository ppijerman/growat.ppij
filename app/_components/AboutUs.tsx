import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import sampleImage from "@/public/assets/puma_hero.png"
export default function AboutUs(){
    return (
        <div className="min-h-dvh flex flex-col lg:flex-row p-5 lg:p-15">
            <div className="lg:w-2/3 gap-5 lg:pr-4 flex flex-col">
                <p className="text-5xl text-shadow-lg font-bold text-center lg:text-start">About Us</p>
                <p className="font-medium text-shadow-md text-lg text-justify my-7"><b className="font-semibold">Grow at PPI Jerman</b> is a professional development initiative by PPI Jerman, empowering Indonesian students to thrive in Germany’s job market. Through webinars, workshops, mentorship, and networking events, we equip participants with essential hard and soft skills while connecting them to Indonesian professionals in Germany.</p>
                <p className="font-medium text-lg text-shadow-md text-justify my-7">Ready to take the next step? Explore opportunities on <b className="font-semibold">KarierBrücke—</b>your gateway to internships, working student roles, and full-time positions across Germany.</p>
                <Button className="bg-[#1b4a49] text-white font-semibold text-sm px-10 py-5 rounded-lg self-center lg:self-start mb-7" asChild>
                    <Link href={"/bursakerja"}>
                        <p>Visit Job Board</p>
                    </Link>
                </Button>
            </div>
            <div className="lg:w-1/3 p-4 lg:h-[70vh] h-[auto]">
                <div className="border-4 border-dashed border-black w-full h-full rounded-2xl flex items-center justify-middle">
                    <Image src={sampleImage} alt="Sample Image"></Image>
                </div>
            </div>
        </div>
    )
}