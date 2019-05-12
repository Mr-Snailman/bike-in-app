import App from './App'
import axios from 'axios'
import { logger } from 'redux-logger'
import { fsaThunkMiddleware } from './middleware'
import promiseMiddleware from 'redux-promise-middleware'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDom from 'react-dom'
import reducers from './ducks'
import { applyMiddleware, createStore } from 'redux'

//axios.defaults.withCredentials = true

let middleware = [fsaThunkMiddleware, promiseMiddleware]
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger]
}

const store = createStore(reducers(), {}, applyMiddleware(...middleware))

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app')
)
