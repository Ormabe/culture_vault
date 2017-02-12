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
