import { MicroCMSDate } from 'microcms-js-sdk'

export type TagContent = {
  id: string
  name: string
  slug: string
  description?: string
} & MicroCMSDate
