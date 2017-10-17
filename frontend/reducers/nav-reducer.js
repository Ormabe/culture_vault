import { NAV_INFO } from '../actions/navbar-action'

const navbarReducer = (state = {}, action) => {

  switch(action.type) {
    case NAV_INFO:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default navbarReducer;
