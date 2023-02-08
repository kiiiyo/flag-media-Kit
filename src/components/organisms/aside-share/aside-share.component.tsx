import { LinkIcon, ShareIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'

import { Molecules } from '@/components'

import * as styles from './styles.css'

export const AsideShare = () => {
  return (
    <Molecules.Card title="共有" icon={<ShareIcon />}>
      <div className={styles.buttonGroup}>
        <button className={styles.buttonItem}>
          <LinkIcon className={styles.buttonIcon} />
        </button>
        <Link href="#" className={styles.buttonItem}>
          <FaTwitter className={styles.buttonIcon} />
        </Link>
        <Link href="#" className={styles.buttonItem}>
          <FaFacebookSquare className={styles.buttonIcon} />
        </Link>
      </div>
    </Molecules.Card>
  )
}
