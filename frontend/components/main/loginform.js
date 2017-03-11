import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserFunc } from '../../actions/login-action';
import { bindActionCreators } from 'redux';
import SignUpForm from './signupform.js';

import axios from 'axios';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';

const muiTheme = getMuiTheme();

const styles = require('./signup-style').formStyles
const customContentStyle = require('./signup-style').customContentStyle
import css from '../../styles/main/buttons.scss';

var FaFacebook = require('react-icons/lib/fa/facebook-square')
var FaGoogle = require('react-icons/lib/fa/google-plus-square')

class LogInForm extends Component {
  constructor(props) {
    super(props);

  this.handleChange = this.handleChange.bind(this)
  this.loginUser = this.loginUser.bind(this)
  this.handleDialogOpen = this.handleDialogOpen.bind(this)
  this.handleDialogClose = this.handleDialogClose.bind(this)

    this.state = {
      email: "",
      password: "",
      open: false
    }
  }
	handleChange (e) {
  const target = e.target;
  const value = target.value;
  const name = target.name;

    this.setState({ [name]: value })
	}
  loginUser(e) {
    e.preventDefault()
    console.log("<====== LOGIN ======>")
    this.props.loginUserFunc(this.state.email,this.state.password)

    this.setState({
      email:"",
      password:""
    })
    this.handleDialogClose()
  }
  handleDialogOpen () {
    this.setState({open: true});
  }
  handleDialogClose () {
    this.setState({open: false});
  }
  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleDialogClose}
      />
    ];
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <RaisedButton
          label="LOG IN"
          labelStyle={{fontSize: styles.fontSize}}
          backgroundColor={styles.backgroundLogIn}
          labelColor={styles.color}
          onTouchTap={this.handleDialogOpen}
          style={styles.cvButton}
        />
        <Dialog
          title="LOG IN TO CULTURE VAULT"
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handleDialogClose}
          style={{textAlign: styles.textAlign}}
        >
      <form onSubmit={this.loginUser} autoComplete="off">

        <TextField
          name="email"
          required={true}
          value={this.state.email}
          onChange={this.handleChange}
          floatingLabelText="Enter Email Address"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <TextField
          name="password"
          required={true}
          value={this.state.password}
          onChange={this.handleChange}
          floatingLabelText="Enter Password"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          type="password"
        />
        <br />
        <br />
        <br />
        <div className="login-button-container">
          <div className="login-button">
          <RaisedButton
            label="Log In"
            labelStyle={{fontSize: styles.fontSize}}
            type="submit"
            backgroundColor={styles.backgroundLogIn}
            labelColor={styles.color}
            style={styles.cvButton}
          />
        </div>
        <div className="signup-button">
          <SignUpForm />
        </div>
        </div>
      </form>
      {/* <h3>OR</h3>
      <br />
      <RaisedButton
        href="https://www.facebook.com"
        disabled={true}
        target="_blank"
        label="Facebook Sign-In"
        style={styles.button}
        icon={<FaFacebook />}
      />
      <br />
      <RaisedButton
        href="https://www.google.com"
        disabled={true}
        target="_blank"
        label="Google Sign-In"
        style={styles.button}
        icon={<FaGoogle />}
      /> */}
    </Dialog>
    </div>
    </MuiThemeProvider>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUserFunc  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LogInForm)
