import { FC } from "react";

import styles from "./table.module.css"

export const Table: FC = props => {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}
