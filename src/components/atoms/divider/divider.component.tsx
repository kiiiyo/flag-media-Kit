import { CSSProperties } from 'react'

import * as styles from './styles.css'

type Props = {
  kind?: 'vertical' | 'horizon'
  style?: CSSProperties
}

export const Divider = ({ style, kind = 'horizon' }: Props) => {
  return (
    <hr
      style={style}
      className={`${styles.root} ${
        kind === 'horizon' ? styles.horizon : styles.vertical
      }`}
    />
  )
}
