import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLikes } from '../../actions/action-likes';
import LikesImage from './likes-image';
import LikesCounter from './likes-counter';
import axios from 'axios'


class Likes extends Component {
	constructor(props){
		super(props)

		this.state = { likes: []}
			
		this.likesCounter = this.likesCounter.bind(this)

	}

	componentWillMount(){
		let { fetchLikes } = this.props
		let id = this.props.id
		console.log("componentWillMount")
		
		fetchLikes(id)
 	}

 	likesCounter() {
 		let { likes } = this.props;
		let counter = likes.length
		console.log(counter)
		return (
			<div>
			{counter}
			</div>
		)
 	}

 	addLikes(experienceId,userId) {
		let ROOT_URL = `http://localhost:2222/api/likes/`
		
		console.log('im likeing this experience')
		axios.post(`${ROOT_URL}${experienceId}/${userId}`)
		.then(() => {
			this.props.fetchLikes()
		})
	}
	
	deleteLikes(experienceId,userId) {
		let ROOT_URL = `http://localhost:2222/api/likes/`

		console.log("i am unlikeing this experience")
		axios.delete(`${ROOT_URL}${experienceId}/${userId}`)
		.then(() => {
			this.props.fetchLikes()
		})
	}

 	render(){
	let { likes } = this.props;
		console.log(likes)
 		if(!likes[0]){
 		return(
			<div>...Loading</div>
 			)
 		} 
 		
 		return (
 		 	<div>
 				Hello from the likes Component
 				
 				<LikesCounter likesCounter={this.likesCounter.bind(this)} />
 				<LikesImage 
	 				likes={this.state.likes}
	 				addLikes={this.addLikes.bind(this)} 
	 				deleteLikes={this.deleteLikes.bind(this)}
					experienceId={this.props.id}
					userId= {1}
	 				 />
 			</div>
		)
 	}
}

function mapStateToProps(state) {
	return { likes: state.likes.likes }
}

export default connect(mapStateToProps, { fetchLikes })(Likes);