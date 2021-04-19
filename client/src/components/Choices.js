import React from 'react';
import { connect } from 'react-redux';
import { setAnswer, fetchQuestion, stopTimer, calculateAvailablePoints } from '../actions';
import jQuery from 'jquery';
import he from 'he';


const Choices = (props) => {

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const checkPointsForQuestion = () => {
    const points = Math.round(parseInt(jQuery("#inside").css('width')) / parseInt(jQuery("#progress-bar").css("width")) * 100);
    props.calculateAvailablePoints(points);
  }

  const handleClick = (choice) => {
    props.setAnswer(choice);
    props.stopTimer();
    checkPointsForQuestion();
    const container = jQuery("#answer-container");
    container.show("fast", () => {
      container.delay(1000).hide("slow", () => {
        props.fetchQuestion();
      });
    });
  }


  const renderChoices = () => {
    if (!props.question) {
      console.log("No question")
      return <div></div>
    } else {
      let choices = props.question.results[0].incorrect_answers;
      let correct_answer = props.question.results[0].correct_answer;
      choices.push(correct_answer);
      shuffleArray(choices)
      return props.question.results[0].incorrect_answers.map(choice => {
        return <div onClick={() => handleClick(choice)} className="choice">{he.decode(choice)}</div>
      })
    }
  }
  return (
    <div className="choices">
      {renderChoices()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    question: state.question,
    answer: state.answer
  }
}

export default connect(mapStateToProps,
   {
     setAnswer,
     fetchQuestion,
     stopTimer, 
     calculateAvailablePoints
   })(Choices);