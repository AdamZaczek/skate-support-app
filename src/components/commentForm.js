import React from 'react';

class CommentForm extends React.Component {
  constructor() {
    super()
    this.state = {
      comment: { title: "Yo" }
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  onClickSave() {
    console.log('yo');console.log('yay')
    alert('Hello' + this.state.comment.title)
    console.log(this.state)
  }

  onTitleChange(event) {
    const comment = this.state.comment
    comment.title = event.target.value
    this.setState({comment: comment})
  }

  render() {
    return(
      <div className="Comment-form">
        <h2>Don't try to comment here!</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.comment.title} />
        <input
          type="submit"
          value="save"
          onClick={this.onClickSave}
        />
      </div>
    )
  }
}

export default CommentForm;
