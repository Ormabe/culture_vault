import React from 'react';
import SignUpForm from './components/main/signupform';
import NavBar from "./components/navigation/navbar.js"
import Footer from "./components/navigation/footer.js"


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
					<NavBar />
				<div >
						{this.props.children}
			</div>
			<Footer />
			</div>
		)
	}
});

export default CultureVault;
