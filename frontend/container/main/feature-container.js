//this is how we connect component to container by importing it into the container.
import {connect} from 'react-redux';

//import the component to have reference to what you are connecting to..
import Feature from '../../components/main/feature.js'

//mapStateToProps is just a word, that passes state and makes it available to our component.
const mapStateToProps = state => ({
	feature:state.feature
})
	//can put another reducer in here, if you want component to have access to that part of the store.

export default connect(mapStateToProps)(Feature);