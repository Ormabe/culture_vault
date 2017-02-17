import axios from 'axios';

export const FETCH_FEATURES = 'FETCH_FEATURES';

const ROOT_URL = 'http://localhost:2222/api/experiences/discover/featured';

export function getFeature() {
 const request = axios.get(ROOT_URL);
	return {
		type: 'FETCH_FEATURES',
		payload: request
	} 
}