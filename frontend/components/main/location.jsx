import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getExperience } from '../../actions/location-action.js'

class Locations extends Component {

	componentDidMount() {
		let {getExperience} = this.props;
		console.log(getExperience)
	}

	render() {
		return (
		<div>...Loading</div>
			)
	}
}

function mapStateToProps(state) {
	return {location: state.location}
}

export default connect(mapStateToProps, {getExperience})(Locations);

