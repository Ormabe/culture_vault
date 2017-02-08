import axios from 'axios'

export const getFeature = () => dispatch => {
	axios.get("/api/explore/country/experience")
	.then(data => dispatch ({
			type:'FETCH_DATA',
			data
	}))
	.catch(error => console.log(error))
}