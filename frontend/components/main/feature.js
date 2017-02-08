import React from 'react';
import store from '../../store/store.js'
import {getFeature} from '../../actions/feature-action.js'

const Feature = React.createClass({
	componentDidMount() {
		console.log("============>>> DID MOUNT")
		store.dispatch(getFeature())
	},
	render(){
		console.log('FEATURE ===>',this.props.feature)

		// let feature = this.props.featureProps[0]
		return(
			<div>
			Feature
			Name:{this.props.feature.name}
			Quote:
			Image:
			</div>
			)
		}

})

export default Feature;