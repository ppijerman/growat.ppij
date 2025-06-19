import { GrowatEvent, ImageFormat, ImageMedia } from "../models/growat-event"
import { fetchStrapiAPI } from "../utils/strapi-client"

export interface IGrowatEventRepository {
  getAllEvents(): Promise<GrowatEvent[]>
  getEventBySlug(slug: string): Promise<GrowatEvent | null>
  getEventById(id: string): Promise<GrowatEvent | null>
}

export class GrowatEventRepository implements IGrowatEventRepository {
  async getAllEvents(): Promise<GrowatEvent[]> {
    const response = await fetchStrapiAPI<GrowatEvent[]>(
      "growat-events?sort=startDate:asc"
    )

    return response.map(mapGrowatEvent) as GrowatEvent[]
  }

  async getEventBySlug(slug: string): Promise<GrowatEvent | null> {
    const response = await fetchStrapiAPI<GrowatEvent[]>(
      `growat-events?filters[slug][$eq]=${slug}&sort=startDate:asc&populate=*`
    )

    if (response.length === 0) {
      return null
    }

    return mapGrowatEvent(response[0]) as GrowatEvent
  }

  async getEventById(id: string): Promise<GrowatEvent | null> {
    const response = await fetchStrapiAPI<GrowatEvent>(
      `growat-event/${id}?populate=*`
    )

    if (!response) {
      return null
    }

    return mapGrowatEvent(response) as GrowatEvent
  }
}

function mapGrowatEvent(event: GrowatEvent): GrowatEvent {
  let logo = event.logo
  if (logo) {
    logo = mapImageMedia(logo)
  }

  let mainPartnerLogo = event.mainPartnerLogo
  if (mainPartnerLogo) {
    mainPartnerLogo = mapImageMedia(mainPartnerLogo)
  }

  let partnerLogos: ImageMedia[] = []

  if (event.partnerLogos && Array.isArray(event.partnerLogos)) {
    partnerLogos = event.partnerLogos.map((logo) => {
      return mapImageMedia(logo)
    })
  }

  let heroBackground = event.heroBackground
  if (heroBackground) {
    heroBackground = mapImageMedia(heroBackground)
  }

  return {
    ...event,
    logo: logo,
    mainPartnerLogo: mainPartnerLogo,
    partnerLogos: partnerLogos,
    heroBackground: heroBackground,
    startDate: new Date(event.startDate),
    endDate: event.endDate ? new Date(event.endDate) : undefined,
  }
}

function mapImageMedia(image: ImageMedia): ImageMedia {
  return {
    ...image,
    url: `${process.env.BACKEND_API_URL}${image.url}`,
    formats: {
      large: mapImageFormat(image.formats.large),
      medium: mapImageFormat(image.formats.medium),
      small: mapImageFormat(image.formats.small),
      thumbnail: mapImageFormat(image.formats.thumbnail),
    },
  }
}

function mapImageFormat(format: ImageFormat): ImageFormat {
  return {
    ...format,
    url: `${process.env.BACKEND_API_URL}${format.url}`,
  }
}
