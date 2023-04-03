import "./BreakComponent.css"
import { useSelector, useDispatch } from "react-redux"
import { incrementBreak, decrementBreak } from "../../store/break.js"


export const BreakComponent = () => {

  const state = useSelector(state => state)
  const Break = state.Break
  const dispatch = useDispatch()

  return (
    <div>
      <h3 id="break-label">Break Length</h3>
      <div id="properties">
        <span id="break-decrement" className={"clickables"} onClick={() => (state.Clock.running) ? "" : dispatch(decrementBreak())}> - </span>
        <span id="break-length">{Break.length}</span>
        <span id="break-decrement" onClick={() => (state.Clock.running) ? "" : dispatch(incrementBreak())} className={"clickables"}> + </span>
      </div>
    </div>
  )
}