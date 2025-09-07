import { mapImageMedia } from "../models/ImageMedia"
import { JobOffer } from "../models/JobOffer"
import { fetchStrapiAPI } from "../utils/strapi-client"

export interface IJobOfferRepository {
  getAllJobOffers(): Promise<JobOffer[]>
  getJobOfferById(
    documentId: string,
    populateQuery: string
  ): Promise<JobOffer | null>
}

export class JobOfferRepository implements IJobOfferRepository {
  async getAllJobOffers(): Promise<JobOffer[]> {
    const response = await fetchStrapiAPI<JobOffer[]>(
      "job-offers?populate=*&sort=createdAt:desc"
    )

    return response.map(mapJobOffer) as JobOffer[]
  }

  async getJobOfferById(
    documentId: string,
    populateQuery: string = "populate=*"
  ): Promise<JobOffer | null> {
    const response = await fetchStrapiAPI<JobOffer>(
      `job-offers/${documentId}?${populateQuery}`
    )

    if (!response) {
      return null
    }

    return mapJobOffer(response) as JobOffer
  }
}

function mapJobOffer(jobOffer: JobOffer): JobOffer {
  return {
    ...jobOffer,
    companyLogo: jobOffer.companyLogo
      ? mapImageMedia(jobOffer.companyLogo)
      : undefined,
    createdAt: new Date(jobOffer.createdAt),
    updatedAt: new Date(jobOffer.updatedAt),
    publishedAt: new Date(jobOffer.publishedAt),
  }
}
