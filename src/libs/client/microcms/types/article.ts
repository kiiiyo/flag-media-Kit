import { MicroCMSDate, MicroCMSListContent } from 'microcms-js-sdk'

import { CategoryContent } from './category'
import { TagContent } from './tag'

export type Entity = {
  id: string
  title: string
  slug: string
  sortOrder: number
  description?: string
  content?: string
  imageUrl?: string
  category: CategoryContent & MicroCMSListContent
  tags: TagContent[]
} & MicroCMSDate

export type ArticleContent = {
  previousArticle?: Entity | null
  nextArticle?: Entity | null
} & Entity
