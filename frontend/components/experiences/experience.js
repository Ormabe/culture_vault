import React from 'react';
import ExperienceHeader from './experienceHeader';
import Ingredients from './ingredients';
import Recipe from './recipe.js'

const Experience = React.createClass({
	render() {
		return(
			<div>
				<ExperienceHeader />
				<Ingredients />
				<Recipe />
			</div>
		)
	}
});

export default Experience;