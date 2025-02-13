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

interface RegistAIPSEProps {
  isVisible: boolean
}

const RegistAIPSE: React.FC<RegistAIPSEProps> = ({ isVisible }) => {
  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Card className="flex flex-col md:grid-cols-2 md:grid-rows-1 my-5">
        <CardHeader className="items-center">
          <CardTitle className="text-xl md:text-3xl">
            AIPSE Registration
          </CardTitle>
          
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-2 md:space-y-5">
          <p className="text-base md:text-2xl text-center leading-relaxed">
            Register to AIPSE here!
          </p>
          <Link href="https://ppij.org/AIPSEPPIJGenAI">
            <Button
              variant="secondary"
              className="md:text-2xl flex items-center text-ga-beige"
            >
              <div>Register here!</div>
              <ArrowRightIcon className="ml-2 h-5" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegistAIPSE
