import { combineReducers } from 'redux'
import characters from './characters'
import comics from './comics'
import creater from './creater'
import events from './events'
import series from './series'
import stories from './stories'

export default combineReducers({
  // reducers
  characters,
  comics,
  creater,
  events,
  series,
  stories,
})