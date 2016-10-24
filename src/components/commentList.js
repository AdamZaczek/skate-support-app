import React, { Component } from 'react';
import Comment from './comment'

class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div>
        <p className="App-intro">
          Here are some <strong>reviews</strong> of the app.
        </p>
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;
