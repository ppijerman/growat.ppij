import { ImageMedia } from "./ImageMedia"

export type GrowatEvent = {
  id: string
  documentId: string
  slug: string
  mainPartnerLogo?: ImageMedia
  partnerLogos?: ImageMedia[]
  title: string
  logo?: ImageMedia
  iconName: string
  description: string
  startDate: Date
  endDate?: Date
  location: string
  speakers?: Speaker[]
  contents?: Content[]
  linkButtons?: LinkButton[]
  heroBackground?: ImageMedia
  eventType: EventType
  hideDate?: boolean
}

export enum EventType {
  Workshop = "workshop",
  Webinar = "webinar",
  Offline = "offline",
  Other = "other",
}

export type RichTextContent = {
  __component: "richtext"
  text: string
  image?: string
}

export type IconPointersContent = {
  __component: "event-content.bullets-section"
  iconPointers: IconPointer[]
}

type EventTimetableEntry = {
  time: string
  agenda: string
  description?: string
}

export type EventAgendaTimetableContent = {
  __component: "event-content.event-timeline"
  timezone: string
  agendas: EventTimetableEntry[]
}

type Content =
  | RichTextContent
  | IconPointersContent
  | EventAgendaTimetableContent

type IconPointer = {
  icon: string
  text: string
}

export enum SocialPlatform {
  Twitter = "twitter",
  Facebook = "facebook",
  Instagram = "instagram",
  LinkedIn = "linkedin",
  Youtube = "youtube",
  Github = "github",
  // Add or adjust as needed
}

export type SocialProfile = {
  platform: SocialPlatform
  url: string
}

export type Speaker = {
  name: string
  role: string
  description: string
  socialProfiles: SocialProfile[]
  image: ImageMedia
}

export type LinkButton = {
  url: string
  label: string
}
