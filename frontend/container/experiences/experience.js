import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExperience } from '../../actions/action-experiences';
import Comments from './experience-comments';
import Likes from './experience-likes.js'

class Experience extends Component {
	componentWillMount() { 
		const { fetchExperience } = this.props;
		const id = this.props.params.id
		
		fetchExperience(id);
	}

	user() {
		const { experience } = this.props;
		if(!experience.user){
			return null;
		}
		const userName = `${experience.user.first_name} ${experience.user.last_name}`;
		const userImage = experience.user.image;
		const userLocation = experience.user.location;
		

		return (
			<div >
				<img src={userImage} alt={userName} />
				<h3>{userName}</h3>
				<h5>{userLocation}</h5>
			</div>
		)
	}

	story() {
		const { experience } = this.props;
		const experienceName = experience.experience.name;
		const quote = experience.experience.quote;
		const story = experience.experience.story;

		return (
			<div >
				<h1>{experienceName}</h1>
				<h2>{quote}</h2>
				<p>{story}</p>
			</div>
		)
	}

	recipe () {
		const { experience } = this.props;
		const recipeName = experience.recipe.name;
		const recipeImage = experience.experience.image;
		
		return (
		<div>
			<h3>{recipeName}</h3>
			<img src={recipeImage} alt={recipeName} />
			<br />
			<strong>INGREDIENTS:</strong>
			{this.generateIngredients()}
			
			<strong>STEPS:</strong>
			{this.generateSteps()}
		</div>
		)
	}

	generateIngredients() {
		const { experience } = this.props;

		return (
			<div >
				<ul>
					{experience.ingredients.map(ingredient => {
						return (
						<li key={ingredient.id}>{ingredient.name}</li>
						)
					})}
				</ul>
			</div>
		)
	}

	generateSteps() {
		const { experience } = this.props;

		return(
			<div >
				<ul>
					{experience.steps.map(step => {
						return (
							<li key={step.id}>{step.steps}</li>
						)
					})}
				</ul>
			</div>
		)
	}

	render() {
		const { experience } = this.props;

		if(!experience) {
			return (
				<div >
					Loading...
				</div>
			)
		}

		return (
			<div >
					{this.user()}
					<br />
					{this.story()}
					<br />
					{this.recipe()}
					<br />
					<Likes id={this.props.params.id}/>
					<br />
					<Comments id={this.props.params.id}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { experience: state.experiences.experience }
}

export default connect(mapStateToProps, { fetchExperience })(Experience);