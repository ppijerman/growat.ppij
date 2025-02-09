import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface MentorshipSurveyProps {
  isVisible: boolean;
}

const MentorshipSurvey: React.FC<MentorshipSurveyProps> = ({ isVisible }) => {
  return (
    <section
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-white text-secondary h-fit w-screen">
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
          {/* Left side - header */}
          <div className="flex flex-col items-start justify-center px-4 py-20">
            <h1 className="text-4xl text-black md:text-5xl lg:text-6xl font-bold text-left">
              Mentorship Survey
            </h1>
          </div>

          {/* Right side - content & pill button */}
          <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
            <h3 className="py-5 text-black text-lg md:text-2xl lg:text-3xl">
              GROWAT MENTORSHIP
            </h3>
            <p className="text-base md:text-xl text-black text-justify leading-relaxed max-w-2xl">
              <span className="font-bold">Mentorship</span>, Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>

            {/* Pill Button */}
            <div className="mt-6">
              <Link href="#" className="group">
                <div className="flex items-center gap-4 bg-black text-white px-10 py-4 rounded-full text-xl md:text-2xl lg:text-3xl font-bold transition duration-300 shadow-lg hover:bg-primary2 hover:ring-2 hover:ring-primary2">
                  Participate here!
                  <ArrowRightIcon className="w-8 h-8" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSurvey;
