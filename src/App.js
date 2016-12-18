import React from 'react';
import HeaderContainer from './components/HeaderContainer'
import CommentBox from './components/comments/CommentBox'
import Footer from './components/Footer'
import './App.css';
import { connect } from 'react-redux'


class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <CommentBox />
        <Footer />
      </div>
    )
  }
}


export default connect()(App);
