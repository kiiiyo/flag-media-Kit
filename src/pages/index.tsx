import type { NextPage } from 'next'
import Head from 'next/head'

import * as styles from './sample.css'

import { useThemeContext } from '@/features/context'

const Home: NextPage = () => {
  const { colorMode, handleChangeColorMode } = useThemeContext()
  return (
    <div>
      <Head>
        <title>🏴 Flag Media Kit</title>
        <meta name="description" content="Jamstack user interface kit." />
      </Head>
      <div className={styles.textStyle}>Home Page</div>
      <div>現在のモード: {colorMode}</div>
      <button
        onClick={() => {
          handleChangeColorMode?.(colorMode === 'dark' ? 'light' : 'dark')
        }}
      >
        カラーモード変更
      </button>
    </div>
  )
}

export default Home
