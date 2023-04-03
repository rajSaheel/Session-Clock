import {createStore,combineReducers} from "redux"
import {Clock} from "./clock.js"
import {Session} from "./session.js"
import {Break} from "./break.js"


const clockApp=combineReducers({
  Clock,
  Session,
  Break
})

export const store=createStore(clockApp)


