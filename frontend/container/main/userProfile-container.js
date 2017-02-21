import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserProfile } from '../../actions/user-action.js';
import styles from '../../components/main/signup-style';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const muiTheme = getMuiTheme();

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.updateProfile = this.updateProfile.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  updateProfile(e) {
    e.preventDefault();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <form onSubmit={this.updateProfile} autoComplete="off">
          <TextField
            name="search"
            value={this.state.email}
            onChange={this.handleChange}
            floatingLabelText="Enter email"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
          <RaisedButton
            label="Submit"
            labelStyle={{ fontSize: styles.fontSize }}
            type="submit"
            backgroundColor={styles.backgroundLogIn}
            labelColor={styles.color}
          />
        </form>
      </MuiThemeProvider>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateUserProfile }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserProfile);
