import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Routes from './routes';
import configureStore from './store/configureStore'
import './index.css';
const store = configureStore()
const rootEl = document.getElementById('root')

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootEl
)
