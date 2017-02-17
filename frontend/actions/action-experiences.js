import axios from 'axios';

export const FETCH_EXPERIENCE = 'FETCH_EXPERIENCE';
export const CREATE_EXPERIENCE = 'CREATE_EXPERIENCE';

const ROOT_URL = 'http://localhost:2222/api/experiences/';

export function fetchExperience(id) {
	const request = axios.get(`${ROOT_URL}${id}`)

	return {
		type: FETCH_EXPERIENCE,
		payload: request
	}
}

export function createNewExperience(id, state) {
	const request = axios.post(`${ROOT_URL}/create/${id}`, { state })

	return {
		type: CREATE_EXPERIENCE,
		payload: request
	}
}


