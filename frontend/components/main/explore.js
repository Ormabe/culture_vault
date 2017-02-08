import React from 'react';
import store from '../../store/store.js';
import { getLocations } from '../../actions/explore-action.js'


const Explore = React.createClass({
	componentDidMount(){
		console.log("============>>> DID MOUNT")
		store.dispatch(getLocations())
	},

	render() {

		return(
			<div>
				I'm the Explore component. I will map a list of location links.

			</div>
		)
	}
});

export default Explore;