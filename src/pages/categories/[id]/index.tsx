import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from 'next'

import { Pages } from '@/components'
import { UseCase } from '@/features'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params === undefined || typeof params.id !== 'string')
    throw Error('NotFound Article')

  const id = params?.id
  // TODO: Error handling
  const {
    data: { category }
  } = await UseCase.Category.fetchCategory(id)
  const {
    data: { articles }
  } = await UseCase.Article.fetchArticlesWithCategory(id)

  return {
    props: {
      category,
      articles
    }
  }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const CategorySinglePage: NextPage<PageProps> = ({
  category,
  articles
}: PageProps) => {
  return <Pages.CategorySinglePage category={category} articles={articles} />
}

export default CategorySinglePage
