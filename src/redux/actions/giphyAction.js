import axios from 'axios';
import { giphy_apis, api_key } from '../../utils/giphy';

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const GIPHY_ERROR = 'GIPHY_ERROR';

export const fetchTrending = (limit, offset) => (dispatch) => {
  axios({
    method: 'get',
    url: giphy_apis.trending,
    params: {
      api_key,
      limit,
      offset
    }
  }).then(res => dispatch({
    type: FETCH_TRENDING,
    payload: res.data
  })).catch(err => dispatch({
    type: GIPHY_ERROR,
    payload: err.response.data.message
  }))
}