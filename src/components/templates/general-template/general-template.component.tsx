import * as styles from './styles.css'
import { ReactNode, Fragment } from 'react'

type Props = {
  header?: ReactNode
  footer?: ReactNode
  children: ReactNode
}

export const GeneralTemplate = ({ header, footer, children }: Props) => {
  return (
    <Fragment>
      {header && <div>{header}</div>}
      <div className={styles.container}>
        <main className={styles.inner}>{children}</main>
      </div>
      {footer && <div>{footer}</div>}
    </Fragment>
  )
}
