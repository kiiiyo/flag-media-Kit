/**
 * Tag Entity
 */
export type Entity = {
  readonly id: string
  readonly slug: string
  readonly name: string
  readonly description?: string | null
  readonly createdAt?: string
  readonly updatedAt?: string
  readonly publishedAt?: string
}

/**
 * Article Collection Response
 */

export type CollectionResponse = {
  data: {
    tags: Entity[]
    totalCount: number
    offset: number
    limit: number
  }
  error?: null
}

export type SingleResponse = {
  data: {
    tag: Entity | null
  }
  error?: null
}
