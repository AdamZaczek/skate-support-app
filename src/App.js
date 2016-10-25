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
        <CommentBox data={[
          { id: 1, author: "Adam Żaczek", text: "Best app ever dude!" },
          { id: 2, author: "David Poliszak", text: "Amazing, I stopped drinking after seeing this! Now I'm sober for life." },
          { id: 3, author: "Ewa z Wawy", text: "Legit!" }
        ]} />
        <div className="App-footer">
          <h2>Some Footer</h2>
        </div>
      </div>
    );
  }
}

export default App;
