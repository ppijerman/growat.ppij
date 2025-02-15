import React from "react"
import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
      <Card className="flex flex-col md:flex-0 md:grid md:grid-cols-2 md:grid-rows-1 md:justify-center md:py-5 my-5 p-3 bg-ga-light">
        <CardHeader className="flex flex-col justify-center items-center p-2">
          <CardTitle className="text-2xl md:text-3xl text-center m-0">
            Step Up Mentorship 3.0 🚀
          </CardTitle>
          <CardDescription className="text-xl md:text-2xl m-0">
            Coming soon!
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-0 flex flex-col justify-center items-center gap-2">
          <p className="text-base md:text-2xl text-center mb-0">
            Take part in this survey to help us enhance your experience!
          </p>
          <Button variant="secondary" className="" asChild>
            <Link
              href="https://ppij.org/MentorshipSurvey"
              className="space-x-px"
            >
              <div>Participate here</div>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default MentorshipSurvey
