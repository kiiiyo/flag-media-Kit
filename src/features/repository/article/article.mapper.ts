import { Domain } from '@/features'
import { categoryMapper } from '@/features/repository/category'
import { imageMapper } from '@/features/repository/image'
import { tagMapper } from '@/features/repository/tag'
import type { ArticleContent } from '@/libs/client/microcms/types'

type Args = ArticleContent[]

export function articleMapper(contents: Args): Domain.Article.Entity[] {
  return contents.map((content) => {
    return {
      id: content.id,
      slug: content.slug,
      title: content.title,
      description: '',
      category: categoryMapper(content.category),
      tags: tagMapper(content.tags),
      // FIXME:
      author: {
        name: '執筆者'
      },
      image: content.image
        ? imageMapper({ url: content.image.url, alt: content.title })
        : null,
      createdAt: content.createdAt,
      updatedAt: content.updatedAt,
      publishedAt: content.publishedAt
    }
  })
}
