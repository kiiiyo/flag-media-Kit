import { Fragment, ReactNode } from 'react'

import * as styles from './styles.css'

type Props = {
  headerPane?: ReactNode
  footerPane?: ReactNode
  asidePane?: ReactNode
  children: ReactNode
}

export const RegularTemplate = ({
  headerPane,
  footerPane,
  asidePane,
  children
}: Props) => {
  return (
    <Fragment>
      {headerPane && headerPane}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.mainPane}>{children}</div>
            {asidePane && (
              <aside className={styles.asidePane}>{asidePane}</aside>
            )}
          </div>
        </div>
      </div>
      {footerPane && footerPane}
    </Fragment>
  )
}
