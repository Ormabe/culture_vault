import React, { Component } from 'react';
import css from '../../styles/main/profile.scss';

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
				<div className="created-by-container">
				{userInfo.experiences.map(experiences =>
					<div key={experiences.id} className="experience-created-container card-5">	
						<div className="experience-image">
							<img 
								onClick={ () => this.props.router(`/experience/${experiences.id}`)}
								src={experiences.image} />
						</div>
						<div className="experience-card-container">
							<div className="experience-name">
								{experiences.name}
							</div>
							<div className="experience-quote">
								{experiences.quote}
							</div>
						</div>
					</div>
					)
				}
				</div>
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