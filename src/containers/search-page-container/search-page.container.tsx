import { useCallback, useEffect, useState } from 'react'

import { Pages } from '@/components'
import { Domain, UseCase } from '@/features'

type Props = {
  keyword: string
}

export function SearchPageContainer({ keyword }: Props) {
  const [hasArticles, setHasArticles] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [resultArticles, setResultArticles] = useState<Domain.Article.Entity[]>(
    []
  )

  const handleSearchArticles = useCallback(async () => {
    setIsLoading(true)
    await UseCase.Article.searchArticles(keyword)
      .then(({ data: { articles } }) => {
        setResultArticles(articles.length > 0 ? articles : [])
        setHasArticles(articles.length > 0 ? true : false)
      })
      .catch()
      .finally(() => {
        setIsLoading(false)
      })
  }, [keyword, setResultArticles, setIsLoading, setHasArticles])

  useEffect(() => {
    setResultArticles([])
    if (keyword) {
      handleSearchArticles()
    }
  }, [keyword, setResultArticles, handleSearchArticles])

  return (
    <Pages.SearchPage
      keyword={keyword}
      isLoading={isLoading}
      hasArticles={hasArticles}
      articles={resultArticles}
    />
  )
}
