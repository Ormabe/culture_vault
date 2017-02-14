import axios from 'axios';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';	
import { fetchComments, createComment } from '../../actions/action-comments'
import ExperienceButtons from './experience-buttons';

class Comments extends Component {
	constructor(props) {
		super(props);

		this.state = { comment: '' }

		this.onDeleteClick = this.onDeleteClick.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.generateComments = this.generateComments.bind(this);
		this.onSaveClick = this.onSaveClick.bind(this);
	}

	componentWillMount() {
		const { fetchComments } = this.props;
		const id = this.props.id;

		fetchComments(id);
	}

	onInputChange(e) {
		this.setState({ comment: e.target.value });
	}

	onFormSubmit(e) {
		e.preventDefault()
		const ROOT_URL = 'http://localhost:2222/api/comments/'
		const comment = this.state.comment;
		const experience = this.props.id;

		axios.post(`${ROOT_URL}experience/${experience}`, { comment })
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})
			.then(() => {
				this.props.fetchComments(this.props.id)
			})
		this.setState({ comment: '' })
	}

	onSaveClick(commentId, newComment) {
		const ROOT_URL = 'http://localhost:2222/api/comments/edit';

		axios.put(`${ROOT_URL}/${commentId}`, { comment: newComment })
			.then(() => {
				this.props.fetchComments(this.props.id)
			})
	}

	onDeleteClick(commentId) {
		const ROOT_URL = 'http://localhost:2222/api/comments/delete';

		axios.delete(`${ROOT_URL}/${commentId}`)
				.then(() => {
					this.props.fetchComments(this.props.id)
				})
	}

	createAComment() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<textarea 
					value={this.state.comment} 
					placeholder="Enter A Comment Here" 
					onChange={this.onInputChange}/>
				<button type="submit">ADD COMMENT</button>
			</form>
		)
	}

	generateComments() {
		const { comments } = this.props;
		const { fetchComments } = this.props;

		return(
			<div >
				<strong>COMMENTS</strong>
				<ul>
					{comments.map(comment => {
						return(
							<li key={comment.id}>
								<ExperienceButtons
									commentComment={comment.comment}
									commentId={comment.id}
									fetchComments={fetchComments}
									onDeleteClick={this.onDeleteClick.bind(this)}
									onSaveClick={this.onSaveClick.bind(this)}
									/>
							</li>
						)
					})}
				</ul>
			</div>		
		)
	}

	render() {
		const { comments } = this.props;

		if(!comments) {
			return (
				<div >
					Loading...
				</div>
			)
		}

		return (
			<div >
				{this.createAComment()}
				<br />
				{this.generateComments()}

			</div>
		)
	}
}

function mapStateToProps(state) {
	return { comments: state.comments.comments }
}

function mapDispatchtoProps(dispatch) {
	return bindActionCreators({ fetchComments, createComment }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(Comments);
