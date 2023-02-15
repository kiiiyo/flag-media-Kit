import { Author, Category, Image, Tag } from '../../domain'

/**
 * Article Entity
 */

export type Entity = {
  //FIXME:
  readonly id: string | number
  readonly slug: string
  readonly title: string
  readonly description: string
  //FIXME:
  readonly image?: Image.Entity
  readonly category?: Category.Entity
  readonly tags?: Tag.Entity[]
  readonly author?: Author.Entity
  //FIXME:
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
