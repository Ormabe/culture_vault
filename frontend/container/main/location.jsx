import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getCountryExperience } from '../../actions/location-action.js';

class LocationContainer extends Component {

	componentDidMount() {
		let { getCountryExperience } = this.props;
			console.log("Component Is Mounted")
		getCountryExperience(this.props.params.country)

	}

	showMeLocations() {
		console.log("SHOW ME LOCATIONS IS TRIGGERED!")
		const { location } = this.props;
		// console.log(location)
		if(!location) {
			return (
				<div>
					...Loading
				</div>
			)
		}

		return (
			<ul>
				{ location.map(place => {
					<li key={place.id}>
						<img src={place.Experience.image} alt={place.id} />
					</li>
				})}
			</ul>
		)
	}

	render() {
		const { location } = this.props;
		console.log("THIS IS THE LOCATION: " + location)
		if(!location) {
			return (
				<div>
					Loading...
				</div>
			)
		}

		return (
			<div>
				{this.showMeLocations()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { location: state.location.location }
}

export default connect(mapStateToProps, {getCountryExperience})(LocationContainer);

