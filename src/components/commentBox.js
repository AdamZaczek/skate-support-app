import React, { Component } from 'react';
import CommentList from './commentList.js'

class CommentBox extends Component {
  render() {
    return (
      <div className="Comment-box">
        <CommentList data={this.props.data} />
      </div>
    );
  }
}

export default CommentBox;
