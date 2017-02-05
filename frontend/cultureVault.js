import React from 'react';
 
const CultureVault = React.createClass({
	render() {
		return(
			<div>
				App
				{this.props.children}

			</div>
		)
	}
});

export default CultureVault; 