type UseHomePagePresenterArgs = {
  currentPageCount: number
  totalPageCount: number
}

// TODO: Add test case
export function useHomePagePresenter({
  currentPageCount,
  totalPageCount
}: UseHomePagePresenterArgs) {
  const isEnablePrevious = currentPageCount != 1
  const isEnableNext = currentPageCount < totalPageCount

  const previousLink = isEnablePrevious
    ? `/articles/page/${currentPageCount - 1}`
    : null
  const nextLink = isEnableNext
    ? `/articles/page/${currentPageCount + 1}`
    : null

  return {
    isEnableNext,
    isEnablePrevious,
    previousLink,
    nextLink
  } as const
}
