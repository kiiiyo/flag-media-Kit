import type { NextPage } from 'next'

import { SearchPageContainer } from '@/containers'

import { useSearchParams } from './search.params'

// TODO: fetch life cycle
const SearchPage: NextPage = () => {
  const { keyword } = useSearchParams()

  return <SearchPageContainer keyword={keyword} />
}

export default SearchPage
