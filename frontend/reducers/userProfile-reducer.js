// import { UPDATE_USER } from '../actions/user-action';
import { FETCH_USERINFO } from '../actions/userProfile-action';

const INTIAL_STATE = {
	userInfo:null
}
export default function(state = INTIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERINFO:
    	return {userInfo: action.payload.data}
    default:
      return state
  }
}

