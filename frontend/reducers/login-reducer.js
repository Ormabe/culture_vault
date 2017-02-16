import { LOGIN_USER } from '../actions/login-action'

const loginReducer = (state = {}, action) => {

  switch(action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default loginReducer;
