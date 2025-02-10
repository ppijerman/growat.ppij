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
import { Button } from "@/components/ui/button"

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
      <Card className="flex flex-col md:grid-cols-2 md:grid-rows-1 my-5">
        <CardHeader className="items-center">
          <CardTitle className="text-xl md:text-3xl">
            Step Up Mentorship 3.0 🚀
          </CardTitle>
          <CardDescription className="text-xl md:text-2xl">
            Coming soon!
          </CardDescription>
        </CardHeader>
        <CardContent className="items-center flex-col justify-items-center space-y-2 md:space-y-5">
          <p className="text-base md:text-2xl text-center leading-relaxed">
            Take part in this survey to help us enhance your experience!
          </p>
          <Link href="https://ppij.org/MentorshipSurvey">
            <Button
              variant="secondary"
              className="md:text-2xl flex items-center text-ga-beige"
            >
              <div>Participate here</div>
              <ArrowRightIcon className="ml-2 h-5" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default MentorshipSurvey
