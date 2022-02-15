import { createStore,applyMiddleware } from 'redux'
import logger from './middlewares/logger'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(logger,thunk))

export default store