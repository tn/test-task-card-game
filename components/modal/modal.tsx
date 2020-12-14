import { FC } from "react";

import styles from "./modal.module.css"

export const Modal: FC = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <p>{props.children}</p>
        <a href="/">Start new game</a>
      </div>
    </div>
  )
}
