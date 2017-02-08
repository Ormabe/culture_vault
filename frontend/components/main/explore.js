import React from 'react';
import store from '../../store/store.js';
import { getLocations } from '../../actions/explore-action.js'


const Explore = React.createClass({
	render() {
		return(
			<div>
				I'm the Explore component. I will map a list of location links.
				{store.dispatch(getLocations())}
			</div>
		)
	}
});

export default Explore;