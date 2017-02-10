import { connect } from 'react-redux';

import Locations from '../../components/main/location.js'


const mapStateToProps = state => ({
	location:state.location
})

export default connect(mapStateToProps)(Locations);
