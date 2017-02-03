import React from 'react';

const CultureVault = React.createClass({
	render() {
		return(
			<div>
				{React.cloneElement({...this.props}.children, {...this.props})}
			</div>
		)
	}
});

export default CultureVault;