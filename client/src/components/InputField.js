import React, { useState } from 'react';
import { connect } from 'react-redux';
import jQuery from 'jquery';
import { fetchQuestion } from '../actions/index';

const InputField = (props) => {

  const [answer, setAnswer] = useState();

  const handleChange = (event) => {
    setAnswer(event.target.value)
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
    showAnswerContainer();
    setAnswer("");
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
  fetchQuestion
})(InputField);