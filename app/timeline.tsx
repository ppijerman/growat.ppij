"use client"

import React, { useEffect, useState } from "react"

const timelineData = [
  { date: "February 2025", event: "IT Online Workshop" },
  { date: "March 2025", event: "1st Inspiring Webinar" },
  { date: "April-May 2025", event: "Step Up Mentorship 3.0" },
  { date: "June 2025", event: "SEA Career Fair" },
  { date: "June 2025", event: "Indonesian Networking Night" },
  { date: "June 2025", event: "Company Visit" },
  { date: "August 2025", event: "2nd Power-Packed Webinar" },
]

interface TimelineProps {
  isVisible: boolean
}

const Timeline: React.FC<TimelineProps> = ({ isVisible }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    if (isVisible) {
      timelineData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, index])
        }, 0)
      })
    } else {
      setVisibleItems([])
    }
  }, [isVisible])

  return (
    <div
      id="event-timeline"
      className={`container mx-auto pt-20 p-6 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12">What to Expect</h2>
      <div className="relative">
        <div className="border-l-4 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } ${
              visibleItems.includes(index) ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-center bg-white rounded-lg shadow-md">
              <h3 className="mb-1 text-xl font-semibold">{item.event}</h3>
              <p className="text-gray-700">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
