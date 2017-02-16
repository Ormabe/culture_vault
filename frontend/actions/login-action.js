import axios from 'axios'

//const passport = require('passport')

export const LOGIN_USER = 'LOGIN_USER'


export function loginUserFunc (email,password) {
const loginUser = axios.post('api/login', {
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
    type: LOGIN_USER,
    payload: loginUser
  }
}
