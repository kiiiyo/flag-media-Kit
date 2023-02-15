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
      articles: articleMapper(response.contents),
      totalCount: response.totalCount,
      offset: response.offset,
      limit: response.limit
    }
  }
