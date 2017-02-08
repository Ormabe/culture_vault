import React from 'react';
import store from '../../store/store.js'
import {getFeature} from '../../actions/feature-action.js'

const Feature = React.createClass({
	componentWillMount(){
		store.dispatch(getFeature())
	},
	render(){
		console.log('FEATURE ===>',this.props.featureProps.data)
		let feature = this.props.featureProps.data
		if(feature[0]){
		return(
			<div>

			Featured
			Name:
			Quote:  
			Image: 
			</div>
			)
	} else {
		return <div> ... Loading </div>
		}
	}
	
}) 

export default Feature;