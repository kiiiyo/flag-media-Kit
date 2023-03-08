import { Domain, Repository } from '@/features'

export const fetchCategories: () => Promise<Domain.Category.CollectionResponse> =
  async () => {
    return await Repository.Category.fetchCategories()
  }

export const fetchCategory: (
  id: string
) => Promise<Domain.Category.SingleResponse> = async (id: string) => {
  return await Repository.Category.fetchCategory(id)
}
