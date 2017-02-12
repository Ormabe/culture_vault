import axios from 'axios';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';

const ROOT_URL = 'http://localhost:2222/api/comments/'

export function fetchComments(id) {
	const request = axios.get(`${ROOT_URL}${id}`);

	return {
		type: FETCH_COMMENTS,
		payload: request
	}
}

export function createComment(comment, experience) {
	const request = axios.post(`${ROOT_URL}experience/${experience}`, { comment })
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})

	return {
		type: CREATE_COMMENT,
		payload: request
	}
}