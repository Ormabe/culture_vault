import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCountryExperience } from '../../actions/location-action.js';

class LocationContainer extends Component {

	componentDidMount() {
		let { getCountryExperience } = this.props;
			console.log("Component Is Mounted")
		getCountryExperience(this.props.params.countryId)

	} 

	renderLocations() {
		let { location } = this.props;  
			return (
				<div>
					<ul>
						{location.map(place => {
							return (
								<img 
								onClick={() => this.props.router.push(`/experience/${place.ExperienceId}`)}
								key={place.ExperienceId} 
								src={place.Experience.image}>
								</img>	
								)
						})}
					</ul>	
				</div>
				)
	}

	renderLoading() {
		console.log('LOADING')
		return <h1>Loading...</h1>
	}

	render() {
		const { location } = this.props;
		console.log(this.props)
		console.log("THIS IS THE LOCATION: " , location)

		return (
			<div>
				{location.length > 0 ? this.renderLocations() : this.renderLoading()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { location: state.location.location }
}

export default connect(mapStateToProps, {getCountryExperience})(LocationContainer);

