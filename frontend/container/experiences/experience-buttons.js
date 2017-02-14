import React, { Component } from 'react';

export default class ExperienceButtons extends Component {
	constructor(props) {
		super(props)

		this.state = { isEditing: false }

		this.generateButtons = this.generateButtons.bind(this);
		this.onEditClick = this.onEditClick.bind(this);
	}

	onEditClick() {
		this.setState({ isEditing: true })
	}

	onCancelClick() {
		this.setState({ isEditing: false })
	}

	generateButtons(comment) {
		if (this.state.isEditing) {
			return (
				<div>
					<button onClick={this.onCancelClick.bind(this)}>CANCEL</button>
					<button>SAVE</button>
				</div>
			)
		}

		return(
			<div>
				<button onClick={this.props.onDeleteClick.bind(this, this.props.commentId)}>DELETE</button>
				<button onClick={this.onEditClick.bind(this, this.props.commentId)}>EDIT</button>
			</div>
		)
	}

	render() {
		return (
			<div >
				{this.generateButtons()}
			</div>
		)
	}

} 
