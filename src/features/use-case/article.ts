import { Domain, Repository } from '@/features'

export const fetchArticles: () => Promise<Domain.Article.CollectionResponse> =
  async () => {
    return await Repository.Article.fetchArticles()
  }

export const fetchArticlesWithTag: (
  tagId: string
) => Promise<Domain.Article.CollectionResponse> = async (tagId: string) => {
  return await Repository.Article.fetchArticlesWithTag(tagId)
}
