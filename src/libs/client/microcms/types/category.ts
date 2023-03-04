import { MicroCMSDate } from 'microcms-js-sdk'

export type CategoryContent = {
  id: string
  name: string
  slug: string
  imageUrl?: string
  description?: string
} & MicroCMSDate
