import "./ClockComponent.css"

import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { playPause, reset, changeType } from "../../store/clock.js"

export const ClockComponent = () => {
  const audio = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav")
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const type = state.Clock.type
  const [mm, setMM] = useState(state[state.Clock.type].length)
  const [ss, setSS] = useState(0)

  const handlePlayPause = () => {
    dispatch(playPause())
  }

  const handleReset = () => {
    dispatch(reset())
    setMM(state[state.Clock.type].length)
    setSS(0)
  }

  useEffect(() => {
    if (state.Clock.running) {
      var timeReducer = setTimeout(() => {
        if (mm == 0 && ss == 0) {
          if(state.Clock.type==="Break")
          setMM(state.Session.length)
          else if(state.Clock.type==="Session")
          setMM(state.Break.length)
          setSS(0)
          audio.play()
          return dispatch(changeType())
          
        }
        else if (ss == 0) {
          setMM(mm - 1)
          setSS(59)
        }
        else {
          setSS(ss - 1)
        }
      }, 1000)
      return () => clearTimeout(timeReducer)
    }
  })

  useEffect(() => {
    if(state.Clock.type==="Break")
    setMM(state.Break.length)
  }, [state.Break.length])

   useEffect(() => {
    if(state.Clock.type==="Session")
    setMM(state.Session.length)
  }, [state.Session.length])
  
  return (
    <div >
      <div style={{ color: mm !== 0 ? "white" : "red" }} id="clock-container">
        <h3 id="timer-label" >{state.Clock.type}</h3>
        <h1 id="time-left">{(mm <= 9) ? "0" + mm : mm}:{(ss <= 9) ? "0" + ss : ss}</h1>
      </div>
      <div id="buttons">
        <span id="start_stop" className={"clickables"} onClick={handlePlayPause}>{state.Clock.running ? "Pause" : "Play"} </span>
        <span id="reset" onClick={handleReset} className={"clickables"}> Reset </span>
      </div>
    </div>
  )
}