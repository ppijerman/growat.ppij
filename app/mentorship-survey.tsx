import React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"

interface MentorshipSurveyProps {
  isVisible: boolean
}

const MentorshipSurvey: React.FC<MentorshipSurveyProps> = ({ isVisible }) => {
  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Card className="mx-[5%] grid grid-cols-2 items-center justify-items-center p-4 my-10 h-60">
        <CardHeader className="items-center">
          <CardTitle className="text-2xl">Step Up Mentorship 3.0 🚀</CardTitle>
          <CardDescription className="text-xl">Coming soon!</CardDescription>
        </CardHeader>
        <CardContent className="items-center flex-col justify-items-center space-y-4">
          <p className="text-base md:text-2xl text-justify leading-relaxed">
            Take part in this survey to help us enhance your experience!
          </p>
          <Link
            href="#"
            className={`${buttonVariants({
              variant: "secondary",
              size: "lg",
            })}`}
          >
            Participate here
            <ArrowRightIcon className="w-8 h-8" />
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default MentorshipSurvey
