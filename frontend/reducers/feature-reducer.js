
const featureReducer = (state = {} , action) => {
switch(action.type){
		case "FETCH_FEATURE":
			return action.feature
		default:
			return state;
	}
}

export default featureReducer;