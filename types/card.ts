import { Figures } from "./figures";

export interface Card {
  suit: Figures
  value: number
  open?: boolean
  off?: boolean
}
