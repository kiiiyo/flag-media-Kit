import { TagIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { Molecules } from '@/components'
import { Domain } from '@/features'

import * as styles from './styles.css'

type Props = {
  title: string
  tags?: Domain.Tag.Entity[]
}

export const AsideTag = ({ tags, title }: Props) => {
  return (
    <Molecules.Card title={title} icon={<TagIcon />}>
      {tags && tags.length > 0 ? (
        <div className={styles.articleTagGroup}>
          {tags.map((tag) => (
            <p key={tag.id} className={styles.articleTag}>
              <Link href={`/tags/${tag.id}`} className={styles.articleTagAnker}>
                <span>#</span>
                <span>{tag.name}</span>
              </Link>
            </p>
          ))}
        </div>
      ) : (
        <p>{title}が指定されていません</p>
      )}
    </Molecules.Card>
  )
}
