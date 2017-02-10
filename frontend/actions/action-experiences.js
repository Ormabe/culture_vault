import axios from 'axios';

export const FETCH_EXPERIENCE = 'FETCH_EXPERIENCE';

const ROOT_URL = 'http://localhost:2222/api/explore/country/experience/'

export function fetchExperience(id) {
	const request = axios.get(`${ROOT_URL}${id}`);

	return {
		type: FETCH_EXPERIENCE,
		payload: request
	}
}


