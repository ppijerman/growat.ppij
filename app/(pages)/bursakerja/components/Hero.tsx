import { Card } from "@/components/ui/card"
import Image from "next/image"
type HeroProps = {
    backgroundImage : String
    title : String
    subheading : String
}

export default function Hero(props : HeroProps){
    const backgroundImageUrl = props?.backgroundImage || "'/assets/LIGHTGREEN.png'"
    const currentTitle = props?.title || "Karierbruecke"
    const currentsubheading = props?.subheading || "Subheading Here"

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center md:py-4 bg-cover bg-center px-5 lg:px-10 py-5 space-y-5 xl:mx-20">
            <Card style={{backgroundImage: `url(${backgroundImageUrl})`}} className="bg-cover bg-center h-[50vh] lg:h-[70vh] w-full rounded-3xl shadow-lg flex justify-center items-center ">
                <p className="text-4xl lg:text-6xl w-full font-semibold text-center lg:mr-7">KarierBrücke</p>
            </Card>
            <div className="w-full">
                <div className="flex flex-col items-center lg:items-start justify-center p-5 bg-[#f7f7f7] h-3/4">
                    <p className="lg:mb-5 text-xl lg:text-5xl text-center">
                        <b>{currentTitle}</b>
                    </p>
                    <p className="lg:mb-5 sm:text-lg lg:text-2xl text-center">
                        <b>{currentsubheading}</b>
                    </p>
                </div>
            </div>
        
        </div>
    )
}