import Link from 'next/link'

import { Domain } from '@/features'

import * as styles from './styles.css'

type Props = {
  categories: Domain.Category.Entity[]
}

export const CategoryCollection = ({ categories }: Props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.group}>
        {categories.map((category) => {
          const { id, name } = category
          return (
            <li key={id} className={styles.groupItem}>
              <Link
                href={`/categories/${id}`}
                className={styles.groupItemAnker}
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
