import React from 'react';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions/index';
import InputField from './InputField';

class QuestionContainer extends React.Component {

  componentDidMount() {
    this.props.fetchQuestion();
  }

  renderQuestion() {
    if (!this.props.question) {
      return <div>Loading...</div>
    } else {
      const question = this.props.question[0];
      return (
        <>
          <h3>Category</h3> 
          <p>{question.category.title.charAt(0).toUpperCase() + question.category.title.slice(1)}</p>
          <h3>Question</h3>
          <p>{question.question}</p>
          <InputField />
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
  fetchQuestion
})(QuestionContainer);