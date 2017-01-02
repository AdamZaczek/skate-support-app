import React from 'react';
import CommentBox from './comments/CommentBox'
import { connect } from 'react-redux'


class Home extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="">
        <CommentBox />
      </div>
    )
  }
}


export default connect()(Home);
