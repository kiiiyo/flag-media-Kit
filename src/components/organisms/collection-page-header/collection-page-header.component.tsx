import { ReactNode } from 'react'

import * as styles from './styles.css'

type Props = {
  title: string
  icon?: ReactNode
}

export function CollectionPageHeader({ title, icon }: Props) {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}
