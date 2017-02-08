import React from 'react';
import store from '../../store/store.js'
import {getFeature} from '../../actions/feature-action.js'

const Feature = React.createClass({
	componentDidMount(){
		store.dispatch(getFeature())
	},
	render(){
		console.log('FEATURE ===>',this.props.featureProps)
		// let feature = this.props.featureProps[0]
		return(
			<div>
			Feature
			Name: 
			Quote: 
			Image: 
			</div>
			)
		}
	
}) 

export default Feature;