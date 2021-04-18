import axios from 'axios';

export const fetchQuestion = () => async dispatch => {
  const URL = "http://jservice.io/api/random"
  const response = await axios(URL);
  dispatch({
    type: "FETCH_QUESTION",
    payload: response.data
  });
};

export const setAnswer = (answer) => {
  console.log("ACTION")
  return {
    type: "SET_ANSWER",
    payload: answer
  };
};
