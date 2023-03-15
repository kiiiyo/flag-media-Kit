import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import * as styles from './styles.css'

// type Props = {
//   title: string
//   icon?: ReactNode
// }

export function SearchForm() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.searchTitle}>検索</h2>
          <div className={styles.searchKeywordGroup}>
            <input
              type="text"
              className={styles.searchKeywordTextField}
              placeholder="キーワードを入力"
            />
            <button className={styles.searchButton}>
              <MagnifyingGlassIcon className={styles.searchButtonIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
