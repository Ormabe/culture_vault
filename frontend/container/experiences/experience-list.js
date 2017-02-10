import React, { Component } from 'react';
import { connect } from 'redux';
import { fetchExperiences } from '../../actions/action-experiences';

class ExperienceList extends Component {
	componentWillMount() {
		this.props.fetchExperiences();
	}
}

