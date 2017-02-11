const locationReducer = (state = {} , action) => {
switch(action.type){
		case "FETCH_COUNTRY":
			return action.location
		default:
			return state;
	}
}

export default locationReducer;
