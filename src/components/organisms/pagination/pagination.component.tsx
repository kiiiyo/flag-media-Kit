import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import * as styles from './styles.css'

type Props = {
  isDisablePrevious: boolean
  isDisableNext: boolean
  previousLink?: string
  nextLink?: string
  currentPageCount?: number
  totalPageCount?: number
}

export const Pagination = ({
  isDisablePrevious,
  isDisableNext,
  previousLink,
  nextLink,
  currentPageCount = 1,
  totalPageCount = 1
}: Props) => {
  return (
    <div className={styles.root}>
      <Link
        href={previousLink ?? '#'}
        className={`${styles.paginationAnker} ${styles.paginationPrevious} ${
          isDisablePrevious ? styles.paginationAnkerDisabled : ''
        }`}
      >
        <ArrowLeftIcon className={styles.paginationAnkerIcon} />
        <span>Previous</span>
      </Link>
      <div className={styles.paginationCounter}>
        <span>{currentPageCount}</span>
        <span>/</span>
        <span>{totalPageCount}</span>
      </div>
      <Link
        href={nextLink ?? '#'}
        className={`${styles.paginationAnker} ${styles.paginationNext} ${
          isDisableNext ? styles.paginationAnkerDisabled : ''
        }`}
      >
        <span>Next</span>
        <ArrowRightIcon className={styles.paginationAnkerIcon} />
      </Link>
    </div>
  )
}
