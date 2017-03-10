import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getFeature} from '../../actions/feature-action.js'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const muiTheme = getMuiTheme();

import css from '../../styles/main/feature.scss';
const styles = require('./feature-style').featureStyles;



class Feature extends Component{

	componentDidMount() {
		let { getFeature } = this.props;
		console.log("Component Is Mounted")
		getFeature()
	}

		getName() {
			const { features } = this.props;

			return (
				<MuiThemeProvider muiTheme={muiTheme}>
				<div>
				<div><br /></div>
				<div style={styles.root}>

					<GridList
						cellHeight={200}
						cols={4}
						style={styles.gridList}
					>

						{features.map((feature) => (
							<GridTile
								key={feature.id}
								title={feature.name}
								// subtitle={<span>by <b>{feature.username}</b></span>}
								onClick={() => this.props.router.push(`/experience/${feature.id}`)}
							>
								<img src={feature.image} alt={feature.id} />
							</GridTile>
						))}
					</GridList>
				</div>
			</div>
			</MuiThemeProvider>
			)
		}


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
