import { FETCH_FEATURES } from '../actions/feature-action';

const INITIAL_STATE = { features: null };

export default function(state = INITIAL_STATE , action) {
switch(action.type){
		case FETCH_FEATURES:
			return { features: action.payload.data }
		default:
			return state;
	}
}
