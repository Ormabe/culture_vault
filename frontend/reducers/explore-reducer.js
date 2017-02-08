const _defaultState = []

const exploreReducer = (state = _defaultState , action) => {

switch(action.type){
		case "FETCH_LOCATION":
			return action.explore
		default:
			return state;
	}
}

export default exploreReducer;