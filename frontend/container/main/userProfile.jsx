import React, { Component } from 'react';
import { connect, withRouter } from 'react-redux';
import { getuserInfo } from '../../actions/userProfile-action';
import UserExperience from './userProfile-Experience';
import UserLikes from './userExperience-Likes';
import css from '../../styles/main/profile.scss';

class UserProfile extends Component {
	
	componentDidMount() {
		let { getuserInfo } = this.props;
		//pass userId
		getuserInfo(this.props.params.id)
	}
	
	userInfo(){
		let { userInfo } = this.props;
		console.log(userInfo)
		
		let experienceCounter = userInfo.experiences.length


		return(
			<div className="user-header card-5">
				<div className="user-image">
					<img src={userInfo.user.image} alt={userInfo.user.id} />
				</div>
				<div className="user-information">
					Username:{userInfo.user.first_name}
					<br />
					Location:{userInfo.user.location}
					<br />
					Experiences:{experienceCounter}
				</div>
			</div>
			)
	}


	renderLoading() {
		return (<h1>...Loading</h1>) 
	}
	
	render() {
	let { userInfo } = this.props;
		return (
				<div className="user-container">	
					{ userInfo ? this.userInfo() : this.renderLoading() }
					<UserExperience userInfo={userInfo} router={this.props.router.push.bind(this)} />
					<UserLikes userInfo={userInfo} router={this.props.router.push.bind(this)}/>
				</div>
			)
	}
}

const mapStateToProps = (state) => ({
	userInfo:state.user.userInfo
})

export default connect(mapStateToProps, { getuserInfo })(UserProfile)

