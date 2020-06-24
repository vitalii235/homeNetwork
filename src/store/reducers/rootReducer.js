import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { signInReducer } from './signInReducer'
import { chatReducer } from './chatReducer'
import { modalReducer } from './modalReducer'
import {messageReducer} from './messageReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const rootReducer = combineReducers({
  authReducer,
  signInReducer,
  chatReducer,
  modalReducer,
  messageReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store