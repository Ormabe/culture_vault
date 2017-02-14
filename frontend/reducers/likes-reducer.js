import { FETCH_LIKES, ADD_LIKES, REMOVE_LIKES } from '../actions/action-likes.js';

const INITIAL_STATE = {
	likes:[],
	addLikes:{},
	deleteLikes:{}
}

export default function(state= INITIAL_STATE, action){
	switch(action.type){
		case FETCH_LIKES :
			return Object.assign({}, state, { likes: action.payload.data })
		case ADD_LIKES :
			return Object.assign({}, state, )
		default :
			return state;
	}
}