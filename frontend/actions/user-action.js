import axios from 'axios';

export const UPDATE_USER = 'UPDATE_USER';


export function updateUserInfo(email) {

  const userInfo = axios.put('api/users/:id', {
      email
  });


  return {
    type: UPDATE_USER,
    payload: userInfo
  };
}
