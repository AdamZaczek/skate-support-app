import React from 'react'


const Comment = (props) => (
  <div className="Comment">
    <h4 className="Author">
      {props.author}
    </h4>
    {props.children}
  </div>
)

export default Comment
