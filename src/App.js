import React, { Component } from 'react';
import CommentBox from './components/commentBox.js'
import skate from './skate.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={skate} className="App-logo" alt="logo" />
          <h2>Welcome to My App</h2>
        </div>
        <CommentBox data={this.props.data} />
        <div className="App-footer">
          <h2>Some Footer</h2>
        </div>
      </div>
    );
  }
}

export default App;
