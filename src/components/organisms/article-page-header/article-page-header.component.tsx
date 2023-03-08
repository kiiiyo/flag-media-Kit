import Image from 'next/image'

import { NoImage } from '@/components/molecules'

import * as styles from './styles.css'

type Image = {
  title: string
  url: string
}

type Props = {
  title: string
  imageUrl?: string
}

export function ArticlePageHeader({ title, imageUrl }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {imageUrl ? (
          <Image src={imageUrl} alt={title} className={styles.image} fill />
        ) : (
          <NoImage />
        )}
      </div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}
