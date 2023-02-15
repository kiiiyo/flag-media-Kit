import { MicroCMSDate } from 'microcms-js-sdk'

export type CategoryContent = {
  id: string
  name: string
  slug: string
  description?: string
} & MicroCMSDate
