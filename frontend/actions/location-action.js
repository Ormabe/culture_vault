import axios from 'axios'

export const FETCH_LOCATION = 'FETCH_LOCATION';

const ROOT_URL = 'http://localhost:2222/api/explore/country/';


export function getCountryExperience(countryId) {
 const request = axios.get(`${ROOT_URL}${countryId}`)
	return {
		type: 'FETCH_LOCATION',
		payload: request
	} 
} 