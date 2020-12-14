import { FC } from "react";

import styles from './stats.module.css'

interface StatsProps {
  steps: number
  duration: string
}

export const Stats: FC<StatsProps> = props => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <strong>Game duration:</strong> {props.duration}
      </div>
      <div className={styles.item}>
        <strong>Steps:</strong> {props.steps}
      </div>
    </div>
  )
}

Stats.defaultProps = {
  duration: '00:00:00',
  steps: 0
}