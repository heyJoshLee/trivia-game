import React from 'react';
import jQuery from 'jquery';
import { connect } from 'react-redux';
import { startTimer, setAnswer, stopTimer, fetchQuestion } from '../actions/index'


class TimeBar extends React.Component {
    
  width = 100;
  startInterval = null;
  points =  100;

  componentDidMount() {
    if (this.props.timerRunning) {
      this.startTimerLocal();
    }
  }

  componentDidUpdate() {
    if (this.props.timerRunning) {
      this.startTimerLocal();
    } else {
      this.stopTimerLocal();
    }
  }

  reduceBar() {
    let $bar = jQuery("#inside");
    this.width -= 1;
    if (this.width === 70) {
      $bar.css("background-color", "orange")
    } else if (this.width === 40) {
      $bar.css("background-color", "red")
    } 
    let widthPercent = this.width + "%";
    $bar.width(widthPercent);
    if (this.width <= 0) {
      this.timeUp();
    }
  }

  timeUp() {
    this.props.setAnswer("NO ANSWER");
    this.stopTimerLocal();
    const container = jQuery("#answer-container");
    container.show("fast", () => {
      container.delay(1000).hide("slow", () => {
        this.props.fetchQuestion();
        this.startTimerLocal();
      });
    });
  }
 

  startTimerLocal() {
    jQuery("#inside").css("background-color", "green");
    this.width = 100;
    this.props.startTimer();
    this.startInterval = setInterval(this.reduceBar.bind(this), 200)
  }

  stopTimerLocal() {
    clearInterval(this.startInterval);
  }

  render() {
    return (
      <div id="progress-bar">
        <div id="inside"></div> 
      </div>
    )
  }
 
}

const mapStateToProps = state => {
  return {
    timerRunning: state.timerRunning
  }
}

export default connect(mapStateToProps, {
  startTimer,
  stopTimer,
  setAnswer,
  fetchQuestion
})(TimeBar);