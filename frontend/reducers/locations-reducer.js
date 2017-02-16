import { FETCH_LOCATION } from '../actions/location-action.js';

const INITIAL_STATE = { location: [] };

export default function(state = INITIAL_STATE , action) {
switch(action.type){
		case FETCH_LOCATION :
			return Object.assign({}, state, { location : action.payload.data })
		default:
			return state;
	}
}

