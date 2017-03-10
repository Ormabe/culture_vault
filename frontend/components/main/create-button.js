import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loginUserFunc } from '../../actions/login-action';
import { bindActionCreators } from 'redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import axios from 'axios';


const muiTheme = getMuiTheme();

const styles = require('./signup-style').formStyles
const customContentStyle = require('./signup-style').customContentStyle

var FaPlusSquare = require('react-icons/lib/fa/plus-square')


export default class CreateButton extends Component {
  constructor(props) {
    super(props);


    this.state = {
      userId: null
    }
  }
  componentDidMount(){
    axios.get('/api/data')
    .then((response)=>{
      if (response.data){
        this.setState({userId: response.data.id})
      console.log('CREATE BUTTON -> userId:',this.state.userId)
      }
     })
  }
  render () {
    const userId = this.state.userId

    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Link to={`/create/${userId}`}>
        <RaisedButton
          label="CREATE"
          labelStyle={{fontSize: styles.fontSize}}
          backgroundColor={styles.backgroundCreate}
          labelColor={styles.color}
          onTouchTap={this.handleDialogOpen}
          icon={<FaPlusSquare />}
          style={styles.cvButton}
        />
    </Link>
    </MuiThemeProvider>
    )
  }
};
