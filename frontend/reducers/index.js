import {combineReducers} from 'redux';
//import reducers file

import feature from './feature-reducer.js'
import explore from './explore-reducer.js'

const allReducers = combineReducers({
	feature,
	explore

})

export default allReducers;
