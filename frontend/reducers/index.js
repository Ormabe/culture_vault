import {combineReducers} from 'redux';
//import reducers file
import featureReducer from './feature-reducer.js'
import exploreReducer from './explore-reducer.js'

const allReducers = combineReducers({
	featureReducer,
	exploreReducer

})

export default allReducers;