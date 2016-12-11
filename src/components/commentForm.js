import React from 'react';
import { comment } from '../actions'
import { connect } from 'react-redux'
import Comment from './comment'

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state)
  return {
    comments: state.comments.commentsList
  }
}

class CommentForm extends React.Component {
  constructor() {
    super()

    this.onClickSave = this.onClickSave.bind(this)
  }

  onClickSave(input) {
    this.props.dispatch(comment(input.value));;
  }

  render() {
    let input;
    let key = 0;

    return(
      <div className="Comment-form">
        {this.props.comments.map((comment) => {
          return (
            <Comment key={key++} author='Spiderman'>
              {comment}
            </Comment>
          )})
        }
        <h2>Don't try to comment here!</h2>
        <form onSubmit={e => {e.preventDefault(); this.onClickSave(input);}}>
          <input
            ref={node => {input=node}}
            type="text"
            placeholder="Write something...."
          />
          <button type="submit">Post</button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
