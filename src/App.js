import React from 'react';
import HeaderContainer from './components/HeaderContainer'
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
        {this.props.children}
        <Footer />
      </div>
    )
  }
}


export default connect()(App);
