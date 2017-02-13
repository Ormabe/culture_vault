import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { exploreSearch } from '../../actions/search-action';

class SearchBar extends Component {
  constructor(props) {
    super (props)

    this.state = { search: "" }

    this.onChange = this.onChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
}
onChange(e) {
  console.log(e.target.value)
  this.setState({ search: e.target.value});
}
onFormSubmit(e){
  e.preventDefault()
  this.props.exploreSearch(this.state.search);
  this.setState({ search: "" });
}
render() {
  return (
    <input
      placeholder="Enter a search term"
      className="form-control"
      value={this.state.search}
      onChange={this.onInputChange} />
    <span className="input-group-btn">
      <button type="submit" className="btn btn-secondary">Submit</button>
    </span>
  )
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ exploreSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
