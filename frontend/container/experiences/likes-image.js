import React, { Component } from 'react';
import _ from 'lodash';
import css from '../../styles/experiences/experiences.scss';

export default class LikesImage extends Component {
	constructor(props){
		super(props)

		this.state = { isLiked: false };

		this.onLikeClick = this.onLikeClick.bind(this);
		this.onUnlikeClick = this.onUnlikeClick.bind(this);
	} 
	
	componentWillReceiveProps(nextProps) {
		console.log(nextProps.likes, 'UserId', nextProps.userId)
		this.setState  ({ isLiked: nextProps.likes.find((like) => like.UserId === nextProps.userId) });
		console.log(this.state.isLiked)
	}

	onLikeClick(experienceId,userId) {
		this.props.addLikes(this.props.experienceId,this.props.userId)

		this.setState({isLiked:true})
	}
	
	onUnlikeClick(experienceId,userId) {
		this.props.deleteLikes(this.props.experienceId,this.props.userId)

		this.setState({isLiked:false})
	}

	render() {
		if(this.state.isLiked) {
			return (
				<div className="likes-image">
					<img 
						onClick={this.onUnlikeClick.bind(this)}
						src="https://s3.us-east-2.amazonaws.com/culture-vault/cv-liked-sq.png"/>
				</div>
			)	
		}

		return (
			<div className="likes-image">
				<img 
					onClick={this.onLikeClick.bind(this)}
					src="https://s3.us-east-2.amazonaws.com/culture-vault/cv-unliked-sq.png" />
			</div>
		)
	}
}