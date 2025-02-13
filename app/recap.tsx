import React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface RecapProps {
  isVisible: boolean
}

const Recap: React.FC<RecapProps> = ({ isVisible }) => {
  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Card className="flex flex-col md:grid-cols-2 md:grid-rows-1 my-5">
        <CardHeader className="items-center">
          <CardTitle className="text-xl md:text-3xl">
            Check out our Youtube page!
          </CardTitle>
    
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-2 md:space-y-5">
        <div className="w-full flex justify-center">
            <iframe
                className="rounded-lg w-full md:w-[560px] h-[315px]"
                src="https://www.youtube.com/embed/sjEi3UiH-YA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default Recap
