/* eslint comma-dangle: ["error", "never"] */
/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import css from '../../styles/main/main.scss';
import ExploreLocations from './explore-locations';

export default class ExploreIndividual extends Component {
  generateLocations() {
    const { locationId, country, image } = this.props;

    return (
      <div className="flip-container" onTouchStart="this.classList.toggle('hover')">
        <div className="flipper">

          <div className="front">
            <div className="explore-location" key={locationId}>
              <img src={image} alt={country} />
            </div>

            <div className="blue-gradient">
              <div className="explore-card-text">
                {country}
              </div>
            </div>
          </div>

          <div className="back">
            <div className="explore-location-back">

              <ExploreLocations key={this.props.locationId} locationId={this.props.locationId}/>

            </div>
          </div>

        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.generateLocations()}
      </div>
    );
  }
}
