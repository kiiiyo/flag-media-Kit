import { Domain, Repository } from '@/features'

export const fetchArticles: (
  queries: Domain.Article.CollectionQueries
) => Promise<Domain.Article.CollectionResponse> = async (queries) => {
  return await Repository.Article.fetchArticles(queries)
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
