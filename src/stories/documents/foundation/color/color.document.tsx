import { ColorCard } from '@/stories/components'
import { palette } from '@/styles/theme/tokens'

import * as styles from './styles.css'

const gray = [
  {
    name: 'Gray50',
    hex: palette.gray50
  },
  {
    name: 'Gray100',
    hex: palette.gray100
  },
  {
    name: 'Gray200',
    hex: palette.gray200
  },
  {
    name: 'Gray300',
    hex: palette.gray300
  },
  {
    name: 'Gray400',
    hex: palette.gray400
  },
  {
    name: 'Gray500',
    hex: palette.gray500
  },
  {
    name: 'Gray600',
    hex: palette.gray600
  },
  {
    name: 'Gray700',
    hex: palette.gray700
  },
  {
    name: 'Gray800',
    hex: palette.gray800
  },
  {
    name: 'Gray900',
    hex: palette.gray900
  }
]

export const Color = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {gray.map(({ name, hex }, index) => {
          return <ColorCard key={index} name={name} hex={hex} />
        })}
      </div>
    </div>
  )
}
