import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';	
import { createNewExperience } from '../../actions/action-experiences';
import { Link } from 'react-router';
import axios from 'axios';

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
			currentQuantity: 0,
			currentUnit: '',
			currentIngredient: '',
			currentStep: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.createExperience = this.createExperience.bind(this)
		this.axiosCall = this.axiosCall.bind(this);
		this.newIngredient = this.newIngredient.bind(this)

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
					}
				)
	
	}

	newIngredient(e) {
		e.preventDefault()

		console.log("Ingredient Added!")
		// Create an object here

		const newIngredient = {}
		
		const ingredients = this.state.currentIngredient;
		const quantity = this.state.currentQuantity;
		const unit = this.state.currentUnit;

		newIngredient.ingredients = ingredients;
		newIngredient.quantity = quantity;
		newIngredient.unit = unit


		//Push into ingredients array
		this.setState({ingredients: this.state.ingredients.concat(newIngredient)})
		this.setState({ currentQuantity: 0, currentUnit: '', currentIngredient: '' })

		//Clear input



	}

	render() {
		console.log(this.state.ingredients)
		return (
			<form onSubmit={this.axiosCall}>
				<input
					type="text"
					placeholder="Enter A Quote"
					value={this.state.quote}
					onChange={this.handleChange.bind(this, "quote")} />
				<br /><br />
				<input 
					type="text" 
					placeholder="Tell Me Your Story" 
					value={this.state.story} 
					onChange={this.handleChange.bind(this, "story")} />
				<br /><br />	
				<input 
					type="text"
					placeholder="Upload An Image"
					value={this.state.image}
					onChange={this.handleChange.bind(this, "image")} />
				<br /><br />

				<input
					type="text"
					placeholder="Country of Origin"
					value={this.state.country}
					onChange={this.handleChange.bind(this, "country")} />
				<br /><br />

				<input 
					type="text"
					placeholder="City of Origin"
					value={this.state.city}
					onChange={this.handleChange.bind(this, "city")} />
				<br /><br />

				<input 
					type="text"
					placeholder="Recipe Title"
					value={this.state.recipeTitle}
					onChange={this.handleChange.bind(this, "recipeTitle")} />
				<br /><br />

				<br /><br />

					Enter An Ingredient:
					<input type="text"
					placeholder="Amount"
					value={this.state.currentQuantity}
					onChange={this.handleChange.bind(this, "currentQuantity")} />

					<input type="text"
					placeholder="Amount"
					value={this.state.currentUnit}
					onChange={this.handleChange.bind(this, "currentUnit")} />

					<input type="text"
					placeholder="Amount"
					value={this.state.currentIngredient}
					onChange={this.handleChange.bind(this, "currentIngredient")} />

					<button onClick={this.newIngredient}>ADD INGREDIENT</button>

				<br /><br />
				<button type="submit">SUBMIT</button>
			</form>
		)
	}
}

function mapDispatchtoProps(dispatch) {
	return bindActionCreators({ createNewExperience }, dispatch)
}

export default connect(null, mapDispatchtoProps)(CreateExperience);