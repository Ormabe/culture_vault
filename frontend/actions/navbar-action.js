import axios from 'axios'

export const NAV_INFO = 'NAV_INFO'

const ROOT_URL = `http://localhost:2222/api/req`

export function navbarInfo () {
  const navbarResult = axios.get(`${ROOT_URL}`)


  return {
    type: NAV_INFO,
    payload: navbarResult
  }

}
