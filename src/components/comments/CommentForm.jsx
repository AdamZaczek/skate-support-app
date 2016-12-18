import React from 'react';
import { comment } from '../../actions'
import { connect } from 'react-redux'
import Comment from './Comment'


class CommentForm extends React.Component {
  constructor() {
    super()
    this.onClickSave = this.onClickSave.bind(this)
  }

  onClickSave(author, text) {
    this.props.dispatch(comment(author.value, text.value));
  }

  render() {
    let author;
    let text;
    let key = 0;

    return(
      <div className="Comment-form">
        {this.props.comments.map((comment) => {
          return (
            <Comment key={key++} author={comment.author}>
              {comment.text}
            </Comment>
          )})
        }
        <h2>Don't try to comment here!</h2>
        <form onSubmit={e => {e.preventDefault(); this.onClickSave(author, text);}}>
          <input
            ref={node => {author=node}}
            type="text"
            placeholder="Author"
          />
          <input
            ref={node => {text=node}}
            type="text"
            placeholder="Write something...."
          />
          <button type="submit">Post</button>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  }
}


function mapStateToProps(state, ownProps) {
  return {
    comments: state.comments.commentsList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
