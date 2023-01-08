import * as styles from './Page.css'
import { BeakerIcon } from '@heroicons/react/24/solid'

export const Page = () => {
  return (
    <div className={styles.text}>
      <div>Example</div>
      <div>
        <BeakerIcon style={{ width: 24, height: 24 }} />
      </div>
    </div>
  )
}
