import axios from 'axios'

export const EXPLORE_SEARCH = 'EXPLORE_SEARCH'


export function exploreSearch (search) {
const postSearch = axios.post('api/explore/search', {
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
