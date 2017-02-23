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


const muiTheme = getMuiTheme();

const styles = require('./signup-style').formStyles
const customContentStyle = require('./signup-style').customContentStyle

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

    this.setState({ [name]: value })
	}
  enterUser(e) {
    e.preventDefault()

    this.props.createUserForm(this.state.email,this.state.password)
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
          label="SIGN UP"
          labelStyle={{fontSize: styles.fontSize}}
          backgroundColor={styles.backgroundSignUp}
          labelColor={styles.color}
          onTouchTap={this.handleDialogOpen}
        />
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
          label="Sign Up"
          labelStyle={{fontSize: styles.fontSize}}
          type="submit"
          backgroundColor={styles.backgroundSignUp}
          labelColor={styles.color}
        />
      </form>
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
