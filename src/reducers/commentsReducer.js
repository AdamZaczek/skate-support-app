export default function commentsReducer(state={commentsList: []}, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
//    return Object.assign({}, state, {comments: state.comments.concat(action.text)})
      return {...state, commentsList: state.commentsList.concat(action.text)}
    default:
      return state
  }
}
