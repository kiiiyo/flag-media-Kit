import { Fragment, ReactNode } from 'react'

import * as styles from './styles.css'

type Props = {
  headerPane?: ReactNode
  footerPane?: ReactNode
  asidePane?: ReactNode
  children: ReactNode
}

export const SingleColumnTemplate = ({
  headerPane,
  footerPane,
  children
}: Props) => {
  return (
    <Fragment>
      {headerPane && headerPane}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <main>{children}</main>
          </div>
        </div>
      </div>
      {footerPane && footerPane}
    </Fragment>
  )
}
