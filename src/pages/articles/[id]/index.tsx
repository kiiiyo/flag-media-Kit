import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from 'next'
import { useRouter } from 'next/router'

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
    data: { article }
  } = await UseCase.Article.fetchArticle(id)

  return {
    props: {
      article
    }
  }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const ArticlePage: NextPage<PageProps> = ({ article }: PageProps) => {
  return <Pages.ArticleSinglePage article={article} />
}

export default ArticlePage
