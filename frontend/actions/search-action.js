import axios from 'axios'

export const EXPLORE_SEARCH = 'EXPLORE_SEARCH'

const ROOT_URL = `http://localhost:2222/api/explore/search`

export function exploreSearch (search) {
const postSearch = axios.post(`${ROOT_URL}`, {
                        search
                      })
                      .then(function (response) {
                        console.log('[=== SEARCH ACTION FIRED ===]')
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
  return {
    type: EXPLORE_SEARCH,
    payload: postSearch
  }
}
