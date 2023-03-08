import { Domain, Repository } from '@/features'

export const fetchCategories: () => Promise<Domain.Category.CollectionResponse> =
  async () => {
    return await Repository.Category.fetchCategories()
  }

// export const fetchTag: (
//   id: string
// ) => Promise<Domain.Tag.SingleResponse> = async (id: string) => {
//   return await Repository.Tag.fetchTag(id)
// }
