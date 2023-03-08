/**
 * Category Entity
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
 * Response
 */

export type CollectionResponse = {
  data: {
    categories: Entity[]
    totalCount: number
    offset: number
    limit: number
  }
  error?: null
}

export type SingleResponse = {
  data: {
    category: Entity | null
  }
  error?: null
}
