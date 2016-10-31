import React from 'react';
import Comment from './comment'
let data = [
  { id: 1, author: "Adam Żaczek", text: "Best app ever dude!" },
  { id: 2, author: "David Poliszak", text: "Amazing, I stopped drinking after seeing this! Now Im sober for life." },
  { id: 3, author: "Ewa z Wawy", text: "Legit!" }
]


let commentNodes = data.map(function(comment) {
  return (
    <Comment author={comment.author} key={comment.id}>
      {comment.text}
    </Comment>
  );
});

const CommentList = () => (
  <div>
    <p className="App-intro">
      Here are some <strong>reviews</strong> of the app.
    </p>
    {commentNodes}
  </div>
)

export default CommentList;
