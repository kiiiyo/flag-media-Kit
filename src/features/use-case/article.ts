import { Domain, Repository } from '@/features'

export const fetchArticles: () => Promise<Domain.Article.CollectionResponse> =
  async () => {
    return await Repository.Article.fetchArticles()
  }

export const fetchArticle: (
  id: string
) => Promise<Domain.Article.SingleResponse> = async (id: string) => {
  return await Repository.Article.fetchArticle(id)
}

export const fetchArticlesWithTag: (
  tagId: string
) => Promise<Domain.Article.CollectionResponse> = async (tagId: string) => {
  return await Repository.Article.fetchArticlesWithTag(tagId)
}

export const fetchArticlesWithCategory: (
  categoryId: string
) => Promise<Domain.Article.CollectionResponse> = async (
  categoryId: string
) => {
  return await Repository.Article.fetchArticlesWithCategory(categoryId)
}
