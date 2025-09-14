import GrowatIcon from "./GrowatIcon"
import { BulletSectionContent, BulletPoint } from "@/lib/models/GrowatEvent"

type Props = {
  bulletSection: BulletSectionContent
}

function BulletPointDiv({ bulletPoint }: { bulletPoint: BulletPoint }) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-40 sm:w-50">
      <GrowatIcon
        name={bulletPoint.icon}
        className="w-15 h-15 mb-4 sm:w-20 sm:h-20 sm:mb-6"
      />
      <p className="text-base md:text-xl leading-tight">{bulletPoint.text}</p>
    </div>
  )
}

export default function ResponsiveGrid({ bulletSection }: Props) {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-white px-10 lg:px-[5%] mx-auto">
      <div className="w-full text-2xl sm:text-3xl mb-7 font-bold text-center md:text-left">
        {bulletSection.title}
      </div>
      <div className="flex flex-wrap w-full justify-center space-y-5">
        {bulletSection.bulletPoints.map((bulletPoint, index) => (
          <div
            key={index}
            className={`basis-1/2 sm:basis-1/3 flex justify-center `}
          >
            <BulletPointDiv bulletPoint={bulletPoint} />
          </div>
        ))}
      </div>
    </div>
  )
}
