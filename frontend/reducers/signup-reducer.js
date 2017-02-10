import { CREATE_USER } from '../actions/signup-action'

const signupReducer = (state = {}, action) => {

  switch(action.type) {
    case CREATE_USER:
      console.log('ACTION:',action)
    default:
      return state
  }
}

export default signupReducer;
