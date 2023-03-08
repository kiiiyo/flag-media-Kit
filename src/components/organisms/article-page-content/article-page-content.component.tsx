import parse from 'html-react-parser'

import * as styles from './styles.css'

type Props = {
  content: string
}

export function ArticlePageContent({ content }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{parse(content)}</div>
    </div>
  )
}
