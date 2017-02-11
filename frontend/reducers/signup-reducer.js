import { CREATE_USER } from '../actions/signup-action'

const signupReducer = (state = {}, action) => {

  switch(action.type) {
    case CREATE_USER:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default signupReducer;
