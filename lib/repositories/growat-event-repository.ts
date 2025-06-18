import { GrowatEvent } from "../models/growat-event"
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
  return {
    ...event,
    startDate: new Date(event.startDate),
    endDate: event.endDate ? new Date(event.endDate) : undefined,
  }
}
