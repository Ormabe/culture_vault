//Import Modules 
import React from 'react';
import { render } from 'react-dom';

//Import React-Router Dependencies
import { Router, Route, IndexRoute, history } from 'react-router';

//Import Components
import CultureVault from './cultureVault.js';
import Welcome from './components/main/welcome.js';
import Explore from './components/main/explore.js';

//Build Router Component
const router = (
	<Router history={history}>
		<Route path="/" component={CultureVault}>
			<IndexRoute component={Welcome} />
			<Route path="/explore" component={Explore} />
		</Route>
	</Router>
);

//Render Component
render(router, document.getElementById('root'));