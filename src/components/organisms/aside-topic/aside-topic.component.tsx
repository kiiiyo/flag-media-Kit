import { LightBulbIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

import { Molecules } from '@/components'
import { Article } from '@/features/domain'

import * as styles from './styles.css'

type Props = {
  articles?: Article.Entity[]
}

export const AsideTopic = ({ articles }: Props) => {
  return (
    <Molecules.Card title="トピック" icon={<LightBulbIcon />}>
      {articles && articles.length > 0 ? (
        <ul className={styles.topicGroup}>
          {articles.map((article, index) => {
            return (
              <li key={index} className={styles.topicItem}>
                <Link
                  href={`/articles/${article.slug}`}
                  className={styles.topicAnker}
                >
                  {article.image && (
                    <span className={styles.topicImageContainer}>
                      <Image
                        src={article.image.url}
                        alt={article.image.alt}
                        layout="fill"
                        className={styles.topicImage}
                      />
                    </span>
                  )}

                  <span className={styles.topicText}>{article.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>記事がありません</p>
      )}
    </Molecules.Card>
  )
}

//
