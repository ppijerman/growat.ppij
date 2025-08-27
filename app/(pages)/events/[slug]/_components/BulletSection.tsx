"use client";

import React, { useState, useEffect } from "react";
import { Globe, Camera, Code, Cpu, Cloud, Shield } from "lucide-react";

const bulletPoints = [
  {
    icon: Globe,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Camera,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Code,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Cpu,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Cloud,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Shield,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

type BulletPointData = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
};

const BulletPoint: React.FC<{ bulletPoint: BulletPointData }> = ({
  bulletPoint,
}) => (
  <div className="flex flex-col items-center justify-center text-center flex-shrink-0 w-40 md:w-50">
    <bulletPoint.icon className="w-15 h-15 mb-4 md:w-20 md:h-20 md:mb-6" />
    <p className="text-lg md:text-xl leading-tight">{bulletPoint.text}</p>
  </div>
);

type ResponsiveGridProps = {
  bulletPoints: BulletPointData[];
};

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ bulletPoints }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const validatedFeatures = bulletPoints.slice(0, 6);
  if (validatedFeatures.length < 2) {
    console.warn("ResponsiveGrid requires at least 2 features");
    return null;
  }

  const chunkArray = (
    array: BulletPointData[],
    chunkSize: number
  ): BulletPointData[][] => {
    const chunks: BulletPointData[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const itemsPerRow = isMobile ? 2 : 3;
  const rows = chunkArray(validatedFeatures, itemsPerRow);
  const gap = isMobile ? "gap-5" : "gap-10";

  return (
    <div className="flex w-full items-center justify-center bg-white px-10 lg:px-[5%]">
      <div className={`flex flex-col ${gap}`}>
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className={`flex justify-center ${gap}`}>
            {row.map((bulletPoint, index) => (
              <BulletPoint
                key={`${rowIndex}-${index}`}
                bulletPoint={bulletPoint}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGrid;
export { bulletPoints };
