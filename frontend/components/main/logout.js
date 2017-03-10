import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOutUserFunc } from '../../actions/login-action';
import { bindActionCreators } from 'redux';
import SignUpForm from './signupform.js';

import axios from 'axios';

import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const muiTheme = getMuiTheme();

const styles = require('./signup-style').formStyles
const customContentStyle = require('./signup-style').customContentStyle


class LogOut extends Component {
  constructor(props) {
    super(props);

  this.handleChange = this.handleChange.bind(this)
  this.logOutUser = this.logOutUser.bind(this)

  }
	handleChange (e) {
  const target = e.target;
  const value = target.value;
  const name = target.name;

    this.setState({ [name]: value })
	}
  logOutUser(e) {
    e.preventDefault()
    console.log("<====== LOGOUT ======>")
    this.props.logOutUserFunc(this.props.userId)

    this.setState({userId: null})


  }

  render () {

    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
      <form onSubmit={this.logOutUser} autoComplete="off">

          <RaisedButton
            label="LOG OUT"
            labelStyle={{fontSize: styles.fontSize}}
            type="submit"
            backgroundColor={styles.backgroundLogout}
            labelColor={styles.color}
            style={styles.cvButton}
          />

      </form>
    </div>
    </MuiThemeProvider>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logOutUserFunc  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LogOut)
