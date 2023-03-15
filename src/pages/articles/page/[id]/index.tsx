import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import { Pages } from '@/components'
import { Domain, UseCase } from '@/features'

type StaticProps = {
  articles: Domain.Article.Entity[]
  totalPageCount: number
  currentPageCount: number
}

export const getStaticPaths = async () => {
  const perPage = 3
  const {
    data: { totalCount }
  } = await UseCase.Article.fetchArticles({
    sortOrder: 'asc'
  })

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(totalCount / perPage)).map(
    (repo) => `/articles/page/${repo}`
  )

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  params
}) => {
  const perPage = 3

  // TODO: Add test code
  const pageId =
    typeof params?.id === 'string' && !isNaN(Number(params?.id))
      ? Number(params?.id)
      : 1

  const {
    data: { articles, totalCount }
  } = await UseCase.Article.fetchArticles({
    offset: (pageId - 1) * perPage,
    limit: perPage,
    sortOrder: 'asc'
  })

  return {
    props: {
      articles,
      currentPageCount: pageId,
      totalPageCount: Math.ceil(totalCount / perPage)
    }
  }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export const ArticleCollectionPage: NextPage<PageProps> = ({
  articles,
  currentPageCount,
  totalPageCount
}: PageProps) => {
  return (
    <Pages.HomePage
      articles={articles}
      currentPageCount={currentPageCount}
      totalPageCount={totalPageCount}
    />
  )
}

export default ArticleCollectionPage
