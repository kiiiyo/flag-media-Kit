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
