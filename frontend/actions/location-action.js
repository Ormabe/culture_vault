import axios from 'axios'


export const fetchData = location => ({
	type:'FETCH_COUNTRY',
	location
})


export const getExperience = (id) => dispatch => {
	axios.get(`/api/explore/countries/${id}`)
	.then(response => {
		console.log('dataFuck ===>' , response.data)

	})
}
