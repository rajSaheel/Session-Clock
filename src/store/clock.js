const SESSION = "Session"
const BREAK = "Break"

const PLAY_PAUSE = "PLAY_PAUSE"
const RESET = "RESET"
const CHANGE_TYPE = "CHANGE_TYPE"

export const playPause = () => {
  return {
    type: PLAY_PAUSE
  }
}

export const reset = () => {
  return {
    type: RESET
  }
}

export const changeType = () => {
  return {
    type: CHANGE_TYPE
  }
}

const defaultState = {
  type: SESSION,
  running: false,
}

export const Clock = (state = defaultState, action) => {
  switch (action.type) {
    case PLAY_PAUSE: return Object.assign({}, state, { running: !state.running })
      break
    case RESET: return Object.assign({},defaultState)
      break
    case CHANGE_TYPE: return Object.assign({}, state, { type: (state.type === SESSION) ? BREAK : SESSION })
      break
    default: return state
  }
}