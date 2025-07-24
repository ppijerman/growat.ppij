import Image from "next/image"
import companyLogo from "@/public/assets/FAISS.png"
import {BriefcaseBusiness, Clock, CircleUserRound} from "lucide-react"


export default function Card(){
    return <div className="flex flex-row border-2 border-[#737373] border-solid bg-white h-[25vh] lg:h-[25vh] rounded-[18] my-4">
        {/*Ini div untuk selected*/}
        <div className="hidden sm:block sm:w-1/50 bg-[#1b4a49] rounded-l-[16]"></div>
        {/*Ini div untuk Content*/}
        <div className="flex flex-col w-full py-3 lg:py-5">
            {/*Ini div untuk Content*/}
            <div className="flex flex-row h-full lg:h-4/5 px-2" >
                <div className="flex hidden md:block md:h-1/2 aspect-square overflow-hidden content-start p-2 justify-center">
                    <Image src={companyLogo} alt="company logo" />
                </div>
                <div className="flex w-full flex-col">
                    <div className="flex h-1/2 flex-col p-2 lg:h-3/5">
                        <p className="text-lg font-extrabold">Grafik Designer (m/w/d)</p>
                        <p>META &bull; Herzogenaurach, Germany </p>
                    </div>
                    <div className="flex h-2/5 sm:w-5/6 px-2 justify-between flex-col md:flex-row gap-1">
                        <div className="flex flex-row gap-1">
                            <div>
                                <BriefcaseBusiness className="h-5 w-5 lg:my-1"/>
                            </div>
                            <div>
                                <p className="hidden md:block">Fields of work</p>
                                <p className="text-sm font-semibold">IT</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1">
                            <div>
                                <Clock className="h-5 w-5 lg:my-1"/>
                            </div>
                            <div>
                                <p className="hidden md:block">Working hours</p>
                                <p className="text-sm font-semibold">Part-time</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1">
                            <div>
                                <CircleUserRound className="h-5 w-5 lg:my-1"/>
                            </div>
                            <div>
                                <p className="hidden md:block">Apply as</p>
                                <p className="text-sm font-semibold">Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {/*Ini div untuk see more*/}
                <div className="hidden lg:flex sm:h-1/5 justify-between px-10 pt-1">
                    <p className="font-normal ">Posted on 06.06.2002</p>
                    <p className="font-normal">Learn More &gt;&gt; </p>
                </div>
        </div>
    </div>
}