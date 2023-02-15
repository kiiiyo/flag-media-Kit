import {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSListContent
} from 'microcms-js-sdk'

import { CategoryContent } from './category'
import { TagContent } from './tag'

export type ArticleContent = {
  id: string
  title: string
  slug: string
  description?: string
  category: CategoryContent & MicroCMSListContent
  tags: TagContent[]
  image?: MicroCMSImage
} & MicroCMSDate
