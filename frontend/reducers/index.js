import {combineReducers} from 'redux';
//import reducers file
<<<<<<< Updated upstream
import feature from './feature-reducer.js'
import explore from './explore-reducer.js'

const allReducers = combineReducers({
	feature,
	explore

=======
import featureReducer from './feature-reducer.js'
import signupReducer from './signup-reducer.js'

const allReducers = combineReducers({
	featureReducer,
	signupReducer
>>>>>>> Stashed changes
})

export default allReducers;
