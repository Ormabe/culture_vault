import React from 'react';
import promise from 'redux-promise';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import Experience from './container/experiences/experience';
import Feature from './container/main/feature-container';
import ExploreContainer from './container/main/explore-container';
import LocationContainer from './container/main/location';
import CultureVault from './cultureVault';
import UserProfile from './container/main/userProfile.jsx';
import CreateExperience from './container/experiences/experience-create';
import MusicContainter from './container/main/music-container.js';
import Welcome from './components/main/welcome';
import '../favicon.ico';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const router = (
<Provider store={createStoreWithMiddleware(rootReducer)}>
	<Router history={browserHistory}>
		<Route path="/" component={CultureVault} >
			<IndexRoute component={Welcome} />
			<Route path="/create/:userId" component={CreateExperience} />
			<Route path="/discover" component={Feature} />
			<Route path="/experience/:id" component={Experience} />
			<Route path="/explore" component={ExploreContainer} />
			<Route path='/explore/:countryId' component={LocationContainer}/>
			<Route path="/music" component={MusicContainter} />
			<Route path="/users/:id" component={UserProfile} />
		</Route>
	</Router>
</Provider>
);

render(router, document.getElementById('root'));
