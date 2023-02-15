import { Author, Category, Image, Tag } from '../../domain'

/**
 * Article Entity
 */

export type Entity = {
  readonly id: string
  readonly slug: string
  readonly title: string
  readonly description?: string | null
  //FIXME:
  readonly image?: Image.Entity | null
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
  articles: Entity[]
  totalCount: number
  offset: number
  limit: number
}
