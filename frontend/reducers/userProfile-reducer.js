// import { UPDATE_USER } from '../actions/user-action';
import { FETCH_USERINFO , USER_ID } from '../actions/userProfile-action';

const INTIAL_STATE = {
	userInfo:null,
	userId:null
}
export default function(state = INTIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERINFO:
    	return {userInfo: action.payload.data}
    case USER_ID :
    	return {userId:action.payload.data}
    default:
      return state
  }
}

