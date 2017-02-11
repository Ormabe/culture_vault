import React from 'react';
import { render } from 'react-dom';
import reducers from './reducers'
import { Provider } from 'react-redux'
import promise from 'redux-promise';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import Experience from './container/experiences/experience.js'
import FeatureContainer from './container/main/feature-container.js'
import ExploreContainer from './container/main/explore-container.js'
import LocationContainer from './container/main/location-container.js'
import CultureVault from './cultureVault.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const router = (
<Provider store={createStoreWithMiddleware(reducers)}>
	<Router history={browserHistory}>
		<Route path="/" component={CultureVault} >
			<IndexRoute component={ExploreContainer} />
			{/* <Route path="discover" component={Discover} />
			<Route path="about" component={About} /> */}
			<Route path="experience/:id" component={Experience} />
			<Route path='/country/:countryId' component={LocationContainer}/>
		</Route>
	</Router>
</Provider>
);

render(router, document.getElementById('root'));
