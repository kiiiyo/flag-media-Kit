// FIXME
import { PhotoIcon } from '@heroicons/react/24/solid'

import * as styles from './styles.css'

export function NoImage() {
  return (
    <div className={styles.root}>
      <PhotoIcon className={styles.icon} />
      <div className={styles.text}>NoImage</div>
    </div>
  )
}
