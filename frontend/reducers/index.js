import {combineReducers} from 'redux';
import feature from './feature-reducer.js'
import explore from './explore-reducer.js'
import experiences from './reducer-experiences';
import signup from './signup-reducer.js'
import location from './locations-reducer.js'
import comments from './reducer-comments.js'
import login from './login-reducer.js';
import search from './search-reducer.js';
import likes from './likes-reducer.js';
import user from './userProfile-reducer.js';
import navbar from './nav-reducer.js';
import {reducer as notifications} from 'react-notification-system-redux';

const rootReducer = combineReducers({
	feature ,
	explore,
	experiences,
	signup,
	location,
	login,
	search,
	comments,
	likes,
	notifications,
	navbar,
	user
})

export default rootReducer;
