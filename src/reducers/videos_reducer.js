export default function videosReducer(state={loading: false, videos: []}, action) {
  switch(action.type) {
    case 'LOADING_VIDS':
      return {...state, loading: true}
    case 'FETCH_VIDS':
      return {loading: false, videos: action.payload}
    default:
      return state
  }
}
