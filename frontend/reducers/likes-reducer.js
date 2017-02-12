import { FETCH_LIKES } from '../actions/action-likes.js';

const INITIAL_STATE = {
	likes:[]
}

export default function(state= INITIAL_STATE, action){
	switch(action.type){
		case FETCH_LIKES :
			return Object.assign({}, state, {likes: [...state.likes, action.payload.data]})
		default :
			return state;
	}
}