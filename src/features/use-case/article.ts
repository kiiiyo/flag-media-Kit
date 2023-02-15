import { Domain, Repository } from '@/features'

export const fetchArticles: () => Promise<Domain.Article.CollectionResponse> =
  async () => {
    return await Repository.Article.fetchArticles()
  }
