import axios from 'axios';

export const fetchQuestion = () => async dispatch => {
  const URL = "https://opentdb.com/api.php?amount=1"
  const response = await axios(URL);
  dispatch({
    type: "FETCH_QUESTION",
    payload: response.data
  });
};

export const setAnswer = (answer) => {
  return {
    type: "SET_ANSWER",
    payload: answer
  };
};

export const startTimer = () => {
  return {
    type: "START_TIMER",
    payload: true
  }
}

export const stopTimer = () => {
  return {
    type: "STOP_TIMER",
    payload: false
  }
}

export const calculateAvailablePoints = (points) => {
  return {
    type: "CALC_AVAIL_POINTS",
    payload: points
  }
}
