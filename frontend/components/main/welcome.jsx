import React, { Component } from 'react';
import css from '../../styles/navigation/navigation.scss';
import { Link } from 'react-router';

export default class Welcome extends Component {
  render() {
    return (
    	<div>
      <div className="welcome-container">
        <video src="http://probeautyblog.com/wp-content/uploads/2017/02/culture-vault-opener-10mb.mp4" autoPlay loop />
      </div>

      <div className="welcome-text">
      	<div className="headline">Take Back Your Story</div>
        <div className="secondary-text">
          Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy
          rutrum caturday enim lived quis Mauris sit malesuada gf's saved fringilla enim. 
          
        </div>
        <button className="welcome-button">
          <Link to="/explore">Take Me On A Journey</Link>
        </button>
      </div>
      </div>
    );
  }
}
