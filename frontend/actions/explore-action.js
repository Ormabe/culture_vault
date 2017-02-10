import axios from 'axios'

export const FETCH_COUNTRY = 'FETCH_COUNTRY'

export const fetchData = explore => ({
	type:'FETCH_LOCATION',
	explore: explore
})

export const getLocations = () => dispatch => {
	axios.get('/api/explore/countries')
	.then(response => {
		console.log('ACTION ===>' , response.data)
			dispatch(fetchData(response.data))


	})
}

// export const fetchCountry = () => {
// 	const request =  axios.get('/api/explore/countries/:country')
// 												.then(function (response) {
// 													console.log(response);
// 												})
// 												.catch(function (error) {
// 													console.log(error);
// 												});

// 	return {
// 		type: FETCH_COUNTRY,
// 		payload: request
// 	}
// }
