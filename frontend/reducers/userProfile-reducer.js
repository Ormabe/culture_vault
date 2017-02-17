import { UPDATE_USER } from '../actions/user-action';

const userProfileReducer = (state = {}, action) => {

  switch(action.type) {
    case UPDATE_USER:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default userProfileReducer;
