import { EXPLORE_SEARCH } from '../actions/search-action'

const searchReducer = (state = {}, action) => {

  switch(action.type) {
    case EXPLORE_SEARCH:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default searchReducer;
