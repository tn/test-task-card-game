import { Context, createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper"
import { AnyAction, createStore } from "redux"
import { Card } from "../types/card"
import { ADD_TO_PAIR, CLOSE_CARD, CLOSE_PAIR, FILL_TABLE, INCREASE_STEP, MAKE_PAIR, OPEN_CARD } from "./actions"
import { addToPairReducer, closeCardReducer, closePairReducer, fillTableReducer, increaseStepReducer, makePairReducer, openCardReducer } from "./reducers"

export interface GameState {
  duration: number
  steps: number
  nextCards: Card[]
  pair: Card[]
}

const initialState: GameState = {
  duration: 0,
  steps: 0,
  nextCards: [],
  pair: []
}

const reducer = (state: GameState = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case FILL_TABLE:
      return fillTableReducer(state, action.payload)
    case INCREASE_STEP:
      return increaseStepReducer(state)
    case OPEN_CARD:
      return openCardReducer(state, action.payload)
    case CLOSE_CARD:
      return closeCardReducer(state, action.payload)
    case ADD_TO_PAIR:
      return addToPairReducer(state, action.payload)
    case MAKE_PAIR:
      return makePairReducer(state)
    case CLOSE_PAIR:
      return closePairReducer(state)
    default:
      return state
  }
}

const makeStore: MakeStore<GameState> = (context: Context) => createStore(reducer)

export const wrapper = createWrapper<GameState>(makeStore, { debug: true })
