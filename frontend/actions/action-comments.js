import axios from 'axios';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';

const ROOT_URL = 'http://localhost:2222/api/comments/'

export function fetchComments(id) {
	const request = axios.get(`${ROOT_URL}${id}`);

	return {
		type: FETCH_COMMENTS,
		payload: request
	}
}
