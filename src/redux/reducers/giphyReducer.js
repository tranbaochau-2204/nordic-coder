import { FETCH_TRENDING, GIPHY_ERROR } from '../actions/giphyAction';

const initialState = {
  data: [],
  total: 0,
  error: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TRENDING:
      return {
        ...state,
        data: action.payload.data,
        total: action.payload.pagination.total_count
      }
    case GIPHY_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}