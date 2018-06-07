import { homeReducer } from './good.redux.js'
import { combineReducers } from 'redux'

// 组合所有的reducer
export default combineReducers({ homeReducer })