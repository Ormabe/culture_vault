import { FETCH_LOCATION } from '../actions/explore-action';

const INITIAL_STATE = { locations: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_LOCATION:
			return { locations: action.payload.data }
		default:
			return state
	}
}