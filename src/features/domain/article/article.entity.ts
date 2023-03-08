import { Author, Category, Tag } from '../../domain'

/**
 * Article Entity
 */

export type Entity = {
  readonly id: string
  readonly slug: string
  readonly title: string
  readonly description?: string | null
  //FIXME:
  readonly imageUrl?: string | null
  readonly category?: Category.Entity | null
  readonly tags?: Tag.Entity[]
  readonly author?: Author.Entity
  readonly createdAt: string
  readonly updatedAt: string
  readonly publishedAt?: string
}

/**
 * Article Collection Response
 */

export type CollectionResponse = {
  data: {
    articles: Entity[]
    totalCount: number
    offset: number
    limit: number
  }
  error?: null
}
