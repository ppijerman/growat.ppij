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
    <div className="flex flex-col lg:flex-row w-full">
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
            <JobDetail jobOffer={jobOffer} />
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
            <JobDetail jobOffer={jobOffer} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

function JobOfferCardContent({ jobOffer }: JobOfferCardProps) {
  return (
    <ContentCard
      borderEffect={true}
      hoverable={true}
      color="ga-green"
      className="pb-1 pt-1.5 cursor-pointer"
    >
      <div className="flex flex-col flex-wrap grow pt-2 pb-4 bg-ga-light">
        <div className="flex flex-row gap-3">
          {/* Company Logo */}
          <div className="shrink-0 w-[50px] h-[50px] md:w-[100px] md:h-[100px] relative self-start">
            <Image
              src={jobOffer.companyLogo?.formats.small?.url || companyLogo}
              alt="company logo"
              className="object-contain aspect-square bg-ga-beige rounded-lg overflow-hidden"
              fill
            />
          </div>
          {/* Details */}
          <div className="text-xs flex w-full flex-col sm:pl-4 space-y-1 justify-between">
            <div className="flex flex-col">
              <p className="sm:text-lg font-extrabold text-wrap">
                {jobOffer.title}
              </p>
              <p>
                {jobOffer.companyName}
                <span className="hidden sm:inline"> &bull; </span>
                <span className="inline sm:hidden">
                  <br />
                </span>
                {jobOffer.location}
              </p>
            </div>
            <div className="flex flex-wrap justify-between text-xs sm:text-sm items-center space-x-2">
              <div className="flex flex-row gap-1 justify-center space-x-1">
                <BriefcaseBusiness className="h-[2em] w-5 lg:my-1" />
                <div>
                  <p>Fields of work</p>
                  <p className="font-semibold">
                    {jobOffer.jobField ? jobOffer.jobField.fieldName : "-"}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-1 justify-center space-x-1">
                <div>
                  <Clock className="h-[2em] w-5 lg:my-1" />
                </div>
                <div>
                  <p>Working hours</p>
                  <p className="font-semibold">{jobOffer.workingTime}</p>
                </div>
              </div>
              <div className="flex flex-row gap-1 justify-center space-x-1">
                <div>
                  <CircleUserRound className="h-[2em] w-5 lg:my-1" />
                </div>
                <div>
                  <p>Apply as</p>
                  <p className="font-semibold">{jobOffer.target}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Ini div untuk see more*/}
      <div className="flex justify-between items-end text-sm md:text-base">
        <p>
          Posted on {new Date(jobOffer.publishedAt).toLocaleDateString("en-GB")}
        </p>
        <p className="font-normal">Learn More &gt;&gt;</p>
      </div>
    </ContentCard>
  )
}
