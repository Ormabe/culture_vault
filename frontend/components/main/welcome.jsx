import React, { Component } from 'react';
import LogInForm from './loginform.js';
import SignUpForm from './signupform.js';
import css from '../../styles/navigation/navigation.scss';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';




injectTapEventPlugin();

export default class Welcome extends Component {
  render() {
    return (
    	<div>
      <div className="welcome-container">
        <video src="http://probeautyblog.com/wp-content/uploads/2017/02/culture-vault-opener-10mb.mp4" autoPlay loop />
      </div>

      <div className="welcome-text">
        <div className="welcome-spacer"></div>
      	<div className="headline">Take Back Your Story</div>
        <div className="secondary-text white-text">
          Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy
          rutrum caturday enim lived quis Mauris sit malesuada gf's saved fringilla enim.

        </div>
        <div className="welcome-button">
          <Link to="/explore"><img src="https://s25.postimg.org/wnwmcrgrj/welcome_journey_button.png" alt="Explore Culture Vault" /></Link>
        </div>
      </div>
      </div>
    );
  }
}
