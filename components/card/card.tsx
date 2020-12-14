import { FC, useCallback } from "react"
import { Figures } from "../../types/figures"

import styles from './card.module.css'

interface CardProps {
  suit: Figures
  value: number
  open?: boolean
  off?: boolean
  onFlip: (card: any) => void
}

export const Card: FC<CardProps> = props => {
  const icons = Array.from(Array(props.value).keys())
  const iconCls = props.suit === Figures.CIRCLE
    ? styles.circle
    : props.suit === Figures.CROSS
      ? styles.cross
      : props.suit === Figures.SQUARE
        ? styles.square
        : styles.triangle
  const cardCls = [styles.card, props.open ? null : styles.close, props.off ? styles.off : null].join(' ')

  const handleClick = () => {
    if (props.off) {
      return false
    }

    props.onFlip(props)
  }

  return (
    <div className={cardCls} onClick={handleClick}>
      <div className={styles.grid}>
        {icons.map((_, i) => <span key={Figures[props.suit] + props.value + 'ico' + i} className={iconCls} />)}
      </div>
    </div>
  )
}
