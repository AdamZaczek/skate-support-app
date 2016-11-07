import React from 'react' //Ill need to add PropTypes later on
//import { connect } from 'react-redux'
//import { like } from '../actions'


const Comment = (props) => (
  <div className="Comment">
    <h4 className="Author">
      {props.author}
    </h4>
    {props.children}
  </div>
)

export default Comment
