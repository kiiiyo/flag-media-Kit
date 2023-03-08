import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from 'next'

import { Pages } from '@/components'
import { UseCase } from '@/features'

export const getAllSlugPaths = async () => {
  const {
    data: { tags }
  } = await UseCase.Tag.fetchTags()
  const paths = tags.map((tag) => ({
    params: {
      id: tag.id
    }
  }))
  return paths
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllSlugPaths()
  return { paths, fallback: false }
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
