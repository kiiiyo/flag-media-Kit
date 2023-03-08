import * as styles from './styles.css'

type Props = {
  content: string
}

export function ArticlePageContent({ content }: Props) {
  return (
    <div className={styles.root}>
      <p className={styles.content}>{content}</p>
    </div>
  )
}
