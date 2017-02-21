import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';	
import { createNewExperience } from '../../actions/action-experiences';
import { Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';

class CreateExperience extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quote: '',
			story: '',
			image: '',
			UserId: null,
			country: '',
			city: '',
			recipeTitle: '',
			ingredients: [],
			steps: [],
			currentQuantity: '',
			currentUnit: '',
			currentIngredient: '',
			currentStep: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.createExperience = this.createExperience.bind(this)
		this.axiosCall = this.axiosCall.bind(this);
		this.newIngredient = this.newIngredient.bind(this)
		this.showIngredients = this.showIngredients.bind(this)
		this.newStep = this.newStep.bind(this)
		this.showSteps = this.showSteps.bind(this)

	}

	handleChange(input, event) {
		if (input === 'quote') {
			this.setState({ quote: event.target.value })
		} else if (input === 'story') {
			this.setState({ story: event.target.value })
		} else if (input === 'image') {
			this.setState({ image: event.target.value })
		} else if (input === 'country') {
			this.setState({ country: event.target.value })
		} else if (input === 'city') {
			this.setState({ city: event.target.value })
		} else if (input === 'recipeTitle') {
			this.setState({ recipeTitle: event.target.value })
		} else if (input === 'currentQuantity') {
			this.setState({ currentQuantity: event.target.value })
		} else if (input === 'currentUnit') {
			this.setState({ currentUnit: event.target.value })
		} else if (input === 'currentIngredient') {
			this.setState({ currentIngredient: event.target.value })
		} else if (input === 'currentStep') {
			this.setState({ currentStep: event.target.value })
		}
	}

	createExperience(userId, state) {
		const { createNewExperience } = this.props;

		createNewExperience(this.props.params.userId, this.state)
	}

	axiosCall(e, userId) {
		e.preventDefault();

		axios.post(`http://localhost:2222/api/experiences/create/${this.props.params.userId}`, {
			quote: this.state.quote,
			story: this.state.story,
			image: this.state.image,
			country: this.state.country,
			city: this.state.city,
			name: this.state.recipeTitle,
			ingredients: this.state.ingredients,
			steps: this.state.steps
		})

				this.setState(
					{
						quote: 'success',
						story: 'success',
						image: 'success',
						country: 'success',
						city: 'success',
						name: 'success',
						recipeTitle: 'success'
					}
				)
	
	}

	newIngredient(e) {
		e.preventDefault()

		const newIngredient = {}
		
		const ingredients = this.state.currentIngredient;
		const quantity = this.state.currentQuantity;
		const unit = this.state.currentUnit;

		newIngredient.ingredients = ingredients;
		newIngredient.quantity = quantity;
		newIngredient.unit = unit

		this.setState({ ingredients: this.state.ingredients.concat(newIngredient) })
		this.setState({ currentQuantity: '', currentUnit: '', currentIngredient: '' })
	}

	newStep(e) {
		e.preventDefault()

		const newStep = {}

		newStep.steps = this.state.currentStep

		this.setState({ steps: this.state.steps.concat(newStep) })
		this.setState({ currentStep: '' })
	}

	showIngredients() {
		if (this.state.ingredients.length > 0) {
			return (
				<div>
					{this.state.ingredients.map((ingredient, index) => {
						return (
							<div key={index}>
								{ingredient.quantity} {ingredient.unit} {ingredient.ingredients}
							</div>
						)
					})}
				</div>
			)
		}

		return (
			<div>
			</div>
		)


	}

	showSteps() {
		if (this.state.steps.length > 0) {
			return (
				<div>
					{this.state.steps.map((step, index) => {
						return (
							<div key={index}>
								{step.steps}
							</div>
						)
					})}
				</div>
			)
		}

		return ( 
			<div>
			</div>
		)
	}

	deleteIngredient() {

	}

	render() {
		return (
			<form onSubmit={this.axiosCall}>
				<input
					type="text"
					placeholder="Enter A Quote"
					value={this.state.quote}
					onChange={this.handleChange.bind(this, "quote")} 
					required />
				<br />
				<br />

				<textarea 
					placeholder="Tell Me Your Story" 
					value={this.state.story} 
					onChange={this.handleChange.bind(this, "story")} 
					required/>
				<br />
				<br />	

				<input 
					type="text"
					placeholder="Upload An Image"
					value={this.state.image}
					onChange={this.handleChange.bind(this, "image")} 
					required/>
				<br />
				<br />

				<input
					type="text"
					placeholder="Country of Origin"
					value={this.state.country}
					onChange={this.handleChange.bind(this, "country")} 
					required/>
				<br />
				<br />

				<input 
					type="text"
					placeholder="City of Origin"
					value={this.state.city}
					onChange={this.handleChange.bind(this, "city")} 
					required/>
				<br />
				<br />

				<input 
					type="text"
					placeholder="Recipe Title"
					value={this.state.recipeTitle}
					onChange={this.handleChange.bind(this, "recipeTitle")} 
					required/>
				<br />
				<br />

				INGREDIENTS:
				{this.showIngredients()}
				
				<br />

				<input type="text"
					placeholder="Quantity"
					value={this.state.currentQuantity}
					onChange={this.handleChange.bind(this, "currentQuantity")} />

				<input type="text"
					placeholder="Unit"
					value={this.state.currentUnit}
					onChange={this.handleChange.bind(this, "currentUnit")} />

				<input type="text"
					placeholder="Ingredient"
					value={this.state.currentIngredient}
					onChange={this.handleChange.bind(this, "currentIngredient")} />

				<button onClick={this.newIngredient}>ADD INGREDIENT</button>

				<br />
				<br />

				STEPS:
				{this.showSteps()}
					
				<br />
				<br />

				<textarea
					placeholder="Add A Step"
					value={this.state.currentStep}
					onChange={this.handleChange.bind(this, "currentStep")} />

				<button onClick={this.newStep}>ADD STEP</button>

				<br />
				<br />

				<button type="submit">SUBMIT</button>
			</form>
		)
	}
}

function mapDispatchtoProps(dispatch) {
	return bindActionCreators({ createNewExperience }, dispatch)
}

export default connect(null, mapDispatchtoProps)(CreateExperience);