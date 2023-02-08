import { ReactNode } from 'react'

import { Atoms } from '@/components'

import * as styles from './styles.css'

type Props = {
  title: string
  icon?: ReactNode
  footerPane?: ReactNode
  children: ReactNode
}

export const Card = ({ title, icon, footerPane, children }: Props) => {
  return (
    <section className={styles.root}>
      {title && (
        <>
          <div className={styles.cardHeader}>
            {icon && <span className={styles.cardHeaderIcon}>{icon}</span>}
            <h3 className={styles.cardHeaderTitle}>{title}</h3>
          </div>
          <Atoms.Divider kind="horizon" />
        </>
      )}
      <div className={styles.cardContent}>{children}</div>
      {footerPane && (
        <>
          <Atoms.Divider kind="horizon" />
          <div className={styles.cardFooter}>{footerPane}</div>
        </>
      )}
    </section>
  )
}
