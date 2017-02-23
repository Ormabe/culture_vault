import React, { Component } from 'react';

export default class ExperienceButtons extends Component {
	constructor(props) {
		super(props)

		this.state = { isEditing: false, newComment: this.props.commentComment }

		this.generateComment = this.generateComment.bind(this);
		this.generateButtons = this.generateButtons.bind(this);
		this.onEditClick = this.onEditClick.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.onSaveClick = this.onSaveClick.bind(this);
	}

	onEditClick() {
		this.setState({ isEditing: true })
	}

	onCancelClick() {
		this.setState({ isEditing: false, newComment: this.props.commentComment })
	}

	onSaveClick() {
		this.props.onSaveClick(this.props.commentId, this.state.newComment)
		this.setState({ isEditing: false })
	}

	generateComment() {
		if (this.state.isEditing) {
			return (
				<div className="edit-comment">
					<form>
						<textarea
							onChange={this.onInputChange.bind(this)}
							value={this.state.newComment} />
					</form>
				</div>
			)
		}

		return (
			<div >
				{this.props.commentComment}
			</div>
		)
	}

	onInputChange(e) {
		this.setState({ newComment: e.target.value });
	}

	generateButtons(comment) {
		if (this.state.isEditing) {
			return (
				<div className="center-buttons">
					<button className="red-button" onClick={this.onCancelClick.bind(this)}>CANCEL</button>
					<button className="green-button" onClick={this.onSaveClick.bind(this)}>SAVE</button>
				</div>
			)
		}

		return(
			<div className="center-buttons">
				<button className="red-button" onClick={this.props.onDeleteClick.bind(this, this.props.commentId)}>DELETE</button>
				<button className="blue-button" onClick={this.onEditClick.bind(this, this.props.commentId)}>EDIT</button>
			</div>
		)
	}

	render() {
		return (
			<div className="comment-element">
				{this.generateComment()}
				<div className="button-wrapper">
					{this.generateButtons()}
				</div>
				<br />
			</div>
		)
	}
} 
