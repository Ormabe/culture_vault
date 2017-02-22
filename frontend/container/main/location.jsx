/* eslint comma-dangle: ["error", "never"] */
/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountryExperience } from '../../actions/location-action';
import css from '../../styles/main/location.scss'; //eslint-disable-line

class LocationContainer extends Component {

  componentDidMount() {
    let { getCountryExperience } = this.props; //eslint-disable-line
      console.log("Component Is Mounted");
    getCountryExperience(this.props.params.countryId);

  }

  renderLocations() {
    let { location } = this.props; 
    console.log('Render Component')
      return (
        <div className="location-row">
            {location.map(place => {
              return (
                <div className="experience-container">
                  <img 
                  onClick={() => this.props.router.push(`/experience/${place.ExperienceId}`)}
                  key={place.ExperienceId} 
                  src={place.Experience.image}>
                  </img>  
                </div>
                )
            })}
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
      <div className="location-container">
          {location.length > 0 ? this.renderLocations() : this.renderLoading()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { location: state.location.location }
}

export default connect(mapStateToProps, {getCountryExperience})(LocationContainer);

