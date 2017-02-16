import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExperience extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ingredients: [
				{
					ingredients: "water",
					quantity: 2,
					unit: "cups"
				},
				{ ingredients: "ginger",
					quantity: 2,
					unit: "whole"
				}
			], 
			 "steps": [
    {
      "steps": "boil the water",
      "RecipeId": 4
    },
    {
      "steps": "drain the water",
      "RecipeId": 4
    }
  ] 

		}


	}

	updateIngredients(e) {
		e.preventDefault();
		axios.post('/api/experiences/create/1', this.state)
			.then(response => {
			console.log(response);
			})
			.catch(error => {
				console.log(error);
			})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.updateIngredients.bind(this)}>
					<input type="text" value={this.state.quote} />
					<button type="submit">SUBMIT</button>
				</form>
			</div>
		)
	}
}