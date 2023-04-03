import "./ClockComponent.css"

import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { playPause, reset, changeType } from "../../store/clock.js"

export const ClockComponent = () => {

  const audio = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav")
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const type = state.Clock.type
  const [mm, setMM] = useState(0)
  const [ss, setSS] = useState(0)

  const handlePlayPause = async () => {
    await dispatch(playPause())
    countDown(mm,ss)
    console.log(state.Clock.running)
  }

  const countDown = (min, sec) => {
    const timeReducer = setInterval(() => {
      if (state.Clock.running) clearInterval(timeReducer)
      if (min == 0 && sec == 0) {
        dispatch(changeType())
        setMM(state[state.Clock.type].length)
        min = mm
        sec = 0
        setSS(sec)
        audio.play()
      }
      else if (sec == 0) {
        sec = 59
        min -= 1
        setMM(min)
        setSS(sec)
      }
      else {
        sec -= 1
        setSS(sec)
      }
    }, 1000)
  }

  const handleReset = () => {
    dispatch(reset())
    setSS(0)
  }


  useEffect(() => {
    setMM(state[state.Clock.type].length)
  }, [state.Break.length, state.Session.length])

  return (
    <div >
      <div style={{ color: mm !== 0 ? "white" : "red" }} id="clock-container">
        <h3 id="timer-label" >{type}</h3>
        <h1 id="time-left">{(mm <= 9) ? "0" + mm : mm}:{(ss <= 9) ? "0" + ss : ss}</h1>
      </div>
      <div id="buttons">
        <span id="start_stop" className={"clickables"} onClick={handlePlayPause}> Play </span>
        <span id="reset" onClick={handleReset} className={"clickables"}> Reset </span>
      </div>
    </div>
  )
}