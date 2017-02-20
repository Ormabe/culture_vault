import React, { Component } from 'react';

export default class UserExperience extends Component {
	
	userExperience() {
		let { userInfo } = this.props;

		return (
			<ul>	
				Experiences Posted:
				<br />
				{userInfo.experiences.map(experiences => {
					return (
						<img 
						key={experiences.id}
						onClick={ () => this.props.router(`/experience/${experiences.id}`)}
						src={experiences.image}
						>	
						</img>
						)
					})
				}
			</ul>
		)
	}

	renderLoading() {
		return (<h1> ...Loading </h1>)
	}

	render() {
		let { userInfo } = this.props;
		console.log(userInfo)
		return ( 
				<div>
				{userInfo ? this.userExperience() : this.renderLoading()}
				</div>
		)
	}
}