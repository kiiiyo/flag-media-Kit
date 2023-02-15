import { Domain } from '@/features'
import type { CategoryContent } from '@/libs/client/microcms/types'

type Args = CategoryContent | null | undefined

export function categoryMapper(content: Args): Domain.Category.Entity | null {
  return content
    ? {
        id: content.id,
        name: content.name,
        slug: content.slug,
        description: content.description || null,
        createdAt: content.createdAt,
        updatedAt: content.updatedAt,
        publishedAt: content.publishedAt
      }
    : null
}
