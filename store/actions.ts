import { getRandomCardsArray } from "../helpers/helpers"
import { Card } from "../types/card"

export const FILL_TABLE = 'FILL_TABLE'
export const OPEN_CARD = 'OPEN_CARD'
export const CLOSE_CARD = 'CLOSE_CARD'
export const MAKE_PAIR = 'MAKE_PAIR'
export const END_GAME = 'END_GAME'
export const INCREASE_STEP = 'INCREASE_STEP'
export const ADD_TO_PAIR = 'ADD_TO_PAIR'
export const CLOSE_PAIR = 'CLOSE_PAIR'

export const fillTable = () => {
  return {
    type: FILL_TABLE,
    payload: getRandomCardsArray()
  }
}

export const openCard = (payload: Card) => {
  return {
    type: OPEN_CARD,
    payload
  }
}

export const closeCard = (payload: Card) => {
  return {
    type: CLOSE_CARD,
    payload
  }
}

export const makePair = () => {
  return {
    type: MAKE_PAIR
  }
}

export const increaseStep = () => {
  return {
    type: INCREASE_STEP
  }
}

export const addToPair = (payload: Card[]) => {
  return {
    type: ADD_TO_PAIR,
    payload
  }
}

export const closePair = () => {
  return {
    type: CLOSE_PAIR
  }
}