import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';

const ROOT_URL = `http://localhost:2222/api/users/`

export function createUserForm(email, password) {
  const postUser = axios.post(`${ROOT_URL}`, {
    email,
    password,
  })
  .then((response) => {
      window.location = response.data;
  })

  return {
    type: CREATE_USER,
    payload: postUser,
  };
}
