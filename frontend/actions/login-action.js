import axios from 'axios'

export const LOGIN_USER = 'LOGIN_USER'

export const LOGOUT_USER = 'LOGOUT_USER'

const ROOT_URL = `http://localhost:2222/api/login/`

const ROOT_URL_LOGOUT = `http://localhost:2222/api/logout/`

export function loginUserFunc (email,password) {
  const loginUser = axios.post(`${ROOT_URL}`, {
                          email,
                          password
                        })
                        .then((response) => {
                            window.location = response.data;
                        })


  return {
    type: LOGIN_USER,
    payload: loginUser
  }

}

export function logOutUserFunc (userId) {
  const logOutUser = axios.get(`${ROOT_URL_LOGOUT}`, {
                            userId
                        })
                        .then((response) => {
                            window.location = response.data;
                        })


  return {
    type: LOGOUT_USER,
    payload: logOutUser
  }

}
