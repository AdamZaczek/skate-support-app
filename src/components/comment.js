import React, { Component } from 'react' //Ill need to add PropTypes later on
//import { connect } from 'react-redux'
//import { like } from '../actions'


class Comment extends Component {
  static propTypes = {
    // author: PropTypes.string.isRequired,
    // value: PropTypes.number.isRequired,
    // like: PropTypes.func.isRequired,
    // dislike: PropTypes.func.isRequired,
    // children: React.PropTypes.node.isRequired
  }
  // likePost = () => {
  //   this.props.like()
  // }

  render() {
    // const { value, like, dislike } = this.props
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

export default Comment
