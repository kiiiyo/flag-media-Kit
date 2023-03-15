import type { Domain } from '@/features'
import { apiClient } from '@/libs/api'
import type { ArticleContent } from '@/libs/client/microcms/types'

import { articleMapper } from './article.mapper'

export const fetchArticles: (
  queries: Domain.Article.CollectionQueries
) => Promise<Domain.Article.CollectionResponse> = async (
  queries: Domain.Article.CollectionQueries
) => {
  const response = await apiClient.getList<ArticleContent>({
    endpoint: 'articles',
    queries: {
      offset: queries.offset,
      limit: queries.limit,
      orders: queries.sortOrder === 'asc' ? 'sortOrder' : '-sortOrder'
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

export const searchArticles: (
  keyword: string
) => Promise<Domain.Article.CollectionResponse> = async (keyword: string) => {
  console.log(keyword)
  const response = await apiClient.getList<ArticleContent>({
    endpoint: 'articles',
    queries: {
      q: keyword
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
