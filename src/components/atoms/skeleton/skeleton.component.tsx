import { CSSProperties, ReactNode } from 'react'

import * as styles from './styles.css'

type Props = {
  kind: 'blue' | 'pink'
  style?: CSSProperties
  children: ReactNode
}

export const Skeleton = ({ kind = 'blue', style, children }: Props) => {
  return (
    <div
      style={style}
      className={kind === 'blue' ? styles.bluePane : styles.pinkPane}
    >
      {children}
    </div>
  )
}
