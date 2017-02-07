import React from 'react';
import SignUp from './components/main/signup'
import SignUpForm from './components/main/signupform'

const CultureVault = React.createClass({
	render() {
		return(
			<div>
				App
        <SignUp />
        <SignUpForm />
				{this.props.children}

			</div>
		)
	}
});

export default CultureVault;
