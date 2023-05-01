const INCREMENT_BREAK = "INCREMENT_BREAK"
const DECREMENT_BREAK = "DECREMENT_BREAK"
const RESET = "RESET"
const CHANGE_LENGTH = "CHANGE_LENGTH"

export const incrementBreak = () => {
  return {
    type: INCREMENT_BREAK
  }
}

export const decrementBreak = () => {
  return {
    type: DECREMENT_BREAK
  }
}

export const resetBreak = () => {
  return {
    type: RESET
  }
}


const defaultState = {
  length: 5
}

export const Break = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK: return { length: state.length === 60 ? state.length : state.length + 1 }
      break
    case DECREMENT_BREAK: return { length: state.length === 1 ? state.length : state.length - 1 }
      break
    case RESET: return Object.assign({}, defaultState)
      break
    default: return state
  }
}
