import { combineReducers } from 'redux';

const questionReducer = (question = null, action) => {
  switch (action.type) {
    case "FETCH_QUESTION":
      console.log(action.payload)
      return action.payload;
    default: 
      return question;
  };
};

const answerReducer = (answer = null, action) => {
  switch (action.type) {
    case "SET_ANSWER":
      console.log("REDUCER");
      console.log(action.payload);
      return action.payload;
    default:
      return answer;
  }
}

export default combineReducers({
  question: questionReducer,
  answer: answerReducer
});