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

// *************************************** //\

export const USER_ID = 'USER_ID';

const ROOT_URL2 = 'http://localhost:2222/api/data'

export function getUserId(){
	const request2 = axios.get(ROOT_URL2)
	return {
		type:USER_ID,
		payload:request2
	}
}

