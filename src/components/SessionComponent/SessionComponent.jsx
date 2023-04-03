import { useSelector, useDispatch } from "react-redux"
import { incrementSession, decrementSession } from "../../store/session.js"


export const SessionComponent = () => {

  const state = useSelector(state => state)
  const Session = state.Session
  const dispatch = useDispatch()

  return (
    <div>
      <h3 id="session-label">Session Length</h3>
      <div id="properties">
        <span id="session-decrement" onClick={() => (state.Clock.running) ? "" : dispatch(decrementSession())} className={"clickables"}> - </span>
        <span id="session-length">{Session.length}</span>
        <span id="session-decrement" onClick={() => (state.Clock.running) ? "" : dispatch(incrementSession())} className={"clickables"}> + </span>
      </div>
    </div>
  )
}