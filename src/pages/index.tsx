// import type { NextPage, InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next'
// import { ParsedUrlQuery } from 'node:querystring'
// import ErrorPage from 'next/error'
// //
// import { Domain, Context, Usecase } from '@/features'
// import { Pages } from '@/components'
// import { getLocale, UnknownLocale } from '@/utils/translations/locales'

// type TBearSinglePageProps = InferGetStaticPropsType<typeof getStaticProps>

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import { Pages } from '@/components'
import { Domain, UseCase } from '@/features'

type StaticProps = {
  articles: Domain.Article.Entity[]
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const response = await UseCase.Article.fetchArticles()

  return {
    props: {
      articles: response.articles
    }
  }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export const HomePage: NextPage<PageProps> = ({ articles }: PageProps) => {
  return <Pages.HomePage articles={articles} />
}

export default HomePage
