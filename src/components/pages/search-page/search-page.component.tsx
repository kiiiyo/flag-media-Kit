import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import { Molecules, Organisms, Templates } from '@/components'
import { Domain } from '@/features'
type Props = {
  isLoading: boolean
  articles: Domain.Article.Entity[]
}

export const SearchPage = ({ articles, isLoading }: Props) => {
  return (
    <Templates.CollectionTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={<Organisms.SearchForm />}
    >
      {isLoading && (
        <Molecules.GeneralMessage
          icon={<MagnifyingGlassIcon />}
          title="検索中"
        />
      )}
      {!isLoading && articles.length > 0 ? (
        <Organisms.ArticleCollection articles={articles} />
      ) : (
        <Molecules.GeneralMessage
          icon={<MagnifyingGlassIcon />}
          title="記事の検索"
          description="キーワードを入力し記事を検索"
        />
      )}
    </Templates.CollectionTemplate>
  )
}
