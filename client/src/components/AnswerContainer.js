import React from 'react';
import jQuery from 'jquery';
import { connect } from 'react-redux';

class AnswerContainer extends React.Component {
  
  componentDidMount() {
    jQuery("#answer-container").hide();
  }

  renderAnswer() {
    if (this.props.question) {
      return this.props.question[0].answer;
    }
  }

  render () {
    return (
      <div id="answer-container">
        <div className="modal-bkg">
          <div className="modal">
             <p>Your Answer: {this.props.answer}</p>
             <p>Correct Answer: {this.renderAnswer()}</p>
             <p>Points Awarded:</p>
            </div>        
          </div> 
        </div>
    )
  }
}

const matpStateToProps = state => {
  return {
    answer: state.answer,
    question: state.question
  }
}

export default connect(matpStateToProps)(AnswerContainer);