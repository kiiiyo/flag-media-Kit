import { FolderIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { Molecules } from '@/components'
import { Domain } from '@/features'

import * as styles from './styles.css'

type Props = {
  title: string
  category?: Domain.Category.Entity
}

export const AsideCategory = ({ title, category }: Props) => {
  return (
    <Molecules.Card title={title} icon={<FolderIcon />}>
      {category ? (
        <ul className={styles.categoryGroup}>
          <li className={styles.categoryItem}>
            <Link href="#" className={styles.categoryAnker}>
              テキスト
            </Link>
          </li>
        </ul>
      ) : (
        <p>{title}が指定されていません</p>
      )}
    </Molecules.Card>
  )
}
