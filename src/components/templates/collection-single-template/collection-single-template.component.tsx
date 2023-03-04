import { Fragment, ReactNode } from 'react'

import * as styles from './styles.css'

type Props = {
  headerPane?: ReactNode
  footerPane?: ReactNode
  asidePane?: ReactNode
  pageHeader: ReactNode
  children: ReactNode
}

export const CollectionSingleTemplate = ({
  headerPane,
  footerPane,
  asidePane,
  pageHeader,
  children
}: Props) => {
  return (
    <Fragment>
      {headerPane && headerPane}
      <div className={styles.pageHeaderWrapper}>
        <div className={styles.pageHeaderContainer}>{pageHeader}</div>
      </div>
      <div className={styles.pageContentWrapper}>
        <div className={styles.pageContentContainer}>
          <div className={styles.pageContentInner}>
            <main className={styles.pageContentMainPane}>{children}</main>
            {asidePane && (
              <aside className={styles.pageContentAsidePane}>{asidePane}</aside>
            )}
          </div>
        </div>
      </div>
      {footerPane && footerPane}
    </Fragment>
  )
}
