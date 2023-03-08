import { Domain } from '@/features'
import type { CategoryContent } from '@/libs/client/microcms/types'

type Args = CategoryContent

export function categoryMapper(content: Args): Domain.Category.Entity {
  return {
    id: content.id,
    name: content.name,
    slug: content.slug,
    description: content.description || null,
    createdAt: content.createdAt,
    updatedAt: content.updatedAt,
    publishedAt: content.publishedAt
  }
}
