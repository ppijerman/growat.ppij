import { StaticImageData } from "next/image"
import {
  BrainCircuit,
  Building2,
  Globe,
  Rocket,
  Sparkles,
  Users,
  BatteryCharging,
} from "lucide-react"

type Event = {
  slug: string
  title: string
  shortDescription?: string
  description: string
  startDate: Date
  endDate?: Date
  location: string
  image?: StaticImageData
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>
  showOnNavbar: boolean
}

export const events: Event[] = [
  {
    slug: "genAI-workshop",
    title: "GenAI Workshop",
    description: "",
    startDate: new Date("2025-03-01"),
    location: "Online",
    image: undefined,
    icon: <BrainCircuit />,
    showOnNavbar: true,
  },
  {
    slug: "entrepreneurship-webinar",
    title: "Entrepreneurship Webinar",
    description: "",
    startDate: new Date("2025-03-15"),
    location: "Online",
    image: undefined,
    icon: <Sparkles />,
    showOnNavbar: true,
  },
  {
    slug: "step-up-mentorship",
    title: "Step Up Mentorship 3.0",
    description: "",
    startDate: new Date("2025-04-19"),
    endDate: new Date("2025-05-10"),
    location: "Online",
    image: undefined,
    icon: <Rocket />,
    showOnNavbar: true,
  },{
    slug: "puma-workshop",
    title: "Puma Company Visit",
    description: "",
    startDate: new Date("2025-07-04"),
    location: "Online",
    image: undefined,
    icon: <Rocket />,
    showOnNavbar: true,
  },
  {
    slug: "sea-career-fair",
    title: "SEA Career Fair",
    description: "",
    startDate: new Date("2025-06-01"),
    location: "TBA",
    image: undefined,
    icon: <Globe />,
    showOnNavbar: false,
  },
  {
    slug: "Indonesian Networking Night",
    title: "Indonesian Networking Night",
    description: "",
    startDate: new Date("2025-06-01"),
    location: "TBA",
    image: undefined,
    icon: <Users />,
    showOnNavbar: false,
  },
  {
    slug: "company-visit",
    title: "Company Visit",
    description: "",
    startDate: new Date("2025-06-01"),
    location: "TBA",
    image: undefined,
    icon: <Building2 />,
    showOnNavbar: false,
  },
  {
    slug: "webinar-2",
    title: "Power-Packed Webinar",
    description: "",
    startDate: new Date("2025-06-01"),
    location: "TBA",
    image: undefined,
    icon: <BatteryCharging />,
    showOnNavbar: false,
  },
]
