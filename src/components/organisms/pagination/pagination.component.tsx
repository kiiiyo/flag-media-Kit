import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import * as styles from './styles.css'

type Props = {
  isEnablePrevious: boolean
  isEnableNext: boolean
  previousLink?: string | null
  nextLink?: string | null
  currentPageCount?: number
  totalPageCount?: number
}

export const Pagination = ({
  isEnablePrevious,
  isEnableNext,
  previousLink,
  nextLink,
  currentPageCount,
  totalPageCount
}: Props) => {
  return (
    <div className={styles.root}>
      <Link
        href={previousLink ?? '#'}
        className={`${styles.paginationAnker} ${styles.paginationPrevious} ${
          !isEnablePrevious ? styles.paginationAnkerDisabled : ''
        }`}
      >
        <ArrowLeftIcon className={styles.paginationAnkerIcon} />
        <span>Previous</span>
      </Link>
      {currentPageCount && totalPageCount && (
        <div className={styles.paginationCounter}>
          <span>{currentPageCount}</span>
          <span>/</span>
          <span>{totalPageCount}</span>
        </div>
      )}
      <Link
        href={nextLink ?? '#'}
        className={`${styles.paginationAnker} ${styles.paginationNext} ${
          !isEnableNext ? styles.paginationAnkerDisabled : ''
        }`}
      >
        <span>Next</span>
        <ArrowRightIcon className={styles.paginationAnkerIcon} />
      </Link>
    </div>
  )
}
