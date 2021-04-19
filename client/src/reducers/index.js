import { combineReducers } from 'redux';

const questionReducer = (question = null, action) => {
  switch (action.type) {
    case "FETCH_QUESTION":
      return action.payload;
    default: 
      return question;
  };
};

const answerReducer = (answer = null, action) => {
  switch (action.type) {
    case "SET_ANSWER":
      return action.payload;
    case "FETCH_QUESTION": {
      return null;
    }
    default:
      return answer;
  }
}

const timerRunningReducer = (running = false, action) => {
  switch (action.type) {
    case "START_TIMER":
      return action.payload;
    case "STOP_TIMER":
      return action.payload;
    case "FETCH_QUESTION":
      return true;
    default:
      return running;
  }
}

const avaiblePointsReducer = (points = 0, action) => {
  switch(action.type) {
    case "CALC_AVAIL_POINTS":
      return action.payload;
    default:
      return points;
  }
}

export default combineReducers({
  question: questionReducer,
  answer: answerReducer,
  timerRunning: timerRunningReducer,
  avaiblePoints: avaiblePointsReducer
});