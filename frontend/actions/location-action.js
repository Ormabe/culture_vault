import axios from 'axios'


export const fetchData = location => ({
	type:'FETCH_COUNTRY',
	location
})

export const getExperience = () => dispatch => {
	axios.get("/api/explore/country/1")
	.then(response => {
		console.log('data ===>' , response.data)
		dispatch(fetchData(response.data))
	})
}
