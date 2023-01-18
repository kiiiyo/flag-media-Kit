import * as styles from './styles.css'

import { Divider } from '@/components/atoms'

export const Footer = () => {
  return (
    <div className={styles.root}>
      <footer className={styles.container}>
        <div className={styles.navigationContainer}>
          {/* Brand */}
          <div className={styles.brandContainer}>
            <div className={styles.brandGroup}>
              <div className={styles.brandSymbol}>🏁</div>
              <div className={styles.brandName}>FlagMediaKit</div>
            </div>
            <p className={styles.brandDescription}>Description</p>
          </div>

          <div>
            <h3 className={styles.menuTitle}>Menu</h3>
            <ul className={styles.menuGroup}>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemAnker}>
                  ホーム
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemAnker}>
                  検索
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemAnker}>
                  カテゴリー
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemAnker}>
                  タグ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.menuTitle}>About</h3>
            <ul className={styles.menuGroup}>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemAnker}>
                  FlagMediaKit について
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemAnker}>
                  お知らせ・リリース
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.menuTitle}>Legal</h3>
            <ul className={styles.menuGroup}>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemAnker}>
                  利用規約
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuItemAnker}>
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Divider />
        <div className={styles.copyrightContainer}>
          <small>
            <span className={styles.copyrightText}>&copy;</span>
            <span className={styles.copyrightText}>2023</span>
            <a href="#" className={styles.copyrightAnker}>
              FlagMediaKit.
            </a>
            <span className={styles.copyrightText}>All Rights Reserved.</span>
          </small>
        </div>
      </footer>
    </div>
  )
}
