import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import rootReducer from './../reducers/root-reducer'

const middlewares = [logger]

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)
))

export default store
