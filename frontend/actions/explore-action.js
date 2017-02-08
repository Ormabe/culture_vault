import axios from 'axios'

export const fetchData = explore => ({
	type:'FETCH_LOCATION',
	explore: explore
})

export const getLocations = () => dispatch => {
	axios.get('/api/explore/countries')
	.then(response => {
		console.log('ACTION ===>' , response.data)
		if(response.data){
			dispatch(fetchData(response.data))
		}

	})
}