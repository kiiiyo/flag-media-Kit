import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import { Pages } from '@/components'
import { Domain, UseCase } from '@/features'

type StaticProps = {
  articles: Domain.Article.Entity[]
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const {
    data: { articles }
  } = await UseCase.Article.fetchArticles()

  return {
    props: {
      articles
    }
  }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export const HomePage: NextPage<PageProps> = ({ articles }: PageProps) => {
  return <Pages.HomePage articles={articles} />
}

export default HomePage
