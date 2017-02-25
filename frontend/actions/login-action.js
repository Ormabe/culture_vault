import axios from 'axios'

export const LOGIN_USER = 'LOGIN_USER'

const ROOT_URL = `http://localhost:2222/api/login/`

export function loginUserFunc (email,password) {
  const loginUser = axios.post(`${ROOT_URL}`, {
                          email,
                          password
                        })
                        .then((response) => {
                            window.location = response.data;
                        })

  // return {
  //   type: LOGIN_USER,
  //   payload: loginUser
  // }
}
