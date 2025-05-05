import logoPPIJ from "@/public/assets/logoppij.png"
import logoGrowAt from "@/public/assets/logogrowat.png"
import logoIPA from "@/public/assets/IPA_LogoBlack.png"
import fotoNarsum_1 from "@/public/assets/stepUpMentors/summitPhoto/maslaSpeaker.jpg"
import fotoMod from "@/public/assets/fotoModerator.jpg"

export const summitContent = {
  logos: [
    { src: logoGrowAt, alt: "logo growat" },
    { src: logoPPIJ, alt: "logo PPIJ" },
    { src: logoIPA, alt: "logo IPA" },
  ],
  title:
    "Summit #1: AI as Your Career Co-Pilot: Strategies for Students and Professionals",
  date: "19 April",
  description:
    "Bergabunglah bersama kami dalam sesi pembukaan SUM 3.0, di mana kami akan mengeksplorasi cara mencari dan melamar pekerjaan secara efektif menggunakan AI. Topik-topik yang akan dibahas mencakupi pembuatan CV dan menulis surat lamaran yang menarik serta persiapan interview menggunakan alat bantu AI dan prompt engineering.",
  eventInfo: {
    date: "🗓️ 19 April 2025",
    time: "⏰ 13:00 s.d. 15:55 CET | 18:00 s.d. 20:55 WIB",
    location: "📍 Zoom Meeting",
    note: "FREE Entry, no registration required.",
  },
  learningPoints: [
    "Bagaimana AI dapat membantu dalam proses melamar kerja:",
    "1.1. Dalam pembuatan CV dan cover letter?",
    "1.2. Dalam persiapan wawancara kerja?",
    "1.3. AI Tools yang bisa digunakan untuk membuat CV dan cover letter dan bagaimana cara untuk prompt",
    "2. Apa tantangan dalam penggunaan AI untuk melamar kerja dan bagaimana cara mengatasinya?",
    "3. Apa pertimbangan etika dalam penggunaan AI untuk aplikasi kerja?",
  ],
  speakers: [
    {
      name: "Malsa Nirmala Rusli",
      role: "Speaker",
      description: "Social Media Strategist & Illustrator at e.Consult AG",
      socmed: "IG: malsanirmala",
      img: fotoNarsum_1,
    },
    {
      name: "Muhammad Rafi Aziz Dzakwan",
      role: "Moderator",
      description:
        "Bachelor Student | HAW Hamburg Logistik/Technical Business Administration",
      socmed: "IG: razizdz",
      img: fotoMod,
    },
  ],
  ctaLink: "https://ppij.org/SUM",
};
