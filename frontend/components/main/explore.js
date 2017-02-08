import React from 'react';
import store from '../../store/store.js';
import { getLocations } from '../../actions/explore-action.js'


const Explore = React.createClass({
	componentDidMount(){
		console.log("============>>> DID MOUNT")
		store.dispatch(getLocations())
	},

	render() {
console.log(this.props.explore)
		return(
			<div>
				I'm the Explore component. I will map a list of location links.
        {this.props.explore.map(
        	location => <button> {location.country} </button>
        )}
			</div>
		)
	}
});

export default Explore;