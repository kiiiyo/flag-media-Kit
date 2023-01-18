import { ColorCard } from '@/stories/components'
import { PALETTE } from '@/styles/theme/tokens/palette'
import * as styles from './styles.css'

const gray = [
  {
    name: 'Gray50',
    hex: PALETTE.gray50
  },
  {
    name: 'Gray100',
    hex: PALETTE.gray100
  },
  {
    name: 'Gray200',
    hex: PALETTE.gray200
  },
  {
    name: 'Gray300',
    hex: PALETTE.gray300
  },
  {
    name: 'Gray400',
    hex: PALETTE.gray400
  },
  {
    name: 'Gray500',
    hex: PALETTE.gray500
  },
  {
    name: 'Gray600',
    hex: PALETTE.gray600
  },
  {
    name: 'Gray700',
    hex: PALETTE.gray700
  },
  {
    name: 'Gray800',
    hex: PALETTE.gray800
  },
  {
    name: 'Gray900',
    hex: PALETTE.gray900
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
