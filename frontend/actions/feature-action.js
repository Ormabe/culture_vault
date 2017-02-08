import axios from 'axios'

export const fetchData = feature => ({
	type:'FETCH_DATA',
	feature
})

export const getFeature = () => dispatch => {
	axios.get("/api/explore/country/experience")
	.then(data => {
		console.log('ACTION ===>' , data)
		dispatch(fetchData(data))
	})
}