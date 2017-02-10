import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUserForm } from '../../actions/signup-action';
import { bindActionCreators } from 'redux';

import axios from 'axios';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';

injectTapEventPlugin();

const muiTheme = getMuiTheme();

const styles = require('./signup-style').formStyles
// const styles = require('./signup-style').signUpStyles
const customContentStyle = require('./signup-style').customContentStyle

var FaEmail= require('react-icons/lib/fa/envelope')
var FaFacebook = require('react-icons/lib/fa/facebook-square')
var FaGoogle = require('react-icons/lib/fa/google-plus-square')

class SignUpForm extends Component {
  constructor(props) {
    super(props);

this.handleChange = this.handleChange.bind(this)
this.enterUser = this.enterUser.bind(this)
this.handleDialogOpen = this.handleDialogOpen.bind(this)
this.handleDialogClose = this.handleDialogClose.bind(this)

    this.state = {
      email:"",
      password:"",
      open: false
    }
  }
	handleChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value }) // Local react state
	}
  enterUser(e) {
    e.preventDefault()

    // const that = this

    this.props.createUserForm(this.state.email,this.state.password)
    this.setState({
      email:"",
      password:""
    })
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
        <RaisedButton label="SIGN UP" onTouchTap={this.handleDialogOpen} />
        <Dialog
          title="SIGN UP TO CULTURE VAULT"
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handleDialogClose}
          style={{textAlign: styles.textAlign}}
        >
      <form onSubmit={this.enterUser} autoComplete="off">
        {/* <TextField
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          floatingLabelText="Enter Username"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br /> */}
        <TextField
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          floatingLabelText="Enter Email Address"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <TextField
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          floatingLabelText="Enter Password"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <RaisedButton
          label="Submit"
          labelStyle={{fontSize: styles.fontSize}}
          type="submit"
          backgroundColor={styles.backgroundColor}
          style={{color: "#FFFFFF"}}
          icon={<FaEmail style={{fontSize: styles.fontSize}}/>}
        />
      </form>
      <h3>OR</h3>
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
      />
    </Dialog>
    </div>
    </MuiThemeProvider>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createUserForm  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignUpForm)
