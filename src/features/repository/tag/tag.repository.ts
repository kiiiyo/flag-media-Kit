import type { Domain } from '@/features'
import { apiClient } from '@/libs/api'
import type { TagContent } from '@/libs/client/microcms/types'

import { tagMapper } from './tag.mapper'

export const fetchTags: () => Promise<Domain.Tag.CollectionResponse> =
  async () => {
    const response = await apiClient.getList<TagContent>({
      endpoint: 'tags',
      queries: {
        orders: '-publishedAt'
      }
    })
    return {
      tags: tagMapper(response.contents),
      totalCount: response.totalCount,
      offset: response.offset,
      limit: response.limit
    }
  }
