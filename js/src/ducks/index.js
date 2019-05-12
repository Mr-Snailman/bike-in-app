import { combineReducers } from 'redux'
import statusDuck from './statusDuck'

export default () => {
  return combineReducers({
    status: statusDuck
  })
}
