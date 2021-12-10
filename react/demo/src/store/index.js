import {createStore, applyMiddleware}  from 'redux'
import thunk from 'redux-thunk'
import  rootReducer from './combineReducer'

export default createStore(rootReducer, applyMiddleware(thunk))