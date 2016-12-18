import React from 'react';
import Header from './Header'
import { connect } from 'react-redux'


class HeaderContainer extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}


export default connect()(HeaderContainer);
