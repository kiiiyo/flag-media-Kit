import { Author, Category, Tag } from '../../domain'

/**
 * Article Entity
 */

export type Entity = {
  readonly id: string
  readonly slug: string
  readonly title: string
  readonly description?: string | null
  readonly content?: string | null
  //FIXME:
  readonly imageUrl?: string | null
  readonly category?: Category.Entity | null
  readonly tags?: Tag.Entity[]
  readonly author?: Author.Entity
  readonly createdAt: string
  readonly updatedAt: string
  readonly publishedAt?: string
  readonly nextArticle?: RelationArticle | null
  readonly previousArticle?: RelationArticle | null
}

export type RelationArticle = {
  id: string
  title: string
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

export type SingleResponse = {
  data: {
    article: Entity | null
  }
  error?: null
}
