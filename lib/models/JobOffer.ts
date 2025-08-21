import { ImageMedia } from "./ImageMedia"

export type JobOffer = {
  id: string
  documentId: string
  slug: string
  companyLogo?: ImageMedia
  companyName: string
  title: string
  location: string
  starting: string
  workingTime: string
  target: string
  tasks: string
  profile: string
  additionalInformation: string
  link: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  jobField?: JobField
  labels?: Label[]
}

type JobField = {
  id: string
  documentId: string
  fieldName: string
}

type Label = {
  id: string
  label: string
}
