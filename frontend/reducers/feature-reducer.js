
const _defaultState = {
	feature:{
		name: '',
		quote: '',
		image: ''
	}
}

const featureReducer = (state = _defaultState , action) => {
	console.log("========> FEATURE REDUCER", action)
switch(action.type){
		case "FETCH_FEATURE":
			return action.feature
		default:
			return state;
	}
}

export default featureReducer;