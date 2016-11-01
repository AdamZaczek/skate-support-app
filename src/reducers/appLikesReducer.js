const initialState = 0

//state = initialState ----> initialState will be passed if state is not defined
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIKE':
      return state + 1
    case 'DISLIKE':
      return state - 1
    default:
    //it's important to always return state for unknown actions
      return state
  }
}
