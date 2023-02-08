import { FolderIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { Molecules } from '@/components'

import * as styles from './styles.css'

export const AsideCategory = () => {
  return (
    <Molecules.Card title="カテゴリー" icon={<FolderIcon />}>
      <ul className={styles.categoryGroup}>
        <li className={styles.categoryItem}>
          <Link href="#" className={styles.categoryAnker}>
            テキスト
          </Link>
        </li>
        <li className={styles.categoryItem}>
          <Link href="#" className={styles.categoryAnker}>
            テキスト
          </Link>
        </li>
        <li className={styles.categoryItem}>
          <Link href="#" className={styles.categoryAnker}>
            テキスト
          </Link>
        </li>
        <li className={styles.categoryItem}>
          <Link href="#" className={styles.categoryAnker}>
            テキスト
          </Link>
        </li>
      </ul>
    </Molecules.Card>
  )
}
