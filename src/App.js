import React from 'react';
import CommentBox from './components/commentBox.js'
import skate from './skate.svg';
import './App.css';
import { like } from './actions'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    likes: state.appLikes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLikeClick: () => {
      dispatch(like())
      //console.log('it fired')
    }
  }
}


const App = ({likes, onLikeClick}) => (
  <div className="App">
    <div className="App-header">
      <img src={skate} className="App-logo" alt="logo" />
      <h2>Welcome to My App</h2>
    </div>
    <CommentBox />
    <div className="App-footer">
      <strong>Leave us a like. Likes: {likes} <button onClick={() => onLikeClick()}>Like</button></strong>
    </div>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
