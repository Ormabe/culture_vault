import React from 'react';

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

// import React from 'react';
// import store from '../../store/store.js';
// import { getLocations } from '../../actions/explore-action.js'
// import RaisedButton from 'material-ui/RaisedButton';
// import { Link } from 'react-router'
//
// const Explore = React.createClass({
// 	componentDidMount(){
// 		console.log("============>>> DID MOUNT")
// 		store.dispatch(getLocations())
// 	},
//
// 	render() {
//
// 		return(
// 			<div>
//
//         {this.props.explore && this.props.explore.map(
//         	(location, index) => <button key={index}> <Link to="">{location.country}</Link> </button>
//         )}
// 			</div>
// 		)
// 	}
// });
//
// export default Explore;
//
