import type { Domain } from '@/features'
import { apiClient } from '@/libs/api'
import type { CategoryContent } from '@/libs/client/microcms/types'

import { categoryMapper } from './category.mapper'

export const fetchCategories: () => Promise<Domain.Category.CollectionResponse> =
  async () => {
    const response = await apiClient.getList<CategoryContent>({
      endpoint: 'categories',
      queries: {
        limit: 20,
        orders: 'sortOrder'
      }
    })
    const categories = response.contents.map((content) =>
      categoryMapper(content)
    )
    return {
      data: {
        categories: categories,
        totalCount: response.totalCount,
        offset: response.offset,
        limit: response.limit
      }
    }
  }
