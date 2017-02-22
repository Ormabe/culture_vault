import axios from 'axios'

export const LOGIN_USER = 'LOGIN_USER'


export function loginUserFunc (email,password) {
const loginUser = axios.post('api/login', {
                        email,
                        password
                      })


  return {
    type: LOGIN_USER,
    payload: loginUser
  }
}
