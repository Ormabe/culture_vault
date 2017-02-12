import { FETCH_COMMENTS, CREATE_COMMENT } from '../actions/action-comments';

const INITIAL_STATE = { comments: null, currentComment: [] };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_COMMENTS:
			return { comments: action.payload.data }
		case CREATE_COMMENT:
			return Object.assign({}, state, {currentComment:[...state.currentComment, action.payload.data]})
		default:
			return state;
	}
}