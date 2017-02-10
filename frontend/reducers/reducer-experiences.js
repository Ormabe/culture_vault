import { FETCH_EXPERIENCE } from '../actions/action-experiences';

const INITIAL_STATE = { experience: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_EXPERIENCE:
			return { experience: action.payload.data }
		default:
			return state;
	}
}

