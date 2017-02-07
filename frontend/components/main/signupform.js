import React from 'react';
import $ from 'jquery';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const muiTheme = getMuiTheme();

const styles = require('./signup-style').formStyles

const SignUpForm = React.createClass({
  getInitialState() {
    return ({username:"",email:"",password:""})
  },
  handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.handleChange()
		}
	},
	handleChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
	},
  enterUser(e) {
    e.preventDefault()
    const info = this.state
    const that = this

    $.ajax({
      url: 'api/explore/users',
      type: 'POST',
      data: info,
      success: function(data) {
        console.log('posted',data)
        that.setState({username:"",email:"",password:""})
      }
    })
  },
  render () {
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <form onSubmit={this.enterUser} autoComplete="off">
        <TextField
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          floatingLabelText="Enter Username"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
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
        <FlatButton
          label="Submit"
          type="submit"
          backgroundColor={styles.backgroundColor}
          style={{color: styles.color}}
        />
      </form>
    </MuiThemeProvider>
    )
  }
});

export default SignUpForm
