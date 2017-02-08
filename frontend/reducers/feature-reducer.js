const _defaultState = {
	feature:null
}

const featureReducer = (state = _defaultState , action) => {
switch(action.type){
		case "FETCH_DATA" :
			return Object.assign({}, state, {feature: action.feature.data})
		default:
			return state;
	}
}

export default featureReducer;