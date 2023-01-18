import * as styles from './styles.css'

type Props = {
  name: string
  hex: string
}

export const ColorCard = ({ name, hex }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.palette} style={{ backgroundColor: hex }}></div>
      <div className={styles.meta}>
        <div className={styles.metaName}>{name}</div>
        {hex && (
          <div className={styles.metaItem}>
            <div className={styles.metaLabel}>HEX</div>
            <div className={styles.metaValue}>{hex}</div>
          </div>
        )}
      </div>
    </div>
  )
}
