import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import { Molecules, Organisms, Templates } from '@/components'

import { mockArticleCollection } from '../../organisms/article-collection/testing/'

export const SearchPage = () => {
  return (
    <Templates.CollectionTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={<Organisms.SearchForm />}
    >
      <Molecules.GeneralMessage
        icon={<MagnifyingGlassIcon />}
        title="記事の検索"
        description="キーワードを入力し記事を検索"
      />
    </Templates.CollectionTemplate>
  )
}
