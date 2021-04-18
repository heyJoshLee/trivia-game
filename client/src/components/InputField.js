import React, { useState } from 'react';
import { connect } from 'react-redux';
import jQuery from 'jquery';
import { fetchQuestion, setAnswer } from '../actions/index';

const InputField = (props) => {

  const [answer, setAnswerField] = useState();

  const handleChange = (event) => {
    setAnswerField(event.target.value)
  }

  const showAnswerContainer = () => {
    const container = jQuery("#answer-container");
    container.show("slow", () => {
      container.delay(5000).hide("slow", () => {
        props.fetchQuestion();
      });
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setAnswer(answer);
    showAnswerContainer();
    setAnswerField("");
  }

  const answeredCorrectly = () => {
    return answer.toLowerCase === props.question[0].answer.toLowerCase;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input autoComplete="off" onChange={handleChange} value={answer} name="answer"></input>
    </form>
  )
}

const matpStateToProps = state => {
  return {
    question: state.question
  }
}

export default connect(matpStateToProps, {
  fetchQuestion,
  setAnswer
})(InputField);