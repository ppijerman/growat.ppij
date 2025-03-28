"use client"
import Image from "next/image"
import teamworkPhoto from "@/public/assets/teamwork.jpg"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import React, { ReactElement } from "react"

type CardData = {
  title: string
  desc: string
  icon: ReactElement
}

import {
  UserRound,
  UsersRound,
  Laptop,
  GraduationCap,
  Lightbulb,
  Mic2Icon,
} from "lucide-react"

const iconClasses =
  "w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px]"

const sessionData: CardData[] = [
  {
    title: "Group Mentoring Session",
    desc: "Sesi mentoring kelompok dengan maksimal 5 mentee per mentor, memberikan bimbingan yang lebih personal.",
    icon: <UserRound className={iconClasses} />,
  },
  {
    title: "1-on-1 Mentoring Sessions",
    desc: "Mentee dapat membuat janji untuk sesi pribadi dengan mentor mereka atau mentor lain dalam program ini.",
    icon: <UsersRound className={iconClasses} />,
  },
  {
    title: "Webinar-like Summits",
    desc: "Diadakan setiap hari Sabtu, membahas tema-tema penting terkait karier.",
    icon: <Laptop className={iconClasses} />,
  },
]

const involveData: CardData[] = [
  {
    title: "Mentee",
    desc: "Orang Indonesia yang membutuhkan support dan guidance dalam mencari pekerjaan di Jerman.",
    icon: <GraduationCap className={iconClasses} />,
  },
  {
    title: "Mentor",
    desc: "Profesional Indonesia yang bekerja di berbagai industri dan siap berbagi knowledge dan experience mereka.",
    icon: <Lightbulb className={iconClasses} />,
  },
  {
    title: "Summit Speaker",
    desc: "Pembicara dengan latar belakang kuat di bidang career building, yang berbagi wawasan berharga selama summit.",
    icon: <Mic2Icon className={iconClasses} />,
  },
]

export default function EventInfo() {
  return (
    <main>
      <div className="md:flex lg:col-2 lg:row-1">
        <div className="lg:w-1/2" style={{ position: "relative" }}>
          <Image
            src={teamworkPhoto}
            alt="photo"
            fill={true}
            style={{ objectFit: "cover" }}
            placeholder="blur"
          />
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="flex bg-gradient-to-r from-ga-blue to-[#a2d3bc] pl-3 sm:p-3 h-1/4 items-center justify-center">
            <h1 className="text-wrap text-3xl lg:text-5xl text-ga-light font-bold py-3">
              What is Step Up Mentorship 3.0?
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center p-5 bg-ga-light h-3/4">
            <p className="leading-7 lg:pt-5 lg:mb-5 sm:text-lg lg:text-2xl">
              <b>Step Up Mentorship 3.0</b> adalah program <i>mentoring</i>{" "}
              intensif GRATIS yang berlangsung selama 3 minggu, yang mencakup
              berbagai kegiatan, seperti <i>summit</i>, sesi{" "}
              <i>group mentoring</i>, dan sesi <i>one-on-one</i> dengan
              profesional dari berbagai industri.
            </p>
            <p className="leading-7 sm:text-lg lg:text-2xl">
              <b>Tujuan kami</b> <br />
              Membantu dan mendampingi mahasiswa Indonesia di Jerman untuk
              memperoleh <b>wawasan</b>, sehingga dapat <b>berkembang</b>{" "}
              menjadi <b>profesional yang percaya diri</b> dan{" "}
              <b>siap menghadapi dunia kerja</b>.
            </p>
          </div>
        </div>
      </div>

      {/* what do we offer */}
      <div>
        <div className="bg-ga-light-green p-5">
          <h1 className="text-3xl leading-6 font-bold lg:text-5xl lg:leading-11 py-3">
            What do we offer?
          </h1>
        </div>
        {/* Card */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:gap-4 l:gap-8 xl:gap-14 md:py-5 md:px-14 l:px-22 xl:px-30 md:bg-ga-light">
          {sessionData.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col sm:w-full md:w-1/3 bg-gradient-to-tr from-ga-blue from-40% to-[#a2d3bc] h-fit md:h-96 border-0 rounded-none md:rounded-2xl"
            >
              <CardHeader className="items-center text-center text-ga-light">
                <CardContent>{item.icon}</CardContent>
                <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="self-center text-justify text-md sm:text-lg lg:text-xl px-10 md:px-4 lg:px-5 pb-4 text-ga-light">
                {item.desc}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>

      {/* who will be involved */}

      <div className="bg-ga-green p-5 pt-10">
        <h1 className="text-3xl leading-6 font-bold text-ga-light lg:text-5xl lg:leading-11">
          Who will be involved?
        </h1>
        {/* Card */}
        <div className="flex flex-wrap md:flex-nowrap items-start justify-center md:gap-4 l:gap-8 xl:gap-14 md:py-5 md:px-14 l:px-22 xl:px-30 bg-ga-green">
          {involveData.map((item, index) => (
            <Card
              key={index}
              className="flex-col sm:w-full md:w-1/3 bg-ga-green border-0 shadow-none rounded-none md:rounded-2xl"
            >
              <CardHeader className="items-center text-center text-ga-light">
                <CardContent>{item.icon}</CardContent>
                <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="self-center text-center text-md sm:text-lg lg:text-xl px-10 md:px-4 lg:px-5 text-ga-light">
                {item.desc}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
