import Link from 'next/link'

import * as styles from './styles.css'

export const CategoryCollection = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.group}>
        <li className={styles.groupItem}>
          <Link href="#" className={styles.groupItemAnker}>
            カテゴリ
          </Link>
        </li>
        <li className={styles.groupItem}>
          <Link href="#" className={styles.groupItemAnker}>
            カテゴリ
          </Link>
        </li>
        <li className={styles.groupItem}>
          <Link href="#" className={styles.groupItemAnker}>
            カテゴリ
          </Link>
        </li>
        <li className={styles.groupItem}>
          <Link href="#" className={styles.groupItemAnker}>
            カテゴリ
          </Link>
        </li>
        <li className={styles.groupItem}>
          <Link href="#" className={styles.groupItemAnker}>
            カテゴリ
          </Link>
        </li>
      </ul>
    </div>
  )
}
