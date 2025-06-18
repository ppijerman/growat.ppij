export type GrowatEvent = {
  id: string
  slug: string
  partnerLogos: ImageAsset[]
  title: string
  logo?: ImageAsset[]
  iconName: string
  description: string
  startDate: Date
  endDate?: Date
  location: string
  speakers: Speaker[]
  contents: Content[]
  linkButtons: LinkButton[]
}

export type ImageAsset = {
  imgUrl: string
  alt: string
  // Optional: width?: number; height?: number;
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
  image: ImageAsset
}

export type LinkButton = {
  url: string
  label: string
}
