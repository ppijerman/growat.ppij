import Image from "next/image"
import companyLogo from "@/public/assets/FAISS.png"
import {
  BriefcaseBusiness,
  Clock,
  CircleUserRound,
  Calendar,
  MapPin,
  Building,
  SquareArrowOutUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
// import JobTag from "./jobtag"

export default function JobDetail() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col rounded-lg border-lg border-2 border-[#737373] border-solid p-3 gap-5">
        <div className="flex flex-row gap-3">
          <div className=" flex aspect-square h-[10vh]">
            <Image src={companyLogo} alt="company logo" />
          </div>
          <p className=" w-full font-bold h-auto text-lg self-center">
            Grafik Designer (m/w/d)
          </p>
        </div>
        <div className="flex flex-col h-auto gap-2">
          <div className="lg:flex h-auto gap-2 flex-row">
            <div className="flex flex-row gap-2 lg:w-1/3">
              <Building className="h-5 w-5" />
              <div>
                <p>Company</p>
                <p className="font-semibold">PUMA</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 lg:w-1/3">
              <MapPin className="h-5 w-5" />
              <div>
                <p>Location</p>
                <p className="font-semibold">Herzogenaurach, Germany</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 lg:w-1/3">
              <CircleUserRound className="h-5 w-5" />
              <div>
                <p>Apply as</p>
                <p className="font-semibold">Student</p>
              </div>
            </div>
          </div>
          <div className="lg:flex h-auto gap-2 flex-row">
            <div className="flex flex-row gap-2 lg:w-1/3">
              <BriefcaseBusiness className="h-5 w-5" />
              <div>
                <p>Fields of work</p>
                <p className="font-semibold">IT</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 lg:w-1/3">
              <Calendar className="h-5 w-5" />
              <div>
                <p>Starting date</p>
                <p className="font-semibold">According to arrangement</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 lg:w-1/3">
              <Clock className="h-5 w-5" />
              <div>
                <p>Working time</p>
                <p className="font-semibold">Part-time</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2"></div>
          <div className="p-1 flex flex-row justify-between align-bottom">
            <Button
              className="bg-[#1b4a49] text-white font-semibold text-sm px-6 rounded-lg gap-2 self-end"
              asChild
            >
              <Link href={"https://www.google.com"}>
                <p>Apply now</p> <SquareArrowOutUpRight className="h-5 w-5" />
              </Link>
            </Button>

            <div className="flex flex-col">
              <p>Posted 3 days ago</p>
              <p className="font-semibold">JOB-ID: 123456-789-A</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="rounded-lg border-lg border-2 border-[#737373] border-solid p-4 gap-5">
        <p className="text-lg font-semibold">Your tasks</p>
        <ul className="list-disc p-3">
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </li>
        </ul>
        <p className="text-lg font-semibold">Your profile</p>
        <ul className="list-disc p-3">
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </li>
        </ul>
        <p className="font-semibold text-lg">
          {" "}
          Contact & additional information
        </p>
        <div className="py-3">
          <p className="font-semibold">Start:</p>
          <p>From July 2025</p>
          <p className="font-semibold">Duration:</p>
          <p>Minimum 12 months, at least 15 hours per week</p>
          <p className="font-semibold">Requirement:</p>
          <p>Must be enrolled as a student for the internship period</p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        <div className="py-3">
          <p className="font-semibold">
            Do you have any questions about the role?
          </p>
          <p>Mr. Lorem Ipsum</p>
          <p>+49 111222333444</p>
        </div>
        <Button
          className="bg-[#1b4a49] text-white font-semibold text-sm px-6 rounded-lg gap-2"
          asChild
        >
          <Link href={"https://www.google.com"}>
            <p>Apply now</p> <SquareArrowOutUpRight className="h-5 w-5" />
          </Link>
        </Button>
      </div> */}
    </div>
  )
}
