import {
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/24/solid'

import { useHeaderPresenter } from './header.presenter'
import * as styles from './styles.css'

export const Header = () => {
  const { colorMode, handleChangeColorMode } = useHeaderPresenter()
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brandContainer}>
            <div className={styles.brandSymbol}>🏁</div>
            <div className={styles.brandName}>FlagMediaKit</div>
          </div>
          <div className={styles.actionContainer}>
            <button className={styles.actionButton}>
              <MagnifyingGlassIcon className={styles.actionIcon} />
            </button>
            <button
              className={styles.actionButton}
              onClick={() => {
                handleChangeColorMode?.(colorMode === 'dark' ? 'light' : 'dark')
              }}
            >
              {colorMode === 'light' ? (
                <SunIcon className={styles.actionIcon} />
              ) : (
                <MoonIcon className={styles.actionIcon} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
