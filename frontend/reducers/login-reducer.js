import { LOGIN_USER, LOGOUT_USER } from '../actions/login-action'

const loginReducer = (state = {}, action) => {

  switch(action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, action.payload)
    case LOGOUT_USER:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default loginReducer;
