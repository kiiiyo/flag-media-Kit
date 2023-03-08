import type { Domain } from '@/features'
import { apiClient } from '@/libs/api'
import type { TagContent } from '@/libs/client/microcms/types'

import { tagMapper } from './tag.mapper'

export const fetchTags: () => Promise<Domain.Tag.CollectionResponse> =
  async () => {
    const response = await apiClient.getList<TagContent>({
      endpoint: 'tags',
      queries: {
        limit: 20,
        orders: 'sortOrder'
      }
    })
    return {
      data: {
        tags: tagMapper(response.contents),
        totalCount: response.totalCount,
        offset: response.offset,
        limit: response.limit
      }
    }
  }

export const fetchTag: (
  id: string
) => Promise<Domain.Tag.SingleResponse> = async (id: string) => {
  const response = await apiClient.getListDetail<TagContent>({
    endpoint: 'tags',
    contentId: id
  })

  return {
    data: {
      tag: response
    }
  }
}
