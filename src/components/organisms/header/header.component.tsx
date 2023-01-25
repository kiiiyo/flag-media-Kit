import {
  FolderIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
  TagIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link'

import { Divider } from '@/components/atoms'

import { useHeaderPresenter } from './header.presenter'
import * as styles from './styles.css'

export const Header = () => {
  const { colorMode, handleChangeColorMode } = useHeaderPresenter()
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Brand */}
          <Link href="/" className={styles.brandAnker}>
            <div className={styles.brandContainer}>
              <div className={styles.brandSymbol}>🏁</div>
              <div className={styles.brandName}>FlagMediaKit</div>
            </div>
          </Link>
          <div className={styles.actionContainer}>
            <Link href="/search" className={styles.actionButton}>
              <MagnifyingGlassIcon className={styles.actionIcon} />
            </Link>
            <Link href="#" className={styles.actionButton}>
              <FolderIcon className={styles.actionIcon} />
            </Link>
            <Link href="#" className={styles.actionButton}>
              <TagIcon className={styles.actionIcon} />
            </Link>
            <Divider kind="vertical" />
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
