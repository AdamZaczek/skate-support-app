import React from 'react';
import { render } from 'react-dom';
//import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import reducer from './reducers'
import Routes from './routes';
import configureStore from './store/configureStore'
import './index.css';

//const store = createStore(reducer)

const store = configureStore()
const rootEl = document.getElementById('root')

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootEl
)
