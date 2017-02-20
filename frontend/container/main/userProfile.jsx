import React, { Component } from 'react';
import { getuserInfo } from '../../actions/userProfile-action.js';
import { connect, withRouter } from 'react-redux';
import UserExperience from './userProfile-Experience.jsx'
import UserLikes from './userExperience-Likes.jsx'

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
			<h2>
				Username:{userInfo.user.first_name}
				<br />
				Location:{userInfo.user.location}
				<br />
				Experiences:{experienceCounter}
			</h2>
			)
	}


	renderLoading() {
		return (<h1>...Loading</h1>) 
	}
	
	render() {
	let { userInfo } = this.props;
		return (
				<div>	
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

