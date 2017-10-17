import React, { Component } from 'react';
import LogInForm from './loginform.js';
import SignUpForm from './signupform.js';
import css from '../../styles/navigation/navigation.scss';
import { Link } from 'react-router';


export default class Welcome extends Component {
  render() {
    return (
    	<div>
      <div className="welcome-container">
        <video src="https://s3.us-east-2.amazonaws.com/culture-vault/cv-video-10mb.mp4" autoPlay loop />
      </div>

      <div className="welcome-text">
        <div className="welcome-spacer"></div>
      	<div className="headline">Take Back Your Story</div>
        <div className="secondary-text white-text">
          <b>Share</b> your culture, your flavor, your voice.

          <b>Experience</b> how others’ food, culture, and identity overlap.
        </div>
        <div className="welcome-button">
          <Link to="/explore"><img src="https://s3.us-east-2.amazonaws.com/culture-vault/welcome-journey-button.png" alt="Explore Culture Vault" /></Link>
        </div>
      </div>
      </div>
    );
  }
}
