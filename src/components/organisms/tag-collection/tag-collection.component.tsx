import Link from 'next/link'

import { Domain } from '@/features'

import * as styles from './styles.css'

type Props = {
  tags: Domain.Tag.Entity[]
}

export const TagCollection = ({ tags }: Props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.group}>
        {tags.map((tag) => {
          const { id, name, slug } = tag
          return (
            <li key={id} className={styles.groupItem}>
              <Link href={`/tags/${slug}`} className={styles.groupItemAnker}>
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
