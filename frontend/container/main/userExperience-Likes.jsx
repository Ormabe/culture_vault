import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../styles/main/profile.scss';


export default class UserLikes extends Component {

	userLikes() {
		let { userInfo } = this.props;
		console.log(userInfo.likes[0].Experience.image)
		return (
			<div>
				<div className="green-line-top">
				</div>
					<div className="story-name">{userInfo.user.first_name} Likes These Experiences</div>
				<div className="green-line-bottom">
				</div>
				
				<div className="created-by-container">
				{userInfo.likes.map(experiences =>
					<div key={experiences.Experience.id} className="experience-created-container card-5">	
						<div className="experience-image">
							<img 
								onClick={ () => this.props.router(`/experience/${experiences.Experience.id}`)}
								src={experiences.Experience.image} />
						</div>
						<div className="experience-card-container">
							<div className="experience-name">
								{experiences.Experience.name}
							</div>
							<div className="experience-quote">
								{experiences.Experience.quote}
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
		return (
			<div>
				{ userInfo ? this.userLikes() : this.renderLoading() }
			</div>
			)
	}
}



