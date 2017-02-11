import React, { Component } from 'react';
import store from '../../store/store.js';
import {getFeature} from '../../actions/feature-action.js';

const Feature extends Component {
	componentDidMount() {
		let { getFeature } = this.props;

		getFeature();
	}

	render(){
		let { feature } = this.props;

		if(feature){
		return(
			<div>
			<h1>Feature</h1>
			<p>Name: {this.props.feature.name}</p>
			<p>Quote: {this.props.feature.quote}</p>
			Image: <img src={this.props.feature.image} />
			
			</div>
			)
		}else{
		  return <div> ...Loading </div>
		}

}
}

export default Feature;
