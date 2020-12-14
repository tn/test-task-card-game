import { Card } from "../types/card";
import { GameState } from "./store";

export const fillTableReducer = (state: GameState, data: Card[]): GameState => {
  return {
    ...state,
    nextCards: data
  }
}

export const increaseStepReducer = (state: GameState): GameState => {
  return {
    ...state,
    steps: state.steps + 1
  }
}

export const openCardReducer = (state: GameState, data: Card): GameState => {
  return {
    ...state,
    nextCards: state.nextCards.map(card => {
      if (card.suit === data.suit && card.value === data.value) {
        card.open = true
      }

      return card
    })
  }
}

export const closeCardReducer = (state: GameState, data: Card): GameState => {
  return {
    ...state,
    nextCards: state.nextCards.map(card => {
      if (card.suit === data.suit && card.value === data.value) {
        card.open = false
      }

      return card
    })
  }
}

export const addToPairReducer = (state: GameState, data: Card): GameState => {
  return {
    ...state,
    pair: [...state.pair, data]
  }
}

export const makePairReducer = (state: GameState): GameState => {
  return {
    ...state,
    nextCards: state.nextCards.map(card => {
      if ((card.suit === state.pair[0].suit && card.value === state.pair[0].value) || (card.suit === state.pair[1].suit && card.value === state.pair[1].value)) {
        card.off = true
        card.open = false
      }

      return card
    }),
    pair: []
  }
}

export const closePairReducer = (state: GameState): GameState => {
  return {
    ...state,
    nextCards: state.nextCards.map(card => {
      if ((card.suit === state.pair[0].suit && card.value === state.pair[0].value) || (card.suit === state.pair[1].suit && card.value === state.pair[1].value)) {
        card.open = false
      }

      return card
    }),
    pair: []
  }
}
