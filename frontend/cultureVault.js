import React from 'react';
import SignUp from './components/main/signup'
import SignUpForm from './components/main/signupform'
import Recipe from './components/experiences/recipe'

const CultureVault = React.createClass({
	render() {
		return(
			<div>
				App
        <SignUp />
        <SignUpForm />
				<Recipe />
				{this.props.children}

			</div>
		)
	}
});

export default CultureVault;
