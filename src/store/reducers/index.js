import { combineReducers } from 'redux'
import appLikes from './appLikesReducer'
import comments from './commentsReducer'

const rootReducer = combineReducers({
  appLikes,
  comments
})

export default rootReducer
