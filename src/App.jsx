import './App.css'
import { ClockComponent } from './components/ClockComponent/ClockComponent.jsx'
import { SessionComponent } from './components/SessionComponent/SessionComponent.jsx'
import {BreakComponent} from "./components/BreakComponent/BreakComponent.jsx"

export default function App() {
  return (
    <main>
      <h1>Session Clock</h1>
      <div id="comps" className="comps">
        <BreakComponent/>
        <SessionComponent/>
      </div>
      <ClockComponent/>
    </main>
  )
}
