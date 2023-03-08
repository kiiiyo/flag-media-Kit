import type { Domain } from '@/features'
import { apiClient } from '@/libs/api'
import type { ArticleContent } from '@/libs/client/microcms/types'

import { articleMapper } from './article.mapper'

export const fetchArticles: () => Promise<Domain.Article.CollectionResponse> =
  async () => {
    const response = await apiClient.getList<ArticleContent>({
      endpoint: 'articles'
    })
    return {
      data: {
        articles: articleMapper(response.contents),
        totalCount: response.totalCount,
        offset: response.offset,
        limit: response.limit
      }
    }
  }

export const fetchArticle: (
  id: string
) => Promise<Domain.Article.SingleResponse> = async (id: string) => {
  const response = await apiClient.getListDetail<ArticleContent>({
    endpoint: 'articles',
    contentId: id
  })
  return {
    data: {
      article: articleMapper([response])[0]
    }
  }
}

export const fetchArticlesWithTag: (
  tagId: string
) => Promise<Domain.Article.CollectionResponse> = async (tagId: string) => {
  const response = await apiClient.getList<ArticleContent>({
    endpoint: 'articles',
    queries: {
      filters: `tags[contains]${tagId}`
    }
  })
  return {
    data: {
      articles: articleMapper(response.contents),
      totalCount: response.totalCount,
      offset: response.offset,
      limit: response.limit
    }
  }
}

export const fetchArticlesWithCategory: (
  categoryId: string
) => Promise<Domain.Article.CollectionResponse> = async (
  categoryId: string
) => {
  const response = await apiClient.getList<ArticleContent>({
    endpoint: 'articles',
    queries: {
      filters: `category[equals]${categoryId}`
    }
  })

  return {
    data: {
      articles: articleMapper(response.contents),
      totalCount: response.totalCount,
      offset: response.offset,
      limit: response.limit
    }
  }
}
