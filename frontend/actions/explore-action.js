import axios from 'axios'

export const fetchData = explore => ({
	type:'FETCH_DATA',
	explore
})

export const getLocations = () => dispatch => {
	axios.get('/api/explore/countries')
	.then(data => {
		console.log('ACTION ===>' , data)
		dispatch(fetchData(data))
	})
}