import axios from 'axios'

export const CREATE_USER = 'CREATE_USER'


export function createUserForm (email,password) {
const postUser = axios.post('api/explore/users', {
                        email,
                        password
                      })
                      .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
  return {
    type: CREATE_USER,
    payload: postUser
  }
}
