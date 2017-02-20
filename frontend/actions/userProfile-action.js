import axios from 'axios';

export const FETCH_USERINFO = 'FETCH_USERINFO';

const ROOT_URL = 'http://localhost:2222/api/users/profile/';

export function getuserInfo(userId) {
 const request = axios.get(`${ROOT_URL}${userId}`);
	return {
		type: 'FETCH_USERINFO',
		payload: request
	} 
}