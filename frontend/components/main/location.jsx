import React from 'react'
import {getExperience} from '../../actions/location-action.js'
import store from '../../store/store.js';

const Locations = React.createClass({
	componentDidMount(){
		console.log(this.props.location)
	},
	render(){
		return (
		<div>...Loading</div>
			)
	}
})

export default Locations
