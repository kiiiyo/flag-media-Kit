import { useRouter } from 'next/router'

export const useSearchParams = () => {
  const router = useRouter()
  const keyword =
    typeof router.query.keyword === 'string' ? router.query.keyword : ''

  return {
    keyword
  } as const
}
