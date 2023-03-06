import { Domain, Repository } from '@/features'

export const fetchTags: () => Promise<Domain.Tag.CollectionResponse> =
  async () => {
    return await Repository.Tag.fetchTags()
  }
