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
    throw Error('NotFound Tag')

  const id = params?.id
  // TODO: Error handling
  const {
    data: { tag }
  } = await UseCase.Tag.fetchTag(id)
  const {
    data: { articles }
  } = await UseCase.Article.fetchArticlesWithTag(id)
  return {
    props: {
      tag,
      articles
    }
  }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const TagSinglePage: NextPage<PageProps> = ({ tag, articles }: PageProps) => {
  return <Pages.TagSinglePage tag={tag} articles={articles} />
}

export default TagSinglePage
