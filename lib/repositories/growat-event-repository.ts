import { GrowatEvent, ImageFormat, ImageMedia } from "../models/growat-event"
import { fetchStrapiAPI } from "../utils/strapi-client"

export interface IGrowatEventRepository {
  getAllEvents(): Promise<GrowatEvent[]>
  getEventBySlug(
    slug: string,
    populateQuery: string
  ): Promise<GrowatEvent | null>
  getEventById(
    documentId: string,
    populateQuery: string
  ): Promise<GrowatEvent | null>
  populateContent(event: GrowatEvent): Promise<GrowatEvent>
}

export class GrowatEventRepository implements IGrowatEventRepository {
  async getAllEvents(): Promise<GrowatEvent[]> {
    const response = await fetchStrapiAPI<GrowatEvent[]>(
      "growat-events?sort=startDate:asc"
    )

    return response.map(mapGrowatEvent) as GrowatEvent[]
  }

  async getEventBySlug(
    slug: string,
    populateQuery: string = "populate=*"
  ): Promise<GrowatEvent | null> {
    const response = await fetchStrapiAPI<GrowatEvent[]>(
      `growat-events?filters[slug][$eq]=${slug}&sort=startDate:asc&${populateQuery}`
    )

    if (response.length === 0) {
      return null
    }

    return mapGrowatEvent(response[0]) as GrowatEvent
  }

  async getEventById(
    documentId: string,
    populateQuery: string = "populate=*"
  ): Promise<GrowatEvent | null> {
    const response = await fetchStrapiAPI<GrowatEvent>(
      `growat-events/${documentId}?${populateQuery}`
    )

    if (!response) {
      return null
    }

    return mapGrowatEvent(response) as GrowatEvent
  }

  async populateContent(event: GrowatEvent): Promise<GrowatEvent> {
    const response = await this.getEventById(
      event.documentId,
      "populate[contents][populate]=*"
    )
    if (!response) {
      throw new Error(`Event with documentId ${event.documentId} not found`)
    }

    return mapEventContent(event, response)
  }
}

// Helper function for mapping
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

function mapEventContent(
  baseEvent: GrowatEvent,
  eventWithContents: GrowatEvent
): GrowatEvent {
  return {
    ...baseEvent,
    contents: eventWithContents.contents,
  }
}
