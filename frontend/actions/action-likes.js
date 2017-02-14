import axios from 'axios';

export const FETCH_LIKES = 'FETCH_LIKES';

const ROOT_URL = `http://localhost:2222/api/likes/`

export function fetchLikes(id) {
	const request = axios.get(`${ROOT_URL}${id}`);

	return {
		type: FETCH_LIKES,
		payload: request
	}
}

/***************************************************/

export const ADD_LIKES = 'ADD_LIKE';

export function addLikes(experienceId,userId) {
	const request2 = axios.post(`${ROOT_URL}/${experienceId}/${userId}`);

	return {
		type: ADD_LIKES,
		payload: request2
	}
}

/***************************************************/

export const REMOVE_LIKES = 'REMOVE_LIKE';

export function deleteLikes(experienceId,userId) {
	const request3 = axios.delete(`${ROOT_URL}/${experienceId}/${userId}`);

	return {
		type: REMOVE_LIKES,
		payload: request3
	}
}



