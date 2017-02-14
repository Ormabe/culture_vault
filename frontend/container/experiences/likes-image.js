import React, { Component } from 'react';
import _ from 'lodash';

export default class LikesImage extends Component {
	constructor(props){
		super(props)

		this.state = { isLiked:false };

		
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
				<div>
					<img 
						onClick={this.onUnlikeClick.bind(this)}
						src="https://s25.postimg.org/8ygsbe1lr/likes_liked.png"/>
				</div>
			)	
		}

		return (
			<div>
				<img 
					onClick={this.onLikeClick.bind(this)}
					src="https://s25.postimg.org/enx0vp7rz/likes_unliked.png" />
			</div>
		)
	}
}