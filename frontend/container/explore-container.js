import { connect } from 'react-redux';
import Explore from '../components/main/explore.js'

const mapStateToProps = state => {
	console.log("explore",state.explore)
	return {
	explore: state.explore
 }
}

 //everything in actions and state will be passed down to Explore component through props
export default connect(mapStateToProps)(Explore)
