import React from 'react';
import { render } from 'react-dom';
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import promise from 'redux-promise';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import Experience from './container/experiences/experience.js'
import Feature from './container/main/feature-container.js'
import ExploreContainer from './container/explore-container.js'
import LocationContainer from './container/main/location-container.js'
import CultureVault from './cultureVault.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
 
const router = (
<Provider store={createStoreWithMiddleware(rootReducer)}>
	<Router history={browserHistory}>
		<Route path="/" component={CultureVault} >
			<IndexRoute component={ExploreContainer} />
			<Route path="discover" component={Feature} />	
			<Route path="experience/:id" component={Experience} />
			<Route path='/country/:countryId' component={LocationContainer}/>
		</Route>
	</Router>
</Provider>
);

render(router, document.getElementById('root'));
