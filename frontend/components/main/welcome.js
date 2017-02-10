import React from 'react';

const Welcome = React.createClass({
	render() {
		return(
			<div>
				I'm the Welcome component.
				{this.props.children}
			</div>
		)
	}
});

export default Welcome;