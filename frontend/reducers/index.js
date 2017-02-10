import {combineReducers} from 'redux';
import Feature from './feature-reducer.js'
import Explore from './explore-reducer.js'
import Experiences from './reducer-experiences';

const rootReducer = combineReducers({
	feature: Feature,
	explore: Explore,
	experiences: Experiences
})

export default rootReducer;

