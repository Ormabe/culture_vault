import React, { Component } from 'react';
import { connect } from 'react-redux';


export default class UserLikes extends Component {

	userLikes() {
		let { userInfo } = this.props;
		console.log(userInfo.likes[0].Experience.image)
		return (
			<div>
				Experience Liked:
				<br />
				{userInfo.likes.map(likes => {
					return (
					<img
					key={likes.Experience.id}
					onClick={() => this.props.router(`/experience/${likes.Experience.id}`)}
					src={likes.Experience.image}
					>
					</img>
					)
					})
				}
			</div>
			)
	}

	renderLoading() {
		return (<h1> ...Loading </h1>)
	}

	render() {
		let { userInfo } = this.props;
		return (
			<div>
				{ userInfo ? this.userLikes() : this.renderLoading() }
			</div>
			)
	}
}



