import Image from "next/image"
import companyLogo from "@/public/assets/logogrowat.png"
import { BriefcaseBusiness, Clock, CircleUserRound } from "lucide-react"
import { JobOffer } from "@/lib/models/JobOffer"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import JobDetail from "./JobDetail"
import ContentCard from "@/components/ContentCard/ContentCard"

type JobOfferCardProps = {
  jobOffer: JobOffer
}

export default function JobOfferCard({ jobOffer }: JobOfferCardProps) {
  return (
    <div className="flex flex-col lg:flex-row mx-5 w-5/6 lg:w-9/12 xl:w-[1024px]">
      {/*Smaller screen*/}
      <div className="w-full lg:w-4/5 rounded-lg block lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <JobOfferCardContent jobOffer={jobOffer} />
          </SheetTrigger>
          <SheetContent
            side={"bottom"}
            className="h-[70vh] overflow-y-scroll py-10 px-3 gap-1"
          >
            <SheetTitle />
            <JobDetail />
          </SheetContent>
        </Sheet>
      </div>
      {/*Bigger screen*/}
      <div className="w-full rounded-lg hidden lg:block border-dash border-1">
        <Sheet>
          <SheetTrigger asChild>
            <JobOfferCardContent jobOffer={jobOffer} />
          </SheetTrigger>
          <SheetContent
            side={"right"}
            className="w-4/7 overflow-y-scroll py-10 px-3 gap-1"
          >
            <SheetTitle />
            <JobDetail />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

function JobOfferCardContent({ jobOffer }: JobOfferCardProps) {
  return (
    <ContentCard hoverable={true} color="ga-green">
      <div className="flex grow py-2 bg-ga-light">
        <div className="flex md:h-1/3 aspect-square self-start bg-ga-beige rounded-[18] overflow-hidden">
          <Image
            src={jobOffer.companyLogo?.formats.small?.url || companyLogo}
            alt="company logo"
            className="object-contain"
            height={100}
            width={100}
          />
        </div>
        <div className="flex w-full flex-col pl-4">
          <div className="flex flex-col py-2">
            <p className="text-lg font-extrabold">{jobOffer.title}</p>
            <p>
              {jobOffer.companyName}
              <span className="hidden md:inline"> &bull; </span>
              <span className="inline md:hidden">
                <br />
              </span>
              {jobOffer.location}
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-5">
            <div className="flex justify-between flex-col md:flex-row gap-1">
              <div className="flex flex-row gap-1">
                <div>
                  <BriefcaseBusiness className="h-5 w-5 lg:my-1" />
                </div>
                <div>
                  <p className="hidden md:block">Fields of work</p>
                  <p className="text-sm font-semibold">
                    {jobOffer.jobField ? jobOffer.jobField.fieldName : "-"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <div>
                <Clock className="h-5 w-5 lg:my-1" />
              </div>
              <div>
                <p className="hidden md:block">Working hours</p>
                <p className="text-sm font-semibold">{jobOffer.workingTime}</p>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <div>
                <CircleUserRound className="h-5 w-5 lg:my-1" />
              </div>
              <div>
                <p className="hidden md:block">Apply as</p>
                <p className="text-sm font-semibold">{jobOffer.target}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Ini div untuk see more*/}
      <div className="hidden lg:flex justify-between items-end">
        <p>
          Posted on {new Date(jobOffer.publishedAt).toLocaleDateString("de-DE")}
        </p>
        <p className="font-normal">Learn More &gt;&gt; </p>
      </div>
    </ContentCard>
  )
}
