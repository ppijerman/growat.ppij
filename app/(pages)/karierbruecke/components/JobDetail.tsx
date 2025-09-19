import Image from "next/image"
import companyLogo from "@/public/assets/logogrowat.png"
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
import { JobOffer } from "@/lib/models/JobOffer"
import MarkdownContent from "@/components/MarkdownContent/MarkdownContent"
import JobKeyword from "./JobKeyword"

type JobDetailProps = {
  jobOffer: JobOffer
}

export default async function JobDetail({ jobOffer }: JobDetailProps) {
  return (
    <div className="text-xs flex flex-col gap-1">
      {/* Upper box */}
      <div className="flex flex-col rounded-lg border-lg border-ga-green border-2 p-5 gap-5">
        {/* Heading image and title */}
        <div className="flex flex-row gap-3">
          <div className=" flex aspect-square h-[10vh]">
            <Image
              src={jobOffer.companyLogo?.formats?.small?.url || companyLogo}
              alt="company logo"
              className="object-contain aspect-square bg-ga-beige rounded-lg overflow-hidden"
            />
          </div>
          <p className=" w-full font-bold h-auto text-lg self-center">
            {jobOffer.title}
          </p>
        </div>
        {/* Job details */}
        <div className="flex flex-row flex-wrap space-y-5">
          <div className="flex flex-row gap-2 basis-1/2 md:basis-1/3">
            <Building className="h-5 w-5" />
            <div>
              <p>Company</p>
              <p className="font-semibold">{jobOffer.companyName}</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 basis-1/2 md:basis-1/3">
            <MapPin className="h-5 w-5" />
            <div>
              <p>Location</p>
              <p className="font-semibold">{jobOffer.location}</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 basis-1/2 md:basis-1/3">
            <CircleUserRound className="h-5 w-5" />
            <div>
              <p>Apply as</p>
              <p className="font-semibold">{jobOffer.target}</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 basis-1/2 md:basis-1/3">
            <BriefcaseBusiness className="h-5 w-5" />
            <div>
              <p>Field of work</p>
              <p className="font-semibold">{jobOffer.jobField?.fieldName}</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 basis-1/2 md:basis-1/3">
            <Calendar className="h-5 w-5" />
            <div>
              <p>Starting date</p>
              <p className="font-semibold">{jobOffer.starting}</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 basis-1/2 md:basis-1/3">
            <Clock className="h-5 w-5" />
            <div>
              <p>Working time</p>
              <p className="font-semibold">{jobOffer.workingTime}</p>
            </div>
          </div>
        </div>
        {/* Keywords/labels */}
        <div className="flex flex-row flex-wrap gap-2">
          {jobOffer.labels &&
            jobOffer.labels.length > 0 &&
            jobOffer.labels.map((label, index) => (
              <JobKeyword key={index}>{label.label}</JobKeyword>
            ))}
        </div>
        <div className="p-1 flex flex-row justify-between align-bottom">
          <Button
            className="bg-ga-green text-white font-semibold text-sm px-6 rounded-lg gap-2 self-end"
            asChild
          >
            <Link href={jobOffer.link}>
              <p>Apply now</p> <SquareArrowOutUpRight className="h-5 w-5" />
            </Link>
          </Button>

          <div className="flex flex-col text-xs text-right items-end">
            <p>
              Posted on{" "}
              {new Date(jobOffer.publishedAt).toLocaleDateString("en-GB")}
            </p>
            <p className="font-semibold text-ellipsis">
              JOB-ID: {jobOffer.documentId}
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg border-lg border-2 border-ga-green border-solid p-4 gap-5">
        <p className="text-lg font-semibold">Your tasks</p>
        <MarkdownContent
          className="prose-sm prose-h1:text-sm prose-h1:font-semibold prose-h2:text-sm prose-h3:text-sm prose-h4:text-sm prose-h5:text-sm prose-h6:text-sm prose-a:text-ga-blue prose-a:hover:underline prose-ul:list-disc prose-ol:list-decimal"
          markdown={jobOffer.tasks}
        />
        <p className="text-lg font-semibold">Your profile</p>
        <MarkdownContent markdown={jobOffer.profile} />
        <p className="font-semibold text-lg">
          Contact & additional information
        </p>
        <MarkdownContent
          className="prose-sm prose-h1:text-sm prose-h1:font-semibold prose-h2:text-sm prose-h3:text-sm prose-h4:text-sm prose-h5:text-sm prose-h6:text-sm prose-a:text-ga-blue prose-a:hover:underline prose-ul:list-disc prose-ol:list-decimal"
          markdown={jobOffer.additionalInformation}
        />
        <Button
          className="bg-ga-green text-white font-semibold text-sm px-6 rounded-lg gap-2 self-end"
          asChild
        >
          <Link href={jobOffer.link}>
            <p>Apply now</p> <SquareArrowOutUpRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
