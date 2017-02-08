//Import Modules
import React from 'react';
import { render } from 'react-dom';

//Import React-Router Dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Import Container
import FeatureContainer from './container/main/feature-container.js'
import ExploreContainer from './container/explore-container.js'

//Import Components
// import CultureVault from './cultureVault.js';
// import SignUp from './components/main/signup.js'
// import Welcome from './components/main/welcome.js';
// import Explore from './components/main/explore.js';

//import store to wrap around router
import store from './store/store.js'
//import provider to connect store to components
import { Provider } from 'react-redux'
//Build Router Component

const router = (
<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={FeatureContainer} />
		<Route path='/explore' component={ExploreContainer}/>
	</Router>
</Provider>
);

//Render Component
render(router, document.getElementById('root'));