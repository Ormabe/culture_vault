import React, { Component } from 'react';
import { connect, withRouter } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getuserInfo , getUserId } from '../../actions/userProfile-action';
import UserExperience from './userProfile-Experience';
import UserLikes from './userExperience-Likes';
import css from '../../styles/main/profile.scss';

class UserProfile extends Component {
	
	componentDidMount() {
		let { getuserInfo } = this.props;
		let { getUserId } = this.props;

		getuserInfo(this.props.params.id)
		//pass userId
		getUserId()
	}
	
	userInfo(){
		let { userInfo } = this.props;
		
		let experienceCounter = userInfo.experiences.length


		return(
			<div className="user-header card-5">
				<div className="user-image">
					<img src={userInfo.user.image} alt={userInfo.user.id} />
				</div>
				<div className="user-information">
					<div className="bubble-container">
						<div className="user-bubble">
							{userInfo.user.first_name + " " + userInfo.user.last_name}
						</div>
						<div className="user-bubble">
							{userInfo.user.location}
						</div>
						<div className="user-bubble">
							{`"${userInfo.user.bio}"`}
						</div>
					</div>
				</div>
			</div>
			)
	}

	renderLoading() {
		return (<h1>...Loading</h1>) 
	}
	
	render() {
	let { userInfo } = this.props;
	let { userId } = this.props;
	console.log(userInfo)
	console.log(userId)
		return (
				<div className="user-container">	
					{userInfo ? this.userInfo() : this.renderLoading()}
					<UserExperience userInfo={userInfo} router={this.props.router.push.bind(this)} />
					<UserLikes userInfo={userInfo} router={this.props.router.push.bind(this)}/>
				</div>
			)
	}
}

const mapStateToProps = (state) => ({
	userInfo:state.user.userInfo,
	userId:state.user.userId
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getuserInfo , getUserId }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)

