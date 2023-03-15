import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { Pages } from '@/components'
import { Domain, UseCase } from '@/features'

// TODO: fetch life cycle
const SearchPage: NextPage = () => {
  const router = useRouter()
  const keyword = typeof router.query.q === 'string' ? router.query.q : ''

  const [resultArticles, setResultArticles] = useState<Domain.Article.Entity[]>(
    []
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSearchArticles = useCallback(async () => {
    setIsLoading(true)
    await UseCase.Article.searchArticles(keyword)
      .then(({ data: { articles } }) => {
        setResultArticles(articles.length > 0 ? articles : [])
      })
      .catch()
      .finally(() => {
        setIsLoading(false)
      })
  }, [keyword, setResultArticles, setIsLoading])

  useEffect(() => {
    setResultArticles([])
    if (keyword) {
      handleSearchArticles()
    }
  }, [keyword, setResultArticles, handleSearchArticles])

  return <Pages.SearchPage articles={resultArticles} isLoading={isLoading} />
}

export default SearchPage
