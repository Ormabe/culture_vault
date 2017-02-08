const _defaultState = {
	feature:{}
}

const featureReducer = (state = _defaultState , action) => {
	console.log("========> FEATURE REDUCER", action)
switch(action.type){
		case "FETCH_DATA" :
			return Object.assign({}, state, {feature: action.feature})
		default:
			return state;
	}
}

export default featureReducer;