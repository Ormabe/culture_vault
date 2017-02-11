import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getFeature} from '../../actions/feature-action.js'
import { Link } from 'react-router'

class Feature extends Component{
	componentDidMount() {
		let { getFeature } = this.props;
		console.log("Component Is Mounted")
		getFeature()
	}
 
		getName() {
			const { features } = this.props;

			return (
				<div>
					<ul>
						{features.map(feature => {
							return (
								<li key={feature.id}>
									<Link to={`/experience/${feature.id}`}>
										<img src={feature.image} alt={feature.id} />
										<br />
										<strong>{feature.name}</strong>
										<br />
										<br />
									</Link>
								</li>	
							)
						})}
					</ul>
				</div>
			)
		}	
		
		get
		
	render(){
		let { features } = this.props;
		if(!features){
			return <div>...Loading</div>
		} 

		return <div>{this.getName()}</div>
	}
}

function mapStateToProps(state) {
	return { features: state.feature.features }
}

export default connect(mapStateToProps, { getFeature })(Feature);

