import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { exploreSearch } from '../../actions/search-action';
import styles from '../../components/main/signup-style'

import axios from 'axios'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';


const muiTheme = getMuiTheme();

class SearchBar extends Component {
    constructor(props) {
      super (props)

      this.handleChange = this.handleChange.bind(this)
      this.newSearch = this.newSearch.bind(this)

      this.state = { search: "" }

  }
  handleChange(e) {
    console.log(e.target.value)
    this.setState({ search: e.target.value});
  }
  newSearch(e){
    e.preventDefault()
    this.props.exploreSearch(this.state.search);
    this.setState({ search: "" });
  }
  render() {
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <form onSubmit={this.newSearch} autoComplete="off">
          <TextField
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            floatingLabelText="Enter Search Term"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
          <RaisedButton
            label="Search"
            labelStyle={{fontSize: styles.fontSize}}
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
  return bindActionCreators({ exploreSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
