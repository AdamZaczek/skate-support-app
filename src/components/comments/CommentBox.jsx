import React from 'react';
import CommentList from './CommentList'
import CommentForm from './CommentForm'

const CommentBox = () => (
  <div className="Comment-box">
    <CommentForm />
    <CommentList />
  </div>
);

export default CommentBox;
