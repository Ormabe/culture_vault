import {combineReducers} from 'redux';
import feature from './feature-reducer.js'
import explore from './explore-reducer.js'
import experiences from './reducer-experiences';
import signup from './signup-reducer.js'
import location from './locations-reducer.js'
import comments from './reducer-comments.js'

const rootReducer = combineReducers({
	feature ,
	explore,
	experiences,
	signup,
	location,
	comments
})

export default rootReducer;
