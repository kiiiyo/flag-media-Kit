import { Domain, Repository } from '@/features'

export const fetchTags: () => Promise<Domain.Tag.CollectionResponse> =
  async () => {
    return await Repository.Tag.fetchTags()
  }

export const fetchTag: (
  id: string
) => Promise<Domain.Tag.SingleResponse> = async (id: string) => {
  return await Repository.Tag.fetchTag(id)
}
