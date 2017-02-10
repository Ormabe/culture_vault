import { connect } from 'react-redux';

import Locations from '../../components/main/location.jsx'


const mapStateToProps = state => ({
	location:state.location
})

export default connect(mapStateToProps)(Locations);