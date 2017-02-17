import React, { Component } from 'react';
import {Link} from 'react-router';



export default class NavBar extends Component{
	render(){
		return (
			<div>
				<div className="navbar-container">
							<div className="navbar-explore"> <Link to="/explore">Explore</Link> </div>
							<div className="navbar-discover"> <Link to="/discover">Discover</Link> </div>
							<div className="navbar-logo"> Logo Here </div>
							<div className="navbar-about"> <Link to="#">About </Link></div>
							<div className="navbar-timeline"> <Link to="#">Timeline</Link> </div>
				</div>
			</div>
		)
	}
}




