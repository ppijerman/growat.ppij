import { StaticImageData } from "next/image"

type Event = {
  slug: string
  title: string
  shortDescription?: string
  description: string
  date: string
  location: string
  image?: StaticImageData
  href: string
  showOnNavbar: boolean
}

export const events: Event[] = [
  {
    slug: "aipse-workshop",
    title: "AIPSE Workshop",
    description: "AI stuff",
    date: "2022-01-01",
    location: "Online",
    image: undefined,
    href: "/",
    showOnNavbar: true,
  },
]
