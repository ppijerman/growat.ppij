type SummitLogo = {
  src: string
  alt: string
}

type SummitSpeaker = {
  name: string
  role: string
  description: string
  socmed: string
  imgUrl: string
}

type SummitEventInfo = {
  startDate: Date
  endDate?: Date
  time: string
  location: string
  note: string
}

type SummitContent = {
  id: string
  slug: string
  logos: SummitLogo[]
  title: string
  description: string
  eventInfo: SummitEventInfo
  content: Content[]
  speakers: SummitSpeaker[]
  link: string
}

type IconPointers = {
  icon: string
  text: string
}

type Content = {
  text?:string
  imageUrl?:string
  iconPointers?:IconPointers[]
}

export const summitContent: SummitContent = {
  id: "testid",
  slug: "first-summit",
  logos: [
    { src: "/assets/logogrowat.png", alt: "logo growat" },
    { src: "/assets/logoppij.png", alt: "logo PPIJ" },
    { src: "/assets/IPA_LogoBlack.png", alt: "logo IPA" },
  ],
  title:
    "Summit #1: AI as Your Career Co-Pilot: Strategies for Students and Professionals",
  description:
    "Bergabunglah bersama kami dalam sesi pembukaan SUM 3.0, di mana kami akan mengeksplorasi cara mencari dan melamar pekerjaan secara efektif menggunakan AI. Topik-topik yang akan dibahas mencakupi pembuatan CV dan menulis surat lamaran yang menarik serta persiapan interview menggunakan alat bantu AI dan prompt engineering.",
  eventInfo: {
    startDate: new Date("2025-04-19T11:00:00Z"),
    time: "⏰ 13:00 s.d. 15:55 CET | 18:00 s.d. 20:55 WIB",
    location: "📍 Zoom Meeting",
    note: "FREE Entry, no registration required.",
  },
  content: [
    {
      text: "Bagaimana AI dapat membantu dalam proses melamar kerja:"
    },
    {
      text: "1.1. Dalam pembuatan CV dan cover letter?"
    },
    {
      text: "1.2. Dalam persiapan wawancara kerja?"
    },
    {
      text: "1.3. AI Tools yang bisa digunakan untuk membuat CV dan cover letter dan bagaimana cara untuk prompt"
    },
    {
      text: "2. Apa tantangan dalam penggunaan AI untuk melamar kerja dan bagaimana cara mengatasinya?"
    },
    {
      text: "3. Apa pertimbangan etika dalam penggunaan AI untuk aplikasi kerja?"
    }
  ],  
  speakers: [
    {
      name: "Malsa Nirmala Rusli",
      role: "Speaker",
      description: "Social Media Strategist & Illustrator at e.Consult AG",
      socmed: "IG: malsanirmala",
      imgUrl: "/assets/stepUpMentors/summitPhoto/maslaSpeaker.jpg",
    },
    {
      name: "Muhammad Rafi Aziz Dzakwan",
      role: "Moderator",
      description:
        "Bachelor Student | HAW Hamburg Logistik/Technical Business Administration",
      socmed: "IG: razizdz",
      imgUrl: "/assets/fotoModerator.jpg",
    },
  ],
  link: "https://ppij.org/SUM",
}
