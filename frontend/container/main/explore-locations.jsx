/* eslint comma-dangle: ["error", "never"] */
/* eslint react/prop-types: 0 */

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import $ from 'jquery';
import { getCountryExperience } from '../../actions/location-action.js';
import css from '../../styles/main/main.scss';

class ExploreLocations extends Component {
  constructor(props) {
    super(props)

    this.state = { location: [] }

    this.apiResults = this.apiResults.bind(this);
  }

  componentWillMount() {
    var that = this;
    $.ajax({
      url: `http://localhost:2222/api/explore/country/${this.props.locationId}`,
      method: 'GET',
      success: function(data) {
        that.setState({ location: data })
      }
    })
  }

  apiResults() {

    if (this.state.location.length < 1) {
      return (
        <div className="nothing-to-show">
          <div>
          NOTHING TO SHOW
          </div>
        </div>
      )
    }

    return (
      <div className="explore-locations-back-container">
        <div className="explore-back-most-recent" key={this.state.location[0].ExperienceId}>
          <Link to={'/experience/' + this.state.location[0].ExperienceId }>
            <div className="pic-and-text">
              <div> 
                <img src={this.state.location[0].Experience.image} alt={this.state.location[0].Experience.name} />
              </div>
              <div className="text-center explore-link">
                {this.state.location[0].Experience.name}
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to={'/country/' + this.state.location[0].LocationId }><button className="orange-button">
            SEE ALL
          </button></Link>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.apiResults()}</div>
  }
}

function mapStateToProps(state) {
  return { location: state.location.location }
}

export default connect(mapStateToProps, {getCountryExperience})(ExploreLocations);

