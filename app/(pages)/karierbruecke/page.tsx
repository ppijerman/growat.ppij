import { JobOfferRepository } from "@/lib/repositories/job-offer-repository"
import JobOfferCard from "./components/JobOfferCard"
import { Metadata } from "next"

export const revalidate = 60 // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Karierbrücke | Grow at PPI Jerman",
  description:
    "Karierbrücke - Job opportunities for Indonesian professionals in Germany",
}

export default async function Page() {
  const repository = new JobOfferRepository()
  const jobOffers = await repository.getAllJobOffers()

  return (
    <main className="bg-ga-light lg:px-10 space-y-3 py-5 justify-items-center">
      {jobOffers.map((jobOffer) => (
        <JobOfferCard key={jobOffer.documentId} jobOffer={jobOffer} />
      ))}
    </main>
  )
}
