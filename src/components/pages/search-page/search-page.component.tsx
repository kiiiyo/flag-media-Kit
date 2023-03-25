import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import { Molecules, Organisms, Templates } from '@/components'
import { Domain } from '@/features'

type Props = {
  keyword: string
  isLoading: boolean
  hasArticles: boolean
  articles: Domain.Article.Entity[]
}

export const SearchPage = ({ keyword, articles, isLoading }: Props) => {
  return (
    <Templates.CollectionTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={<Organisms.SearchForm />}
    >
      {!keyword && !isLoading ? (
        <Molecules.GeneralMessage
          icon={<MagnifyingGlassIcon />}
          title="記事の検索"
          description="キーワードで記事を検索"
        />
      ) : keyword && isLoading ? (
        <Molecules.GeneralMessage
          icon={<MagnifyingGlassIcon />}
          title="検索中"
        />
      ) : keyword && !isLoading && articles.length > 0 ? (
        <Organisms.ArticleCollection articles={articles} />
      ) : (
        <Molecules.GeneralMessage
          icon={<MagnifyingGlassIcon />}
          title="キーワードに一致した記事はありません"
        />
      )}
    </Templates.CollectionTemplate>
  )
}
