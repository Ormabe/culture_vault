import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLocations } from '../../actions/explore-action.js'

class ExploreBTN extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)


  }

onFormSubmit(event) {
    event.preventDefault()

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });

  }
  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
          <button type="USA" className="btn btn-secondary">USA</button>
      </form>
    )
  }
}

// mapDispatchToProps ALWAYS GOES IN AS THE SECOND ARGUMENT
function mapStateToProps ({ locations }) { // Identical to const weather = state.weather
  return { locations } // identical to weather: weather
}

export default connect(mapStateToProps)(ExploreBTN)


// const Explore = React.createClass({
//
// 	componentDidMount(){
// 		console.log("============>>> DID MOUNT")
// 		this.setState({country:this.getLocations()})
// 	},
//
// 	render() {
// console.log(this.props.explore)
// 		return(
// 			<div>
//         <button></button>
// 			</div>
// 		)
// 	}
// });
//
// export default Explore;
