import { combineReducers } from 'redux';

const questionReducer = (question = null, action) => {
  switch(action.type) {
    case "FETCH_QUESTION":
      console.log(action.payload)
      return action.payload;
    default: 
      return question;
  };
};

export default combineReducers({
  question: questionReducer
});