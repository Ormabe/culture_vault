import React, { Component } from 'react';
import {Link} from 'react-router';
import LogInForm from '../main/loginform.js';
import SignUpForm from '../main/signupform.js';
import css from '../../styles/navigation/navigation.scss';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-container">
        	<div className="navbar-explore">
        		<Link to="explore">Explore</Link>
        	</div>
        	<div className="navbar-discover">
        		<Link to="discover">Discover</Link>
        	</div>
        	<div className="navbar-logo">
        		<Link to="/"><img src="https://s25.postimg.org/s4cklvyxr/culture_vault_logo.png" alt="Culture Vault" /></Link>
        	</div>
        	<div className="navbar-about">
        		<Link to="#">About</Link>
        	</div>
          <div className="navbar-login">
            <div>
        		    <LogInForm />
            </div>
            <div>
                <SignUpForm />
            </div>
         	</div>
        </div>
      </div>
    );
  }
}
// export default class NavBar extends Component{
//  render(){
//    return (
//      <div>
//        <div className="navbar-container">
//              <div className="navbar-explore"> <Link to="/explore">Explore</Link> </div>
//              <div className="navbar-discover"> <Link to="/discover">Discover</Link> </div>
//              <div className="navbar-logo"> Logo Here </div>
//              <div className="navbar-about"> <Link to="#">About </Link></div>
//              <div className="navbar-timeline"> <Link to="#">Timeline</Link> </div>
//        </div>
//      </div>
//    )
//  }
// }
