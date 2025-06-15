type EventLogo = {
    src: string
    alt: string
  }
  
  type EventSpeaker = {
    name: string
    role: string
    description: string
    socmed: string
    imgUrl: string
  }
  
  type EventInfo = {
    startDate: Date
    endDate?: Date
    time: string
    location: string
    note: string
  }
  
  type Event = {
    id: string
    slug: string
    logos: EventLogo[]
    title: string
    description: string
    eventInfo: EventInfo
    contents: Content[]
    speakers: EventSpeaker[]
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


//placeholder to satisfy compiler
  export const placeholderEvent: Event = {
    id: "placeholder-id",
    slug: "placeholder-slug",
    logos: [
      { src: "/placeholder-logo.png", alt: "Placeholder logo" }
    ],
    title: "Placeholder Event Title",
    description: "This is a placeholder description for the event.",
    eventInfo: {
      startDate: new Date(),
      time: "00:00 - 00:00",
      location: "Placeholder Location",
      note: "This is a placeholder note."
    },
    contents: [
      {
        text: "This is placeholder content.",
        imageUrl: "/placeholder-image.png",
        iconPointers: [
          {
            icon: "📌",
            text: "Placeholder icon pointer text"
          }
        ]
      }
    ],
    speakers: [
      {
        name: "Jane Doe",
        role: "Speaker",
        description: "Placeholder speaker description",
        socmed: "@placeholder",
        imgUrl: "/placeholder-speaker.png"
      }
    ],
    link: "https://placeholder.link"
  }
  

export const summitContent: Event = {
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
  contents: [
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

export const pumaVisit: Event = {
  id: "puma-2025",
  slug: "puma-workshop",
  logos: [
    { src: "/assets/PPIJ_white.png", alt: "logo PPIJ" },
    { src: "/assets/growat_white.png", alt: "logo growat" },
    { src: "/assets/PPIF_white.png", alt: "logo PPI" },
  ],
  title: "Explore PUMA HQ – 2025 Company Visit",
  description: "A guided tour of PUMA HQ, offering students firsthand insights from industry professionals, networking opportunities, and an inside look at the company’s operations and culture.",
  eventInfo: {
    startDate: new Date("2025-07-04T00:00:00Z"),
    time: "All Day",
    location: "PUMA HQ, Germany",
    note: "Register now to secure your spot!"
  },
  contents: [],
  speakers: [],
  link: "#register"
}