const INCREMENT_SESSION = "INCREMENT_SESSION"
const DECREMENT_SESSION = "DECREMENT_SESSION"
const RESET = "RESET"

export const incrementSession = () => {
  return {
    type: INCREMENT_SESSION
  }
}

export const decrementSession = () => {
  return {
    type: DECREMENT_SESSION
  }
}

export const resetSession = () => {
  return {
    type: RESET
  }
}

const defaultState = {
  length: 25
}

export const Session = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_SESSION: return { length: (state.length === 60) ? state.length : state.length + 1 }
      break
    case DECREMENT_SESSION: return { length: state.length === 1 ? state.length : state.length - 1 }
      break
    case RESET: return Object.assign({}, defaultState)
    default: return state;
  }
}
