import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import { Pages } from '@/components'
import { Domain, UseCase } from '@/features'

type StaticProps = {
  categories: Domain.Category.Entity[]
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const { data } = await UseCase.Category.fetchCategories()

  return {
    props: {
      categories: data.categories
    }
  }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const CategoryCollectionPage: NextPage<PageProps> = ({
  categories
}: PageProps) => {
  return <Pages.CategoryCollectionPage categories={categories} />
}

export default CategoryCollectionPage
