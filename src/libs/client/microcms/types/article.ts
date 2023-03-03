import { MicroCMSDate, MicroCMSListContent } from 'microcms-js-sdk'

import { CategoryContent } from './category'
import { TagContent } from './tag'

export type ArticleContent = {
  id: string
  title: string
  slug: string
  description?: string
  imageUrl?: string
  category: CategoryContent & MicroCMSListContent
  tags: TagContent[]
} & MicroCMSDate
