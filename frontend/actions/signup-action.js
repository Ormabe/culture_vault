import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';

export function createUserForm(email, password) {
  const postUser = axios.post('api/users', {
    email,
    password,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
  return {
    type: CREATE_USER,
    payload: postUser,
  };
}
