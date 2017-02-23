import React, { Component } from 'react';

export default class UserExperience extends Component {
	
	userExperience() {
		let { userInfo } = this.props;

		return (
			<div>	
				<div className="blue-line-top">
				</div>
					<div className="story-name">Experiences Created by {userInfo.user.first_name}</div>
				<div className="blue-line-bottom">
				</div>
				{userInfo.experiences.map(experiences =>
					<div className="experience-created-container">	
						<div className="experience-image">
							<img 
								key={experiences.id}
								onClick={ () => this.props.router(`/experience/${experiences.id}`)}
								src={experiences.image} />
						</div>
					</div>
					)
				}
			</div>
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