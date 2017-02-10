import {combineReducers} from 'redux';
//import reducers file

import feature from './feature-reducer.js'
import explore from './explore-reducer.js'
import signup from './signup-reducer.js'
import location from './locations-reducer.js'

const allReducers = combineReducers({
	feature,
	explore,
	signup,
	location
})

export default allReducers;
