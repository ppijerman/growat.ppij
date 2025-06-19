export type GrowatEvent = {
  id: string
  slug: string
  mainPartnerLogo: ImageMedia
  partnerLogos: ImageMedia[]
  title: string
  logo?: ImageMedia
  iconName: string
  description: string
  startDate: Date
  endDate?: Date
  location: string
  speakers: Speaker[]
  contents: Content[]
  linkButtons: LinkButton[]
  heroBackground: ImageMedia
}

export type ImageFormat = {
  url: string
  name: string
  width: number
  height: number
}

type ImageFormats = {
  large: ImageFormat
  medium: ImageFormat
  small: ImageFormat
  thumbnail: ImageFormat
}

export type ImageMedia = {
  url: string
  name: string
  width: number
  height: number
  formats: ImageFormats
}

type RichTextContent = {
  type: "richtext"
  text: string
}

type RichTextWithImageContent = {
  type: "richtext-image"
  text: string
  imageUrl: string
}

type IconPointersContent = {
  type: "iconpointers"
  iconPointers: IconPointer[]
}

type Content = RichTextContent | RichTextWithImageContent | IconPointersContent

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
