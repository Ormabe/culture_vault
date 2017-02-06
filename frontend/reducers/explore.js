export default (state = [], action) => {
	switch (action.type) {
		case 'CREATE_LOCATIONS_LIST':
			return[
			...state,
			Object.assign({}, action.locations)
			];
		default:
			return state;
	}

	};
