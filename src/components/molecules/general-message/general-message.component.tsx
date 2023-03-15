import { ReactNode } from 'react'

import * as styles from './styles.css'

type Props = {
  icon?: ReactNode
  title?: string
  description?: string
  children?: ReactNode
}

export function GeneralMessage({ icon, title, description, children }: Props) {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.inner}>
          {icon && <div className={styles.iconContainer}>{icon}</div>}
          {title && <h2 className={styles.title}>{title}</h2>}
          {description && <p className={styles.description}>{description}</p>}
          {children && <div className={styles.content}>{children}</div>}
        </div>
      </div>
    </section>
  )
}
