import React from 'react';
import jQuery from 'jquery';
import { connect } from 'react-redux';
import he from 'he';

class AnswerContainer extends React.Component {
  
  componentDidMount() {
    jQuery("#answer-container").hide();
  }

  renderAnswer() {
    if (this.props.question) {
      return he.decode(this.props.question.results[0].correct_answer);
    }
  }

  renderChoice() {
    if (this.props.answer) {
      he.decode(this.props.answer)
    }
  }

  answeredCorrectly() {
    if (this.props.question && this.props.answer) {
      return this.props.answer === he.decode(this.props.question.results[0].correct_answer);    
    } else {
      return 0;
    }
  }

  renderPoints() {
    if (this.answeredCorrectly()) {
      return this.props.avaiblePoints;
    } else {
      return 0;
    }
  }

  render () {
    return (
      <div id="answer-container">
        <div className="modal-bkg">
          <div className="modal">
             <p>Correct Answer: {this.renderAnswer()}</p>
             <p>Points Awarded:{this.renderPoints()}</p>
            </div>        
          </div> 
        </div>
    )
  }
}

const matpStateToProps = state => {
  return {
    answer: state.answer,
    question: state.question,
    avaiblePoints: state.avaiblePoints
  }
}

export default connect(matpStateToProps)(AnswerContainer);