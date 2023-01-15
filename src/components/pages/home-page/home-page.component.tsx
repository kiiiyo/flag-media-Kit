import { Templates, Organisms } from '@/components'
import { useThemeContext } from '@/features/context'
import * as styles from '@/styles/sample.css'

export const HomePage = () => {
  const { colorMode, handleChangeColorMode } = useThemeContext()
  return (
    <Templates.GeneralTemplate
      header={<Organisms.Header />}
      footer={<div>footer</div>}
    >
      <div className={styles.textStyle}>Home Page</div>
      <div>現在のモード: {colorMode}</div>
      <button
        onClick={() => {
          handleChangeColorMode?.(colorMode === 'dark' ? 'light' : 'dark')
        }}
      >
        カラーモード変更
      </button>
    </Templates.GeneralTemplate>
  )
}
