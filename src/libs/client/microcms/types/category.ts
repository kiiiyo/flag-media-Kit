import { MicroCMSDate } from 'microcms-js-sdk'

export type CategoryContent = {
  id: string
  name: string
  slug: string
  sortOrder: number
  imageUrl?: string
  description?: string
} & MicroCMSDate
