import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLikes } from '../../actions/action-likes';


class Likes extends Component {
	constructor(props){
		super(props)

		this.state = { likes: [] }
		// this.likesCounter = this.likesCounter.bind(this);
	}

	componentWillMount(){
		let { fetchLikes } = this.props
		let id = this.props.id
		console.log("componentWillMount")
		
		fetchLikes(id)
 	}

 	likesCounter() {
 		let { likes } = this.props;
		
 		return (
				<div>
					{likes.map(like => {
						like.map(newLike => {
							console.log("NewLike!", newLike.id)
							return (
								<div>
								HELLO!
								</div>
							)
						})
					})}
				</div>
 		)
 	}

 	render(){
	let { likes } = this.props;
		console.log(likes[0])
 		if(!likes[0]){
 		return(
			<div>...Loading</div>
 			)
 		} 
 		
 		return (
 		 	<div>
 				Hello from the likes Component
 				{this.likesCounter()}
 			</div>
		)
 	}
}

function mapStateToProps(state) {
	return { likes: state.likes.likes }
}

export default connect(mapStateToProps, { fetchLikes })(Likes);