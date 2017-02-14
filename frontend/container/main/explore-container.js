import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExploreLocations } from '../../actions/explore-action';
import {Link} from 'react-router';




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
						console.log(location.id)
						console.log("link", "" + /country/ + location.id +"")

						return(
							<li key={location.id}>
								<Link to={`/country/${location.id}`}>
									{location.country}
								</Link>
							</li>
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
				{this.generateLocations()}
			</div>
		)
	}
}

function mapStateToProps ( state ){
	return { locations: state.explore.locations }
}


export default connect(mapStateToProps, { fetchExploreLocations })(Explore);
