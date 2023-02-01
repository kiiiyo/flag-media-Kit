import { Fragment, ReactNode } from 'react'

import * as styles from './styles.css'

type Props = {
  headerPane?: ReactNode
  footerPane?: ReactNode
  children: ReactNode
}

export const GeneralTemplate = ({
  headerPane,
  footerPane,
  children
}: Props) => {
  return (
    <Fragment>
      {headerPane && headerPane}
      <div className={styles.wrapper}>
        <main className={styles.container}>{children}</main>
      </div>
      {footerPane && footerPane}
    </Fragment>
  )
}
