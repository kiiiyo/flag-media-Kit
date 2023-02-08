// FIXME
export type Image = {
  url: string
  alt: string
}

export type Category = {
  id: number
  slug: string
  name: string
}

export type Tag = {
  id: number
  slug: string
  name: string
}

export type Author = {
  id: number
  slug: string
  name: string
}

export type Article = {
  id: number
  slug: string
  image?: Image
  title: string
  description: string
  category?: Category
  tags?: Tag[]
  author?: Author
  createdAt: string
  updatedAt: string
  publishedAt: string
}
