import React, { PropTypes, Component } from 'react'


class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <h2 className="Author">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

Comment.propTypes = {
  author: PropTypes.string.isRequired
  //I dont know how to check proptypes of children yet
}

export default Comment
