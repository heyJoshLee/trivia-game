import React from 'react';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchQuestion, startTimer } from '../actions/index';
import Choices from './Choices';
import TimeBar from './TimeBar';
import he from 'he';

class QuestionContainer extends React.Component {

  componentDidMount() {
    this.props.fetchQuestion();
    this.props.startTimer()
  }

  renderQuestion() {
    if (!this.props.question) {
      return <div>Loading...</div>
    } else {
      console.log(this.props.question)
      return (
        <>
          <h3>Category</h3> 
          <p>{he.decode(this.props.question.results[0].category)}</p>
          <h3>Question</h3>
          <p>{he.decode(this.props.question.results[0].question)}</p>
          <Choices />
          <TimeBar />
        </>
      )
    }
  }

  render() {
    return (
      <Paper className="question-container" elevation={3}>
        {this.renderQuestion()}
      </Paper>
    );
  };
  }


const matpStateToProps = state => {
  return {
    question: state.question
  }
}

export default connect(matpStateToProps, {
  fetchQuestion,
  startTimer
})(QuestionContainer);