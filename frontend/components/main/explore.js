import React from 'react';
import CreateExperience from './experience-create';
import { getLocations } from '../../actions/explore-action.js'
import { Link } from 'react-router'


const Explore = React.createClass({
	componentDidMount(){
		console.log("============>>> DID MOUNT")
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
				<CreateExperience />
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




