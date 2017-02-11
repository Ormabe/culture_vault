import React from 'react';
import store from '../../store/store.js';
import { getLocations } from '../../actions/explore-action.js'
import { Link } from 'react-router'
import FeatureContainer from '../../container/main/feature-container.js'


const Explore = React.createClass({
	componentDidMount(){
		console.log("============>>> DID MOUNT")
		store.dispatch(getLocations())
	},

	render() {
		let explore = this.props.explore.map(
        	(location,key) => <li key={key}><Link to={`/country/${location.id}`}>{location.country}</Link></li>
        )
console.log(this.props.explore[0])
		if(this.props.explore){
		return(
			<div>
				I'm the Explore component. I will map a list of location links.
				<ul>
        		{explore}
        		</ul>
			</div>
		)
		}else {
			return <div> ...Loading </div>
		}
}
});
export default Explore;




