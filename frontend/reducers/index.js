import {combineReducers} from 'redux';
//import reducers file
import featureReducer from './feature-reducer.js'

const allReducers = combineReducers({
	featureReducer
})

export default allReducers;