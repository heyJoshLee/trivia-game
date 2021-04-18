import axios from 'axios';

export const fetchQuestion = () => async dispatch => {
  const URL = "http://jservice.io/api/random"
  const response = await axios(URL);
  dispatch({
    type: "FETCH_QUESTION",
    payload: response.data
  })
}
