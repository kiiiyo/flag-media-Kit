import { Domain } from '@/features'
import type {
  ArticleContent,
  MicroCMSContentId,
  MicroCMSDate
} from '@/libs/client/microcms/types'

type Args = (ArticleContent & MicroCMSContentId & MicroCMSDate)[]

export function articleMapper(contents: Args): Domain.Article.Entity[] {
  return contents.map((content) => {
    return {
      id: content.id,
      slug: content.slug,
      title: content.title,
      description: '',
      createdAt: content.createdAt,
      updatedAt: content.updatedAt,
      publishedAt: content.publishedAt
    }
  })
}
