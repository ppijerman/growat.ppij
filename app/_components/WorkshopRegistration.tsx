import React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface WorkshopRegistrationProps {
  isVisible: boolean
}

const WorkshopRegistration: React.FC<WorkshopRegistrationProps> = ({
  isVisible,
}) => {
  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Card className="flex flex-col md:grid-cols-2 md:grid-rows-1 my-5">
        <CardHeader className="items-center text-center ">
          <CardTitle className="text-xl md:text-2xl font-normal text-ga-green">
            Online Workshop:
          </CardTitle>
          <CardDescription className="text-xl font-bold md:text-3xl text-ga-dark">
            Developing GenAI Chatbot using LangChain: LLM and simple RAG
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-2 md:space-y-5">
          <div className="text-xl">22.02.2025 & 01.03.2025</div>
          <Link href="/events/genAI-workshop">
            <Button variant="secondary" className="space-x-px">
              <div>Details here!</div>
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default WorkshopRegistration
