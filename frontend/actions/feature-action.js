import axios from 'axios'


export const fetchData = feature => ({
	type:'FETCH_FEATURE',
	feature
})

export const getFeature = () => dispatch => {
	axios.get("/api/explore/country/experience")
	.then(response => {
		console.log('data ===>' , response.data)
		dispatch(fetchData(response.data[0]))
	})
}