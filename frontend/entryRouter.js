//Import Modules
import React from 'react';
import { render } from 'react-dom';
import reducers from './reducers'
import { Provider } from 'react-redux'
import promise from 'redux-promise';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';

import FeatureContainer from './container/main/feature-container'
import ExploreContainer from './container/explore-container'
import Experience from './container/experiences/experience.js'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const router = (
<Provider store={createStoreWithMiddleware(reducers)}>
	<Router history={browserHistory}>
		<Route path='/' component={FeatureContainer} />
		<Route path='explore' component={ExploreContainer}/>
		<Route path="experience/:id" component={Experience} />
	</Router>
</Provider>
);

render(router, document.getElementById('root'));