import React from 'react';
import $ from 'jquery';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

var FaEmail= require('react-icons/lib/fa/envelope')
var FaFacebook = require('react-icons/lib/fa/facebook-square')
var FaGoogle = require('react-icons/lib/fa/google-plus-square')

injectTapEventPlugin();
import path from 'path';
import SignUpForm from './signupform'
const styles = require('./signup-style').signUpStyles
const customContentStyle = require('./signup-style').customContentStyle


const muiTheme = getMuiTheme();

const SignUp = React.createClass({
  getInitialState() {
    return ({open: false})
  },
  handleDialogOpen () {
    this.setState({open: true});
  },
  handleDialogClose () {
    this.setState({open: false});
  },
  render(){

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
          <RaisedButton
            labelStyle={{fontSize: styles.fontSize}}
            target="_blank"
            label="Email Link"
            style={styles.button}
            icon={<FaEmail style={{fontSize: styles.fontSize}}/>}
          />
          <br />
          <RaisedButton
            href="https://www.facebook.com"
            disabled={true}
            target="_blank"
            label="Facebook Link"
            style={styles.button}
            icon={<FaFacebook />}
          />
          <br />
          <RaisedButton
            href="https://www.google.com"
            disabled={true}
            target="_blank"
            label="Google Link"
            style={styles.button}
            icon={<FaGoogle />}
          />

          </Dialog>
        </div>
      </MuiThemeProvider>
    )

}
})

export default SignUp
