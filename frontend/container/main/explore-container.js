import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExploreLocations } from '../../actions/explore-action';
import SearchBar from './search-container'




class Explore extends Component {
	componentWillMount() {
		let { fetchExploreLocations } = this.props

		fetchExploreLocations()
	}

	generateLocations() {
		const { locations } = this.props;

		return(
			<div>
				<ul>
					{locations.map(location => {
						return(
							<li key={location.id}>{location.city}</li>
						)
					})}
				</ul>
			</div>
		)
	}

	render() {
		const { locations } = this.props;

		if(!locations) {
			return (
				<div>
					LOADING...
				</div>
			)
		}

		return (
			<div>
				<SearchBar />
				{this.generateLocations()}
			</div>
		)
	}
}

function mapStateToProps ( state ){
	return { locations: state.explore.locations }
}


export default connect(mapStateToProps, { fetchExploreLocations })(Explore);
