import { Card } from "../types/card"
import { Figures } from "../types/figures"

const makeCards = (suit: Figures, max: number) => {
  const cards: Card[] = []

  for(let i = 1; i <= max; i++) {
    cards.push({
      suit,
      value: i,
      open: false,
      off: false
    })
  }

  return cards
}

export const getRandomCardsArray = () => {
  const squares = makeCards(Figures.SQUARE, 9)
  const circles = makeCards(Figures.CIRCLE, 9)
  const triangles = makeCards(Figures.TRIANGLE, 9)
  const crosses = makeCards(Figures.CROSS, 9)

  return [...squares, ...circles, ...triangles, ...crosses].sort(() => Math.random() - 0.5)
}
