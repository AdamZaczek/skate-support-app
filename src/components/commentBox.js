import React from 'react';
import CommentList from './commentList.js'
import CommentForm from './commentForm.js'

const CommentBox = () => (
  <div className="Comment-box">
    <CommentForm />
    <CommentList />
  </div>
);

export default CommentBox;
