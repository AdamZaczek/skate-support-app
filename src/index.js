import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import postLikes from './reducers'
import { browserHistory } from 'react-router';
import Routes from './routes';
import './index.css';

const store = createStore(postLikes)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Routes
    history={browserHistory}
    value={store.getState()}
    like={() => store.dispatch({ type: 'LIKE' })}
    dislike={() => store.dispatch({ type: 'DISLIKE' })}
  />,
  rootEl
)

render()
store.subscribe(render)
