import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createNewExperience } from '../../actions/action-experiences';
import { Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';
import Music from '../main/music-container';
import css from '../../styles/experiences/create.scss';

class CreateExperience extends Component {
	constructor(props) {
		super(props)

		this.state = {
			experienceName: '',
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
			currentStep: '',
			songURI: '',
			first: true,
			second: false,
			third: false,
			fourth: false,
			fifth: false,
			recipeImagePreview: '',
			input1: '',
			input2: '',
			input3: '',
			input4: '',
			input5: '',
			input6: '',
			input7: '',
			submitted: false
		}

		this.handleChange = this.handleChange.bind(this)
		this.createExperience = this.createExperience.bind(this)
		this.axiosCall = this.axiosCall.bind(this);
		this.newIngredient = this.newIngredient.bind(this)
		this.showIngredients = this.showIngredients.bind(this)
		this.newStep = this.newStep.bind(this)
		this.showSteps = this.showSteps.bind(this)
		this.handleSongSelect = this.handleSongSelect.bind(this)
		this.guidedEntry = this.guidedEntry.bind(this);
		this.firstBox = this.firstBox.bind(this);
		this.secondBox = this.secondBox.bind(this);
		this.thirdBox = this.thirdBox.bind(this);
		this.fourthBox = this.fourthBox.bind(this);
		this.fifthBox = this.fifthBox.bind(this);
		this.blueInput = this.blueInput.bind(this);
		this.imageSubmit = this.imageSubmit.bind(this);
		this.imagePreview = this.imagePreview.bind(this);
		this.compileStory = this.compileStory.bind(this);
	}

	handleChange(input, event) {
		this.setState({
			[input]: event.target.value
		})
		console.log(this.state)
		// if (input === 'quote') {
		// 	this.setState({ quote: event.target.value })
		// } else if (input === 'story') {
		// 	this.setState({ story: event.target.value })
		// } else if (input === 'image') {
		// 	this.setState({ image: event.target.value })
		// } else if (input === 'country') {
		// 	this.setState({ country: event.target.value })
		// } else if (input === 'city') {
		// 	this.setState({ city: event.target.value })
		// } else if (input === 'recipeTitle') {
		// 	this.setState({ recipeTitle: event.target.value })
		// } else if (input === 'currentQuantity') {
		// 	this.setState({ currentQuantity: event.target.value })
		// } else if (input === 'currentUnit') {
		// 	this.setState({ currentUnit: event.target.value })
		// } else if (input === 'currentIngredient') {
		// 	this.setState({ currentIngredient: event.target.value })
		// } else if (input === 'currentStep') {
		// 	this.setState({ currentStep: event.target.value })
		// }
	}

  handleSongSelect(e, songURI){
    e.preventDefault();
  	this.setState({songURI: songURI})
  }

	createExperience(userId, state) {
		const { createNewExperience } = this.props;

		createNewExperience(this.props.params.userId, this.state)
	}

	axiosCall(e, userId) {
		e.preventDefault();

		axios.post(`http://localhost:2222/api/experiences/create/${this.props.params.userId}`, {
			experienceName: this.state.experienceName,
			quote: this.state.quote,
			story: this.state.story,
			image: this.state.image,
			country: this.state.country,
			city: this.state.city,
			name: this.state.recipeTitle,
			ingredients: this.state.ingredients,
			steps: this.state.steps,
			songURI: this.state.songURI
		})

				this.setState(
					{
						submitted: true
					}
				)

	}

	firstBox() {
		this.setState(
			{
				first: true,
				second: false,
				third: false,
				fourth: false,
				fifth: false
			}
		)
	}

	secondBox() {
		this.setState(
			{
				first: false,
				second: true,
				third: false,
				fourth: false,
				fifth: false
			}
		)
	}

	thirdBox() {
		this.setState(
			{
				first: false,
				second: false,
				third: true,
				fourth: false,
				fifth: false
			}
		)
	}

	fourthBox() {
		this.setState(
			{
				first: false,
				second: false,
				third: false,
				fourth: true,
				fifth: false
			}
		)
	}

	fifthBox() {
		this.setState(
			{
				first: false,
				second: false,
				third: false,
				fourth: false,
				fifth: true
			}
		)
	}

	blueInput(e) {
		e.preventDefault()
		this.setState({ inputBlue: e.target.value })
	}

	guidedEntry() {
		if(this.state.blue) {
			return (
				<div className="blue-box">
					{this.state.inputBlue}
					<input onChange={this.blueInput.bind(this)} value={this.state.inputBlue} />
					<button onClick={this.pinkBox}>PINK BOX</button>
				</div>
			)
		} else if (this.state.pink) {
			return (
				<div className="pink-box">
					{this.state.inputBlue}
					<button onClick={this.blueBox}>BLUE BOX</button>
					}
				</div>
			)
		}
	}

	compileStory() {
		this.setState({ story: this.state.input1 + " " + this.state.input2 + " " + this.state.input3 + " " + this.state.input4 + " " + this.state.input5 + " " + this.state.input6 + " " + this.state.input7 })
		console.log(this.state.story)
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
					<div className="ingredient-title-spacer"></div>
					<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp table-width-600">
						<thead>
							<tr>
								<th className="mdl-data-table__cell--non-numeric">Ingredient</th>
								<th className="mdl-data-table__cell--non-numeric">Quantity</th>
								<th className="mdl-data-table__cell--non-numeric">Unit</th>
							</tr>
						</thead>
						<tbody>
						{this.state.ingredients.map((ingredient, index) =>
							<tr key={index}>
								<td className="mdl-data-table__cell--non-numeric">{ingredient.ingredients}</td>
								<td className="mdl-data-table__cell--non-numeric">{ingredient.quantity}</td> 
								<td className="mdl-data-table__cell--non-numeric">{ingredient.unit}</td> 
							</tr>
						)}
						</tbody>
					</table>
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
					<div className="ingredient-title-spacer"></div>
					<table
          className="mdl-data-table
          mdl-js-data-table
          mdl-shadow--2dp
          table-width-600"
        	>
	        	<thead>
	            <tr>
	              <th className="mdl-data-table__cell--non-numeric">Steps</th>
	            </tr>
	          </thead>
	          <tbody>  
							{this.state.steps.map((step, index) =>
									<tr className="mdl-data-table__cell--non-numeric" key={index}>
										<td className="mdl-data-table__cell--non-numeric">{step.steps}</td>
									</tr>
								)}
						</tbody>
					</table>
				</div>
			)
		}

		return (
			<div>
			</div>
		)
	}

	imageSubmit() {
		this.setState({ recipeImagePreview: this.state.image })
	}

	imagePreview() {
		if (this.state.recipeImagePreview) {
			return (
				<div className="image-preview">
					<img
						className="preview-image"
						src={this.state.recipeImagePreview} 
						alt={this.state.recipeTitle} 
					/>
				</div>
			)
		}

		return (
			<div>
			</div>
		)
	}

	render() {
		if (this.state.first) {
			return (
				<div className="first-box">
					<div className="question-container">
						Recipe Name:
						<input
							type="text"
							value={this.state.recipeTitle}
							onChange={this.handleChange.bind(this, "recipeTitle")}
							required
						/>
					</div>
					<div className="question-container">
						Recipe Image:
						<input
							type="text"
							value={this.state.image}
							onChange={this.handleChange.bind(this, "image")}
							required
						/>
						<button
							className="form-button shadow"
							onClick={this.imageSubmit.bind(this)}>
								PREVIEW
						</button>

						{this.imagePreview()}

					</div>
					<div className="question-container">
						Country of Origin:
						<input
							type="text"
							value={this.state.country}
							onChange={this.handleChange.bind(this, "country")}
							required
						/>
					</div>
					<div className="button-container">
						{
							(this.state.recipeTitle && this.state.recipeImagePreview && this.state.country) 
								? <button 
										className="next-button shadow"
										onClick={this.secondBox}>
											NEXT
									</button>
								: <button 
										className="next-button-disabled"
										>
											NEXT
									</button>
						}
					</div>
				</div>
			)	
		} else if (this.state.second) {
			return (
				<div className="second-box">
					<div className="question-container">
						INGREDIENTS:
			 		{this.showIngredients()}

			 		<br />
			 			<div className="ingredient-input-container">
					 		<div className="quantity">	
						 		<input
						 			className="quantity"
						 			type="text"
									placeholder="Quantity"
									value={this.state.currentQuantity}
									onChange={this.handleChange.bind(this, "currentQuantity")} />
							</div>
							<div className="unit">
								<input
									className="unit"
									type="text"
									placeholder="Unit"
									value={this.state.currentUnit}
									onChange={this.handleChange.bind(this, "currentUnit")} />
							</div>
							<div className="ingredient">
								<input
									type="text"
									placeholder="Ingredient"
									value={this.state.currentIngredient}
									onChange={this.handleChange.bind(this, "currentIngredient")} />
							</div>
						</div>
					<button 
						className="form-button shadow"
						onClick={this.newIngredient}>
							ADD
					</button>
					
					<div className="ingredient-spacer"></div>

			 		STEPS:
			 		{this.showSteps()}

			 		<br />
			 		<br />

			 		<div className="steps-textarea">
				 		<textarea
							placeholder="Add A Step"
							value={this.state.currentStep}
							onChange={this.handleChange.bind(this, "currentStep")} />
					</div>
					<button
						className="form-button shadow" 
						onClick={this.newStep}>ADD</button>

					</div>
					<div className="button-container">
						<button 
							className="back-button shadow"
							onClick={this.firstBox}>
								BACK
						</button>
						{
							(this.state.ingredients.length >= 1 && this.state.steps.length >= 1) 
								? <button 
										className="next-button shadow"
										onClick={this.thirdBox}>
											NEXT
									</button>
								: <button 
										className="next-button-disabled"
										>
											NEXT
									</button>
						}
					</div>
				</div>
			)
		} else if (this.state.third) {
			return (
				<div className="third-box">
					<div className="story-container">
						<div className="story-questions">
							When you eat this meal what does it remind you of? Is it a place? A certain time in your life? A feeling?
						</div>
						<div className="story-textarea">
							<textarea 
								value={this.state.input1}
								onChange={this.handleChange.bind(this, "input1")}
							/>
						</div>	
						<br />

						<div className="story-questions">
							Who is the most fascinating character in this story? I want to know more about them. Describe them to me.
						</div>
						<div className="story-textarea">
							<textarea
								value={this.state.input2}
								onChange={this.handleChange.bind(this, "input2")}
							 />
						</div>
						<br />

						<div className="story-questions">
							Tell me about the signature flavor, preparation method, or ingredient addition that makes this dish special? Is there a historical or personal reason why this is used over other options?
						</div>
						<div className="story-textarea">
							<textarea
								value={this.state.input3}
								onChange={this.handleChange.bind(this, "input3")}
							 />
						</div>
						<br />

						<div className="story-questions">
							Think about your surroundings where this story took place. Where are you? What can you hear? What can you smell? What can you see?
						</div>
						<div className="story-textarea">
							<textarea
								value={this.state.input4}
								onChange={this.handleChange.bind(this, "input4")}
							 />
						</div>
						<br />

						<div className="story-questions">
							<div className="story-questions">Is this is dish from another culture?</div>  
							<div className="story-questions">IF YES: How were you introduced to this meal? Tell me about the people behind the food.</div>
							<div className="story-questions">IF NOT: What is your ethnic and/or regional background? What makes this dish relevant to your family traditions?</div>
						</div>
						<div className="story-textarea">
							<textarea 
								value={this.state.input5}
								onChange={this.handleChange.bind(this, "input5")}
							/>
						</div>
						<br />

						<div className="story-questions">
							What has this experience taught you or how has it shaped you? Why did you want to share this story? Or what would you like those that read it to take away from it?
						</div>
						<div className="story-textarea">
							<textarea 
								value={this.state.input6}
								onChange={this.handleChange.bind(this, "input6")}
							/>
						</div>
						<br />

						<div className="story-questions">
							Is there anything else you want to share with me?
						</div>
						<div className="story-textarea">
							<textarea 
								value={this.state.input7}
								onChange={this.handleChange.bind(this, "input7")}
							/>
						</div>
						<br />

					</div>
					<div className="button-container">
						{
							(this.state.story.length > 1) 
								? <button 
										className="next-button shadow"
										onClick={this.fourthBox}>
											NEXT
									</button>
								: <button
										onClick={this.compileStory}
										className="form-button shadow"
										>
											SAVE STORY
									</button>
						}
					</div>
				</div>
			)
		} else if (this.state.fourth) {
			return (
				<div className="fourth-box">
					<div className="story-questions">
							Give your experience a name.
						</div>
						<div className="story-textarea">
							<textarea 
								value={this.state.experienceName}
								onChange={this.handleChange.bind(this, "experienceName")}
							/>
						</div>
					<div className="story-questions">
							Give this story a 100-character quote.
						</div>
						<div className="story-textarea">
							<textarea 
								value={this.state.quote}
								onChange={this.handleChange.bind(this, "quote")}
							/>
						</div>
						<br />
					<div className="button-container">
						<button 
							className="back-button shadow"
							onClick={this.firstBox}>
								BACK
						</button>
						{
							(this.state.submitted) 
								? <button 
										className="next-button shadow"
										onClick={this.fifthBox}>
											NEXT
									</button>
								: <button 
										onClick={this.axiosCall}
										className="next-button shadow"
										>
											COMPLETE STORY
									</button>
						}
					</div>	
				</div>
			)
		} else if (this.state.fifth) {
			return (
				<div className="fifth-box">
					<div className="story-container">
						<div className="story-questions">
							THANK YOU FOR SHARING YOUR STORY
						</div>
					</div>
					<div className="button-container">
						<Link to="/users/1"><button 
							className="next-button shadow">
								USER PROFILE
						</button></Link>
					</div>
				</div>
			)
		}
	}
}
		// return (
		// 	<form onSubmit={this.axiosCall}>

		// 	<div className="form-styling">
		// 			{this.guidedEntry()}
		// 	</div>

		// 		<input
		// 			type="text"
		// 			placeholder="Enter A Quote"
		// 			value={this.state.quote}
		// 			onChange={this.handleChange.bind(this, "quote")}
		// 			required />
		// 		<br />
		// 		<br />

		// 		<textarea
		// 			placeholder="Tell Me Your Story"
		// 			value={this.state.story}
		// 			onChange={this.handleChange.bind(this, "story")}
		// 			required/>
		// 		<br />
		// 		<br />

		// 		<input
		// 			type="text"
		// 			placeholder="Upload An Image"
		// 			value={this.state.image}
		// 			onChange={this.handleChange.bind(this, "image")}
		// 			required/>
		// 		<br />
		// 		<br />

		// 		<input
		// 			type="text"
		// 			placeholder="Country of Origin"
		// 			value={this.state.country}
		// 			onChange={this.handleChange.bind(this, "country")}
		// 			required/>
		// 		<br />
		// 		<br />

		// 		<input
		// 			type="text"
		// 			placeholder="City of Origin"
		// 			value={this.state.city}
		// 			onChange={this.handleChange.bind(this, "city")}
		// 			required/>
		// 		<br />
		// 		<br />

		// 		<input
		// 			type="text"
		// 			placeholder="Recipe Title"
		// 			value={this.state.recipeTitle}
		// 			onChange={this.handleChange.bind(this, "recipeTitle")}
		// 			required/>
		// 		<br />
		// 		<br />

		// 		INGREDIENTS:
		// 		{this.showIngredients()}

		// 		<br />

		// 		<input type="text"
		// 			placeholder="Quantity"
		// 			value={this.state.currentQuantity}
		// 			onChange={this.handleChange.bind(this, "currentQuantity")} />

		// 		<input type="text"
		// 			placeholder="Unit"
		// 			value={this.state.currentUnit}
		// 			onChange={this.handleChange.bind(this, "currentUnit")} />

		// 		<input type="text"
		// 			placeholder="Ingredient"
		// 			value={this.state.currentIngredient}
		// 			onChange={this.handleChange.bind(this, "currentIngredient")} />

		// 		<button onClick={this.newIngredient}>ADD INGREDIENT</button>

		// 		<br />
		// 		<br />

		// 		STEPS:
		// 		{this.showSteps()}

		// 		<br />
		// 		<br />

		// 		<textarea
		// 			placeholder="Add A Step"
		// 			value={this.state.currentStep}
		// 			onChange={this.handleChange.bind(this, "currentStep")} />

		// 		<button onClick={this.newStep}>ADD STEP</button>

		// 		<br />
		// 		<br />

		// 		<Music selectedSong={this.state.songURI} onSelect={this.handleSongSelect} />

		// 		<br />
		// 		<br />


		// 		<button type="submit">SUBMIT</button>
		// 	</form>
		// )

function mapDispatchtoProps(dispatch) {
	return bindActionCreators({ createNewExperience }, dispatch)
}

export default connect(null, mapDispatchtoProps)(CreateExperience);