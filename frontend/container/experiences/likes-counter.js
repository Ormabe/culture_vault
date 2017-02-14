import React, { Component } from 'react';

export default class LikesCounter extends Component {
	render() {
		return ( 
				<div>
				{this.props.likesCounter()}
				</div>
		)
	}
}