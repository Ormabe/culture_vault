import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUserForm } from '../../actions/signup-action';
import { bindActionCreators } from 'redux';

import axios from 'axios';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const muiTheme = getMuiTheme();

const styles = require('./signup-style').formStyles

explore default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:"",
      email:"",
      password:""
    }
  }
  handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.handleChange()
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
    const info = this.state
    // const that = this

    axios.post('api/explore/users') // State for the store
      let user = {
        username: null,
        email: null,
        password: null
      }
        .then(() => {
          user.username: this.state.username,
          user.email: this.state.email,
          user.password: this.state.password
        })
        .then(data => {
          store.dispatch(createUserForm(user))
        })
        .catch(err => {
          console.log(err)
        })
    // $.ajax({
    //   url: 'api/explore/users',
    //   type: 'POST',
    //   data: info,
    //   success: function(data) {
    //     console.log('posted',data)
    //     that.setState({username:"",email:"",password:""})
    //   }
    // })
  }
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
};

function mapStateToProps(state) {
  return {
    username: state.username,
    email: state.email,
    password: state.password
  }
}

export default connect(mapStateToProps, { createUserForm })(SignUpForm)
