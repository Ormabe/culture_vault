/* eslint comma-dangle: ["error", "never"] */
/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExploreLocations } from '../../actions/explore-action';
import SearchBar from './search-container';
import ExploreIndividual from './explore-individual-card';
import css from '../../styles/main/main.scss';

class Explore extends Component {
  componentWillMount() {
    let { fetchExploreLocations } = this.props; //eslint-disable-line

    fetchExploreLocations();
  }

  generateLocations() {
    const { locations } = this.props;

    return (
      <div className="explore-container">
        {locations.map(location =>
          <ExploreIndividual
            key={location.id}
            locationId={location.id}
            country={location.country}
            image={location.image}
          />
        )}
      </div>
    );
  }

  render() {
    const { locations } = this.props; //eslint-disable-line

    if (!locations) {
      return (
        <div>
          LOADING...
        </div>
      );
    }

    return (
      <div>
        <div>
          {this.generateLocations()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { locations: state.explore.locations };
}


export default connect(mapStateToProps, { fetchExploreLocations })(Explore);
