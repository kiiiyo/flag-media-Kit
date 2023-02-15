import { Domain } from '@/features'
import type { TagContent } from '@/libs/client/microcms/types'

type Args = TagContent[]

export function tagMapper(contents: Args): Domain.Tag.Entity[] {
  return contents.map((content) => {
    return {
      id: content.id,
      slug: content.slug,
      name: content.name,
      description: content.description || null,
      createdAt: content.createdAt,
      updatedAt: content.updatedAt,
      publishedAt: content.publishedAt
    }
  })
}
