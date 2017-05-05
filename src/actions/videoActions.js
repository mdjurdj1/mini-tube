import fetch from 'isomorphic-fetch'
import querystring from 'querystring'

// import checkStatus from './fetch/check-status'
// import parseJSON from './fetch/parse-json'

const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search`

export function searchVids(query) {

  const params = {
    part: 'snippet',
    q: query
  }

  return function(dispatch) {
    dispatch({type: 'LOADING_VIDS'})
    return fetch(`${SEARCH_URL}?${querystring.stringify(params)}`)
      .then(res => {return res.json()})
      .then(responseJson => {
        dispatch({type: 'FETCH_VIDS', payload: responseJson})
      })
  }
}
