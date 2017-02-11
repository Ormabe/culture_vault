import React from 'react';
import SignUpForm from './components/main/signupform';



const CultureVault = React.createClass({

	render() {
		const outer = {
			backgroundColor: "green"
		}
		const styling = {
			color: 'white',
			textAlign: "center",
			width: "100vw",
			fontSize: 48,
			paddingBottom: 30
		}
		const sign = {
			textAlign: 'right',
			width: "100vw",
			padding: 5,
			marginLeft: -30
		}

		return(
			<div>
				<div style={outer}>
					<div style={sign}>
						<SignUpForm />
					</div>
					<div style={styling}>
						Culture Vault
					</div>
				</div>
				<div >
						{this.props.children}
			</div>
			</div>
		)
	}
});

export default CultureVault;
