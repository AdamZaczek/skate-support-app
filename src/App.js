import React from 'react';
import CommentBox from './components/commentBox.js'
import skate from './skate.svg';
import './App.css';
import { connect } from 'react-redux'


const App = ({likes, onLikeClick}) => (
  <div className="App">
    <div className="App-header">
      <img src={skate} className="App-logo" alt="logo" />
      <h2>Welcome to My App</h2>
    </div>
    <CommentBox />
    <div className="App-footer">
    </div>
  </div>
)


export default connect()(App);
