import React from 'react';
import {getExperience} from '../../actions/location-action.js'
import store from '../../store/store.js';

const Locations = React.createClass({
	componentDidMount(){
    console.log('PROPS:',this.props)
		store.dispatch(getExperience(this.props.params.countryId))

	},
	render(){

		return (
		<div>...Loading</div>
			)
	}
})

export default Locations
